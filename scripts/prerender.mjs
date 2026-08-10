/**
 * Build-time prerender.
 *
 * The app is a client-rendered SPA behind a catch-all rewrite, so every URL used to
 * serve the same empty `<div id="root">`. Googlebot renders JavaScript on a delayed
 * second pass, but Bing, LinkedIn, Slack, X and every LLM crawler do not — they saw
 * a blank page for all routes. This walks the route table with headless Chrome and
 * writes the rendered HTML to disk, then stamps per-route SEO tags into each file.
 *
 * Runs after `vite build`. Output replaces dist/index.html and adds
 * dist/<route>/index.html for every other route, which Vercel serves directly —
 * the catch-all rewrite only applies when no static file matches.
 */
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { ROUTE_META, SITE_URL, DEFAULT_OG_IMAGE } from './routeMeta.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const PORT = 4183;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.mp4': 'video/mp4', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.xml': 'application/xml',
  '.txt': 'text/plain',
};

/** Route table is read from App.tsx so it cannot drift from the router. */
async function getRoutes() {
  const src = await readFile(join(ROOT, 'src/App.tsx'), 'utf8');
  return [...src.matchAll(/path="([^"]+)"/g)].map((m) => m[1]).filter((p) => p !== '*');
}

function serveDist() {
  return createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      let filePath = join(DIST, urlPath);
      if (!extname(filePath) || !existsSync(filePath)) filePath = join(DIST, 'index.html');
      const body = await readFile(filePath);
      res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] ?? 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404).end('not found');
    }
  });
}

/** Replace or insert a tag in <head>, so we never end up with duplicates. */
function upsertHead(html, matcher, tag) {
  return matcher.test(html)
    ? html.replace(matcher, tag)
    : html.replace('</head>', `    ${tag}\n  </head>`);
}

function applyMeta(html, route) {
  const meta = ROUTE_META[route];
  if (!meta) return html;
  const url = `${SITE_URL}${route === '/' ? '/' : route}`;
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const title = esc(meta.title);
  const desc = esc(meta.description);
  const image = meta.image ?? DEFAULT_OG_IMAGE;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = upsertHead(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${desc}">`);
  // Per-route canonical. A single static canonical in index.html previously told
  // every URL it was a duplicate of the homepage.
  html = upsertHead(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}">`);
  html = upsertHead(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}">`);
  html = upsertHead(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${desc}">`);
  html = upsertHead(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}">`);
  html = upsertHead(html, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}">`);
  html = upsertHead(html, /<meta property="og:site_name"[^>]*>/, `<meta property="og:site_name" content="HHP Asset Management">`);
  html = upsertHead(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}">`);
  html = upsertHead(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${desc}">`);
  html = upsertHead(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${image}">`);
  if (meta.noindex) {
    html = upsertHead(html, /<meta name="robots"[^>]*>/, `<meta name="robots" content="noindex,follow">`);
  }
  return html;
}

const routes = await getRoutes();
const server = serveDist();
await new Promise((r) => server.listen(PORT, r));

const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
let ok = 0;
const failed = [];

for (const route of routes) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 900 });
    // Block media so a 3.4 MB hero video does not gate every route's render.
    await page.setRequestInterception(true);
    page.on('request', (r) =>
      ['media', 'font'].includes(r.resourceType()) ? r.abort() : r.continue()
    );
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 45000 });
    await page.waitForSelector('#root > *', { timeout: 20000 });

    let html = await page.content();
    html = applyMeta(html, route);

    const outDir = route === '/' ? DIST : join(DIST, route);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, 'index.html'), html, 'utf8');

    const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    console.log(`  ${route.padEnd(38)} ${String(words).padStart(5)} words`);
    ok++;
  } catch (err) {
    failed.push(`${route}: ${err.message}`);
    console.error(`  ${route.padEnd(38)} FAILED — ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

console.log(`\nPrerendered ${ok}/${routes.length} routes.`);
if (failed.length) {
  console.error('Failed routes:\n' + failed.map((f) => '  ' + f).join('\n'));
  process.exit(1);
}
