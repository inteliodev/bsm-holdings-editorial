# BSM Holdings

Commercial real estate company website for **BSM Holdings** — a vertically integrated asset management firm serving the Tulsa and Oklahoma City metros.

> The repository directory is still named `HHPAssetBrokerage-Management`. That is a folder name, not the company name. The trade name "BSM Holdings Asset Group" was retired — do not reintroduce it.

## Positioning

**Vertically Integrated. Data Driven. Forward Thinking.**

BSM Holdings is presented as an **asset management firm** and an operating company — not a technology vendor.

Asset management is the umbrella. Property management, Facility Services, and financial services sit beneath it as capabilities, not as peer business lines. **Brokerage is a supporting capability, not a headline.** Facility Services is delivered in house through BSM Holdings, LLC, and the asset management and operating systems are built and maintained in house rather than licensed — which is what gives owners line-item cost visibility.

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
npm run dev            # Start dev server
npm run build          # Production build + prerender + sitemap
npm run build:norender # Production build without prerendering
npm run lint           # ESLint
npm run typecheck      # tsc --noEmit
npm run preview        # Preview production build
```

There is no test framework. `npm run typecheck` plus a clean `npm run build` are
the closest equivalent — run both before pushing.

## Design System

Tokens live in `:root` in `src/index.css` and are surfaced through
`tailwind.config.ts`. Use the token, not a literal — inlined hex values that then
drift have been the recurring failure here.

**Fonts are self-hosted** via `@fontsource-variable` (imported in `src/main.tsx`):
Archivo Variable for display, Inter Variable for body. Do not add a Google Fonts
`<link>`. Brandon Grotesque used to lead every stack but was never licensed or
loaded, so it silently fell through to Montserrat.

**Headings are not uppercase.** A base rule used to force caps on every heading,
button and nav link, which capped the type scale at 2rem because caps break down
when set large. Caps are opt-in via `.u-caps` and `.eyebrow`. Display sizes are
fluid `clamp()` tokens (`text-display-2xl` … `display-md`), so they need no
breakpoint ladder.

Navy is `#061E4A`, gold `#C8952E`. `hhp-accent` is gold — it previously pointed
at a pale sky blue the design had abandoned while ~47 usages still referenced it.

There is no global `!important` override block any more; fluid sizing replaced
its purpose. The 44/48px touch targets it was legitimately providing are now set
at the component, with a `.tap` utility for inline text CTAs.

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
    CapabilityStack.tsx        # Scrollytelling: the firm (Home)
    BuildingSection.tsx        # Scrollytelling: the asset (Facility Services)
    SystemStack.tsx            # Scrollytelling: the software (Technology)
    DashboardShowcase.tsx      # Dashboard mockup on Technology (illustrative figures)
    DisciplinesSection.tsx     # Asset Mgmt / Property Mgmt / Facility Services
    ServiceAreaSection.tsx     # Service area by metro (Home, Contact)
    LocalBusinessSchema.tsx    # RealEstateAgent JSON-LD + areaServed
    SiteSchema.tsx             # Organization + WebSite + Breadcrumb + Service (all routes)
    AccessRequestForm.tsx      # Shared form for both portal pages
    AssetTypePage.tsx          # Shared template for all 6 asset-type pages
    AssetMark.tsx              # The 6 drawn asset-class line marks
  data/
    serviceArea.ts             # Canonical NAP + service-area cities (single source of truth)
    assetTypes.ts              # The 6 asset classes — labels, images, marks, tracks
    capabilities.ts            # The 6 services — CapabilityStack + Asset Management page
  lib/
    leads.ts                   # submitLead() — webhook + Supabase, used by all three forms
  hooks/
    useActiveStep.ts           # Which scrollytelling step is current (all three sections)
    useTimeOfDay.ts            # dawn/day/dusk/night in America/Chicago
    useScrollAnimation.tsx     # Prerender-safe scroll reveal (0.7 opacity floor)
  utils/           # Utilities (analytics, debug)
  integrations/    # Supabase client & types
```

## SEO & AEO

- **Per-route tags** are stamped into the prerendered HTML from
  `scripts/routeMeta.mjs` (title, description, canonical, OG, Twitter, `noindex`).
- **Structured data**: `SiteSchema.tsx` renders from `Layout`, so every route carries
  `Organization` + `WebSite`. `BreadcrumbList` (nested routes) and `Service`
  (capability pages) are derived from the pathname, so new routes are covered without
  touching the component. `LocalBusinessSchema` shares the Organization `@id` so the
  two merge into one entity rather than competing. `FAQ.tsx` emits `FAQPage` with all
  23 questions.
- **`public/llms.txt`** is the plain-language description for answer engines. It states
  the retired trade name and that BSM Holdings is an operating company, not a software vendor or
  an AI company — the two things a retrieval system is most likely to get wrong.
- **`robots.txt`** names the answer-engine crawlers explicitly. They were already
  covered by the wildcard; naming them makes the intent unambiguous.

Verify structured data after a deploy — assert on content, never on status code:

```bash
curl -s https://bsmholdings.com/ | grep -o '"@type":"[A-Za-z]*"' | sort -u
curl -s -o /dev/null -w "%{content_type}\n" https://bsmholdings.com/llms.txt   # text/plain
```

## Scrollytelling sections

Three sections share one interaction — a sticky diagram beside scrolling steps —
and each cuts through a different object, so the pattern reads as a house style
rather than a repeated trick:

| Page | Component | Subject |
| --- | --- | --- |
| Home | `CapabilityStack` | the firm |
| Facility Services | `BuildingSection` | the asset |
| Technology | `SystemStack` | the software |

Three rules if you add another:

- **Use `useActiveStep`.** Do not reimplement tracking with an
  IntersectionObserver band — it fails at the ends of a list (see
  `DEBUGGING_GUIDE.md`). It returns `{ active, progress, setRef }`; `progress` is
  the same measurement as a 0–1 fraction, for marks that fill continuously
  rather than stepping.
- **Scroll may change emphasis, never visibility.** Every layer and every word
  must be in the DOM at rest, or the section will not survive the prerender.
  Verify in `dist/`, not in the browser.
- **Keep the wrapper `lg:grid`, not `grid`.** Sticky resolves against its
  containing block, and in a single-column grid each row is its own area — so a
  sticky diagram there has nowhere to travel and scrolls away before the steps
  arrive. Below `lg` the diagram is a plain block sibling of the step list,
  pinned under the header in an **opaque** bar; at `lg` it becomes the grid item
  and `self-start` keeps it content-height. Linework is weighted up and the
  in-diagram labels are hidden below `lg`, because at half width a 1.4px stroke
  in a 400-unit viewBox renders sub-pixel.

The Portfolio map's lighting and the Home hero tint both come from
`useTimeOfDay`, keyed to the real clock in America/Chicago rather than the
visitor's locale.

## Information architecture

The header splits on **capability vs sector** — Services is what we do, Asset
Classes is what we do it to. Four tabs: About · Services · Asset Classes ·
Properties.

Two data modules are the single source of truth, and both exist because the same
things were being hand-written on four or five surfaces at once:

- **`src/data/capabilities.ts`** — the six services, in header-menu order.
  `SERVICES` is the master list; `CAPABILITIES` derives from it by filtering
  brokerage out (it is deliberately not a layer in `CapabilityStack`), and
  `REPORTING_CAPABILITIES` drops asset management as well, for the Asset
  Management page's "what reports into it" grid.
- **`src/data/assetTypes.ts`** — the six asset classes. The same six were once
  labelled five different ways: the header said "Industrial & Logistics", the
  index said that *and* "Senior Housing & Healthcare", the detail pages' own
  `<h1>`s said "Industrial" and "Senior Housing", the breadcrumb schema said
  "HUD & Affordable Housing", and the prerender meta said "Industrial &
  Logistics Management".

`track` on an asset class is a **presentation split, not a portfolio claim**. It
records which set a class leads in on `/asset-types`; it does not say what BSM Holdings
holds or is willing to manage. All six have full management pages. Never write
copy off it that reads as absence — no "we manage four asset classes", no "we do
not manage retail". The only claim about assets actually operated is
`proof.kind: 'operating'`, and only Senior Housing and Affordable Housing carry
it.

Home runs: **who we are → our approach → services → asset classes →
`CapabilityStack` → service area**, on strictly alternating white/surface
grounds. Keep the alternation if you add a section.

The first two are deliberately distinct and should stay that way — *who we are*
is identity (what the firm is, what is held in
house), *our approach* is method (how an asset is run). Home previously opened
straight into the approach, so a visitor met the argument before the subject.
Every claim in the identity section is sourced from `/about` or
`src/data/serviceArea.ts`; do not add firm-level figures there without a real
source.

Services and asset classes are both 3×2 card grids mapped from their data
modules. The asset classes band is **one grid of six** — it was briefly split
into a management set above a brokerage set, which said the six classes twice on
one screen and put retail and industrial visibly outside a group. The two tracks
live in that section's intro sentence instead. `/asset-types` is where they get
room to be explained.

`/services/asset-management` is the umbrella's own page. It did not exist: asset
management is the firm's whole positioning and the only destination the site had
for it was `/about`. It is built in the current design language — `scrim-hero`,
`eyebrow`, `section-title`, sections rendered open — not the older services-page
pattern of a flat navy wash and a collapsed accordion. Prefer its shape when
rebuilding the others.

## Asset type pages

All six render from `src/components/AssetTypePage.tsx`. Change the template, not
the individual pages, wherever possible.

Section order: hero → market context (with a drawn `AssetMark` per class) → what
we watch → services → the BSM Holdings advantage → proof → closing band. Grounds alternate
deliberately.

Two props carry the class-specific content, and both exist because the pages
previously said nothing specific to their class — every service description read
*"Comprehensive {type} property management focused on operational consistency…"*:

- **`metrics`** — the figures that genuinely differ by class (clear height and
  dock ratio for industrial, occupancy cost ratio and co-tenancy exposure for
  retail, turn time for multifamily, load factor for office).
- **`proof`** — **honest by construction.** `kind: 'operating'` states a real
  portfolio with real figures; `kind: 'seeking'` states underwriting criteria
  instead. Today only Senior Housing and Affordable Housing use `operating`. Never give another class
  `operating` without a real asset behind it — and never write `seeking` copy as
  an admission of absence. These are business-development pages: lead with the
  capability that shapes the criteria, then list what we look for. Pryor belongs
  on the two housing pages, where it is proof.

Services render **open**, mapped from `SERVICE_ORDER`. They previously sat in a
collapsed six-row accordion — the substance of the page hidden behind closed rows
— built from six hand-copied JSX blocks. Do not put them back in an accordion.

## Routing

31 routes, all reachable from the header, footer, or a hub page. Verify after any routing change — this should print nothing:

```bash
grep -oE 'path="[^"]+"' src/App.tsx | sed 's/path="//;s/"//' | sort -u > /tmp/routes.txt
grep -rhoE "['\"]/[A-Za-z0-9][A-Za-z0-9/_-]*['\"]" src --include=*.tsx --include=*.ts   --exclude=App.tsx | tr -d "'\"" | sort -u > /tmp/links.txt
comm -23 /tmp/routes.txt /tmp/links.txt | grep -v '^\*$' | grep -v '^/$'
```

30 legacy URLs 301 to their replacements via the `redirects` array in `vercel.json`. **Redirects must be declared there, not in React** — the catch-all rewrite means every path returns HTTP 200, so a client-side redirect would never emit a 301.

**The sitemap is generated at build time** into `dist/sitemap.xml` by
`scripts/prerender.mjs`, from the same route table, excluding `noindex` routes.
There is deliberately no `public/sitemap.xml`: the hand-maintained file drifted
for over a year and shipped `xmlns="http://www.w3.org/schemas/sitemap/0.9"`,
which is not the sitemap namespace, so Google was very likely rejecting it.

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
- **A browser that cannot launch at all is *not* fatal.** It logs loudly and skips
  prerendering. Failing there means nothing deploys, which is strictly worse than
  deploying without prerendered HTML. Route-level failures remain fatal.
- **Vercel needs `@sparticuz/chromium`.** Puppeteer's own Chrome download is present on
  Vercel's build image but the shared libraries it links against are not, so it exits
  127 with `libnspr4.so: cannot open shared object file`. That broke **every production
  deploy** from the moment prerendering was introduced until it was found. The script
  switches to `@sparticuz/chromium` when `VERCEL` or `CI` is set; local builds use
  normal Chrome.
- **Chrome is cached in `.cache/puppeteer`** via `.puppeteerrc.cjs`, so Vercel's build
  cache covers it. Build-time only; nothing ships to the client.

Verify a deploy with:

```bash
curl -s https://bsmholdings.com/services/facility-services | grep -o '<title>[^<]*</title>'
# must differ from the homepage title, and body content must be present without JS
```

Note the app mounts with `createRoot`, not `hydrateRoot`, so React discards the
prerendered DOM and re-renders on load. Content is present for crawlers; there is no
hydration-mismatch class of bug to worry about.

## Deployment

Vercel project `intelio/hhpbrokerandmanagement`, deploying from `main`, with SPA
routing configured in `vercel.json`.

**A successful `git push` tells you nothing about whether the site updated.**
Production deploys failed silently for hours here (see the Prerendering section
and `DEBUGGING_GUIDE.md`). Confirm every time:

```bash
npx vercel ls | head -5              # latest Production deploy must say Ready
npx vercel inspect <url> --logs      # if it says Error

# and confirm the live bundle is actually yours
curl -s https://bsmholdings.com/ | grep -o 'assets/index-[A-Za-z0-9_-]*\.js'
ls dist/assets/index-*.js
```

### Google / Bing setup (not in this repo)

Search Console and Bing Webmaster Tools verification tokens go in `index.html`
once obtained; the Business Profile is claimed and verified outside the codebase.
Keep the NAP identical to `src/data/serviceArea.ts` — the site, the structured
data and the Business Profile must agree, and mismatch is the most common cause
of weak local ranking. **The site currently publishes no phone number**, so if
the Business Profile lists one they are already out of step.

## Brand Assets

Logos live in `public/brand/vector/` as SVG masters from the supplied vector kit:

| File | Use |
| --- | --- |
| `BSM_Logo.png` | Light backgrounds (header). Navy gradient, tight artboard. |
| `BSM_Logo.png` | Dark backgrounds (hero, footer). Solid `#FFFFFF`, transparent. |
| `BSM_Logo.png` | Solid navy, tight artboard. |
| `BSM_Logo.png` | Padded artboard variant. |

The legacy rasters in `public/images/` are unreferenced and should not be used — the "white" PNG is a hollow outline padded inside a 1024² canvas, and the full-lockup PNGs have opaque white backgrounds that cannot sit on dark ground. Note the vector kit is **monogram only**; no variant carries the "ASSET GROUP" wordmark.

## Known Issues

Tracked but not yet addressed:

- **Two SEO mechanisms still coexist in the app** (`useSEO` and `react-helmet-async`) and neither covers every route. This no longer affects crawlers — the prerender step writes per-route tags from `scripts/routeMeta.mjs` — but it should be unified for the in-app tab title on client-side navigation.
- **Two lockfiles** (`bun.lockb` and `package-lock.json`) are committed; CI may resolve differently from local.
- **`HeroHomePageHHP.mp4` is 3.2 MB** and is now the only large video; it needs re-encoding with ffmpeg, which is not available in this environment. (`technology-hero.mp4` was deleted — the Technology hero is drawn rather than filmed, which took `public/images` from 15 MB to 8.5 MB.)
- **No `srcset`/`sizes` on any image**, so phones download desktop-sized assets. Less severe now that nothing exceeds ~320 kB, but still worth adding for the full-bleed backgrounds.
- **38 of 48 shadcn components are unused**, along with `zod`, `date-fns`, `@hookform/resolvers`, and `@tanstack/react-query` (provider only, no queries).
- **`Insights.tsx` presents nine pieces of content that do not exist.** The eleven fake
  "Download PDF" / "Read More" link affordances were removed so the cards no longer
  advertise a click that goes nowhere, but the reports and articles themselves still
  need writing before anything can be linked. (The parallel problem on the asset-type
  pages — 18 teasers, all dated late 2024, each linking to `/insights` regardless of
  title — is resolved: that band is now a `proof` section stating what BSM Holdings actually
  operates or underwrites.)
- **Nine service pages share a byte-identical "ABOUT US" paragraph**, and the lower half
  of each has no imagery. Extracting the repeated blocks (`AboutSplit`, `CareersBand`,
  `FaqCta`, `PageHero`, `Section`) into shared components would stop the duplication
  drifting and make per-page imagery a one-line change. Those pages also still carry the
  retired design language — flat `bg-hhp-navy/60` hero washes, uppercase letter-spaced
  `<h2>`, six-row accordions. `src/pages/services/AssetManagement.tsx` is the shape to
  rebuild them toward.
- **`scripts/routeMeta.mjs` keeps its own asset-class labels** ("Industrial & Logistics
  Management"), so search results can disagree with the site. It is plain ESM run by
  Node at prerender time and cannot import the `.ts` data module without a loader, so
  aligning it means duplicating the labels there by hand.
- **The footer files "Asset Classes" inside the "Capabilities" column**, mixing a sector
  into a list of capabilities. It wants its own column.
- **`FAQ.tsx` and `Insights.tsx` still enumerate the asset classes as prose**, so they
  are outside `src/data/assetTypes.ts` and can drift from it.
- **The About hero photograph is a New York skyline** on an Oklahoma operator's site.
- **`useSEO.ts` is imported by no page** (superseded by the prerender step) — remove or
  wire it up.
- **Six orphaned components** remain in `src/components/`: `BenefitsCards`, `IconGrid`,
  `PremiumCTABanner`, `ProcessSteps`, `ProofPoints`, and `ServiceCards`.
  (`ServicesSubNav` was deleted — all six of its `/management/*` links pointed at
  routes that no longer exist in `App.tsx`.)
