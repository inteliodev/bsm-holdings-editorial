# HHP Asset Management

Commercial real estate company website for **HHP Asset Management** — a vertically integrated asset management firm serving the Tulsa and Oklahoma City metros.

> The repository directory is still named `HHPAssetBrokerage-Management`. That is a folder name, not the company name. The trade name "HHP Asset Group" was retired — do not reintroduce it.

## Positioning

**Vertically Integrated. Data Driven. Forward Thinking.**

HHP is presented as an **asset management firm** and an operating company — not a technology vendor.

Asset management is the umbrella. Property management, Facility Services, and financial services sit beneath it as capabilities, not as peer business lines. **Brokerage is a supporting capability, not a headline.** Facility Services is delivered in house through HHP Facility Services, LLC, and the asset management and operating systems are built and maintained in house rather than licensed — which is what gives owners line-item cost visibility.

Self-performance is a *supporting reason*, not the thesis. The lead is accountability: one firm responsible for how the asset performs.

Site copy carries hard constraints (no AI branding, no SaaS-vendor voice). **Read the Brand Positioning section of [CLAUDE.md](./CLAUDE.md) before editing any user-facing text.**

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** with SWC plugin
- **Tailwind CSS** + **shadcn/ui**
- **React Router v6** (31 routes)
- **TanStack React Query**
- **Supabase** (database & auth)
- Deployed on **Vercel**

## Getting Started

```bash
npm install
npm run dev        # Start dev server on port 8080
```

## Scripts

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Environment Variables

`VITE_MAPBOX_TOKEN` powers the map on `/portfolio`. Without it the page still renders and now shows an address fallback instead of a blank grey pane.

Two optional overrides let the form endpoints move off a third-party domain without a code change:

- `VITE_CONTACT_WEBHOOK_URL`
- `VITE_NEWSLETTER_WEBHOOK_URL`

Both fall back to the existing n8n webhook when unset.

```bash
npx vercel env pull .env.local     # from the linked project, intelio/hhpbrokerandmanagement
```

The Supabase entries in `.env.example` are not read at runtime; `src/integrations/supabase/client.ts` hardcodes the project URL and anon key. Restart the dev server after pulling env — Vite reads `.env.local` only at startup.

## Project Structure

```
src/
  pages/           # Page components (services/, assetTypes/, technology/)
  components/      # Reusable components (Layout/, ui/)
    PlatformSection.tsx        # Six operating layers on Home (editorial list, navy)
    DashboardShowcase.tsx      # Dashboard mockup on Technology
    DisciplinesSection.tsx     # Asset Mgmt / Property Mgmt / Facility Services
    ServiceAreaSection.tsx     # Service area by metro (Home, Contact)
    LocalBusinessSchema.tsx    # RealEstateAgent JSON-LD + areaServed
  data/
    serviceArea.ts             # Canonical NAP + service-area cities (single source of truth)
  hooks/           # Custom hooks (analytics, SEO, scroll)
  utils/           # Utilities (analytics, debug)
  integrations/    # Supabase client & types
```

## Routing

31 routes, all reachable from the header, footer, or a hub page. Verify after any routing change — this should print nothing:

```bash
grep -oE 'path="[^"]+"' src/App.tsx | sed 's/path="//;s/"//' | sort -u > /tmp/routes.txt
grep -rhoE "['\"]/[A-Za-z0-9][A-Za-z0-9/_-]*['\"]" src --include=*.tsx --include=*.ts   --exclude=App.tsx | tr -d "'\"" | sort -u > /tmp/links.txt
comm -23 /tmp/routes.txt /tmp/links.txt | grep -v '^\*$' | grep -v '^/$'
```

30 legacy URLs 301 to their replacements via the `redirects` array in `vercel.json`. **Redirects must be declared there, not in React** — the catch-all rewrite means every path returns HTTP 200, so a client-side redirect would never emit a 301.

`public/sitemap.xml` is generated from the route table. Regenerate it whenever routes change; it previously drifted for over a year.

## Images

`npm run optimize:images` reports oversized assets; add `-- --write` to apply. It caps
full-bleed images at 1920px, headshots at 900px, the OG image at 1200x630, and
re-encodes to WebP. Safe to re-run — files already at target are skipped, so it will
not degrade an image by repeatedly re-encoding it.

A one-time pass took 12 files from 13.9 MB to 2.3 MB (84% smaller), and deleting 18
unreferenced files removed a further 25.8 MB. `public/` went from 49 MB to 16 MB.

All `<img>` tags carry `loading` and `decoding`; the header and hero marks are
`eager`/`fetchPriority="high"`, everything else is `lazy`. 18 have intrinsic
`width`/`height` to prevent layout shift.

## Prerendering

`npm run build` runs `vite build` and then `scripts/prerender.mjs`, which walks the
route table with headless Chrome and writes real HTML to `dist/<route>/index.html`.

This exists because the app is a client-rendered SPA behind a catch-all rewrite: every
URL used to serve the same empty `<div id="root">`. Googlebot renders JavaScript on a
delayed second pass, but Bing, LinkedIn, Slack, X and LLM crawlers do not — they saw a
blank page for every route.

Vercel serves the static files directly; the catch-all rewrite only applies when no
file matches, so deep links get prerendered HTML while client-side navigation is
unaffected.

- **Per-route SEO lives in `scripts/routeMeta.mjs`** — title, description, canonical,
  OG and Twitter tags, plus `noindex` on the two portal routes. Add an entry there
  whenever you add a route; a missing entry means that route keeps the generic tags
  from `index.html`.
- **The route list is parsed from `src/App.tsx`**, so it cannot drift from the router.
- **The build fails if any route fails to prerender.** That is deliberate — a silently
  un-prerendered deploy looks fine and is invisibly broken for crawlers. Use
  `npm run build:norender` to ship without it.
- **Chrome is cached in `.cache/puppeteer`** via `.puppeteerrc.cjs`, so Vercel's build
  cache covers it. Build-time only; nothing ships to the client.

Verify a deploy with:

```bash
curl -s https://hhpasset.com/services/facility-services | grep -o '<title>[^<]*</title>'
# must differ from the homepage title, and body content must be present without JS
```

Note the app mounts with `createRoot`, not `hydrateRoot`, so React discards the
prerendered DOM and re-renders on load. Content is present for crawlers; there is no
hydration-mismatch class of bug to worry about.

## Deployment

Deployed via Vercel with SPA routing configured in `vercel.json`.

## Brand Assets

Logos live in `public/brand/vector/` as SVG masters from the supplied vector kit:

| File | Use |
| --- | --- |
| `HHP_Logo_Primary_Cropped.svg` | Light backgrounds (header). Navy gradient, tight artboard. |
| `HHP_Logo_Apparel_White.svg` | Dark backgrounds (hero, footer). Solid `#FFFFFF`, transparent. |
| `HHP_Logo_Apparel_Navy.svg` | Solid navy, tight artboard. |
| `HHP_Logo_Primary.svg` | Padded artboard variant. |

The legacy rasters in `public/images/` are unreferenced and should not be used — the "white" PNG is a hollow outline padded inside a 1024² canvas, and the full-lockup PNGs have opaque white backgrounds that cannot sit on dark ground. Note the vector kit is **monogram only**; no variant carries the "ASSET GROUP" wordmark.

## Known Issues

Tracked but not yet addressed:

- **Two SEO mechanisms still coexist in the app** (`useSEO` and `react-helmet-async`) and neither covers every route. This no longer affects crawlers — the prerender step writes per-route tags from `scripts/routeMeta.mjs` — but it should be unified for the in-app tab title on client-side navigation.
- **Two lockfiles** (`bun.lockb` and `package-lock.json`) are committed; CI may resolve differently from local.
- **Two hero videos remain large**: `technology-hero.mp4` (6.5 MB) and `HeroHomePageHHP.mp4` (3.2 MB), together most of `public/`. They need re-encoding with ffmpeg, which is not available in this environment.
- **No `srcset`/`sizes` on any image**, so phones download desktop-sized assets. Less severe now that nothing exceeds ~320 kB, but still worth adding for the full-bleed backgrounds.
- **38 of 48 shadcn components are unused**, along with `zod`, `date-fns`, `@hookform/resolvers`, and `@tanstack/react-query` (provider only, no queries).
