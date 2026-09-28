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
  html = upsertHead(html, /<meta property="og:site_name"[^>]*>/, `<meta property="og:site_name" content="BSM Holdings">`);
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

/**
 * Launch Chrome.
 *
 * Puppeteer's own Chrome download does not run on Vercel's build image: the
 * binary is there but the system libraries it links against are not, so it dies
 * with `libnspr4.so: cannot open shared object file` (exit code 127). That broke
 * every production deploy from the moment prerendering was introduced — Vite
 * succeeded, this step exited 1, and the site silently stopped updating.
 *
 * @sparticuz/chromium ships a Chromium built for exactly this kind of
 * serverless/CI container, so it is used when running on CI and the normal
 * local Chrome is used otherwise.
 */
async function launchBrowser() {
  const onCI = Boolean(process.env.VERCEL || process.env.CI);

  if (onCI) {
    try {
      const { default: chromium } = await import('@sparticuz/chromium');
      return await puppeteer.launch({
        args: [...chromium.args, '--no-sandbox', '--disable-dev-shm-usage'],
        executablePath: await chromium.executablePath(),
        headless: true,
      });
    } catch (err) {
      console.error(`  CI Chromium unavailable — ${err.message}`);
    }
  }

  return puppeteer.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
}

let browser = null;
try {
  browser = await launchBrowser();
} catch (err) {
  // Deliberately not fatal. Prerendering is an SEO enhancement; the app is a
  // working SPA without it. Failing the build here means the site cannot ship
  // at all, which is strictly worse than shipping without prerendered HTML.
  console.error('\n!! Could not launch Chrome, skipping prerender.');
  console.error(`!! ${err.message}`);
  console.error('!! The build continues and the SPA still deploys, but routes');
  console.error('!! will not have per-route static HTML or SEO tags.\n');
}

let ok = 0;
const failed = [];

for (const route of browser ? routes : []) {
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

if (browser) await browser.close();
server.close();

/**
 * Sitemap, generated from the same route table that drives the prerender.
 *
 * It was previously a hand-maintained file in public/, which meant it could
 * silently fall out of step with the router — exactly the kind of drift the
 * route table exists to prevent. Routes flagged `noindex` in ROUTE_META are
 * excluded, so the sitemap never advertises a page we ask crawlers to skip.
 */
const indexable = routes.filter((r) => !ROUTE_META[r]?.noindex);
const today = new Date().toISOString().split('T')[0];

const priorityFor = (route) => {
  if (route === '/') return '1.0';
  if (route.split('/').length === 2) return '0.8';
  return '0.6';
};

const body = indexable
  .map(
    (route) =>
      `  <url>\n` +
      `    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>\n` +
      `    <lastmod>${today}</lastmod>\n` +
      `    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>\n` +
      `    <priority>${priorityFor(route)}</priority>\n` +
      `  </url>`,
  )
  .join('\n');

await writeFile(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${body}\n` +
    `</urlset>\n`,
  'utf8',
);

console.log(
  browser
    ? `\nPrerendered ${ok}/${routes.length} routes.`
    : `\nPrerender skipped — no browser available.`,
);
console.log(
  `Sitemap: ${indexable.length} indexable URLs (${routes.length - indexable.length} noindex excluded).`,
);

// Individual route failures are still fatal when the browser did start: that
// means a page threw, which is a real regression worth blocking on. A missing
// browser is not, and is reported above.
if (failed.length) {
  console.error('Failed routes:\n' + failed.map((f) => '  ' + f).join('\n'));
  process.exit(1);
}
