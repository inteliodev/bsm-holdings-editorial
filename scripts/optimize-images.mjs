/**
 * One-pass image optimisation.
 *
 * Several in-use assets were multi-megabyte originals served at full size to every
 * device — a 2.7 MB background behind a text section, a 2.5 MB PNG headshot. This
 * caps dimensions at what the layout can actually display and re-encodes to WebP.
 *
 * Safe to re-run: files already at or under the target are skipped, so it will not
 * degrade an image by re-encoding it repeatedly.
 *
 *   npm run optimize:images          # report only
 *   npm run optimize:images -- --write
 */
import sharp from 'sharp';
import { readdir, stat, writeFile, readFile } from 'node:fs/promises';
import { join, extname, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WRITE = process.argv.includes('--write');

// Full-bleed backgrounds never need more than a large desktop viewport.
const MAX_WIDTH = 1920;
// Headshots and inline photos render far smaller than that.
const PORTRAIT_MAX = 900;
const QUALITY = 78;
// Open Graph images are specified at 1200x630 and must stay PNG/JPEG.
const OG_IMAGE = 'bsm-social-share.png';

const PORTRAITS = /(-ashley|fanning|pollard|headshot)/i;
const TARGETS = [join(ROOT, 'public/images'), join(ROOT, 'src/assets')];

const fmt = (n) => `${(n / 1024).toFixed(0)} kB`;
let before = 0, after = 0, changed = 0;

for (const dir of TARGETS) {
  let entries;
  try { entries = await readdir(dir); } catch { continue; }

  for (const name of entries) {
    const ext = extname(name).toLowerCase();
    if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) continue;

    const file = join(dir, name);
    const size = (await stat(file)).size;
    if (size < 150 * 1024) continue; // already small enough to ignore

    // Read into memory first. Passing a path keeps a handle open on the source, so
    // writing back to the same path fails with EBUSY on Windows.
    const input = await readFile(file);
    const meta = await sharp(input).metadata();
    const isOg = name === OG_IMAGE;
    const cap = isOg ? 1200 : PORTRAITS.test(name) ? PORTRAIT_MAX : MAX_WIDTH;
    const needsResize = (meta.width ?? 0) > cap;
    const needsReencode = ext === '.png' && !isOg; // photographic PNGs are the worst offenders

    if (!needsResize && !needsReencode && size < 400 * 1024) continue;

    let pipeline = sharp(input);
    if (needsResize) {
      pipeline = pipeline.resize({ width: cap, height: isOg ? 630 : undefined, fit: isOg ? 'cover' : 'inside', withoutEnlargement: true });
    }

    // Keep the OG image a PNG; everything else becomes WebP under its own extension
    // where it already is one, or is reported for a manual rename where it is not.
    let out = file, buf;
    if (isOg) {
      buf = await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer();
    } else if (ext === '.webp') {
      buf = await pipeline.webp({ quality: QUALITY }).toBuffer();
    } else if (ext === '.png') {
      out = join(dir, `${basename(name, ext)}.webp`);
      buf = await pipeline.webp({ quality: QUALITY }).toBuffer();
    } else {
      buf = await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
    }

    if (buf.length >= size && out === file) continue; // no gain, leave it alone

    before += size; after += buf.length; changed++;
    const renamed = out !== file ? `  ->  ${basename(out)}` : '';
    console.log(`${WRITE ? 'wrote ' : 'would '} ${name.padEnd(38)} ${fmt(size).padStart(9)} -> ${fmt(buf.length).padStart(9)}${renamed}`);
    if (WRITE) await writeFile(out, buf);
  }
}

console.log(
  `\n${changed} files: ${fmt(before)} -> ${fmt(after)} ` +
  `(${before ? (100 - (after / before) * 100).toFixed(0) : 0}% smaller)` +
  (WRITE ? '' : '\nDry run — pass --write to apply.')
);
