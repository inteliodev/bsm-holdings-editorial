const { join } = require('path');

/**
 * Puppeteer downloads Chrome to ~/.cache/puppeteer by default, which Vercel does not
 * include in its build cache — so the browser would be re-downloaded on every build,
 * or fail outright. Pointing the cache at a project-local directory puts it inside
 * the cached workspace.
 *
 * Chrome is only needed at build time by scripts/prerender.mjs; nothing ships to the
 * client, and `dist/` is gitignored.
 */
module.exports = {
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
