# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**HHP Asset Management** — a commercial real estate company website built with React, TypeScript, Vite, and Tailwind CSS. Originally scaffolded via the Lovable platform. Deployed on Vercel.

The legal entity is **HHP Asset Management**. Use that name everywhere in user-facing copy. The earlier trade name "HHP Asset Group" was retired and must not be reintroduced — note that the legacy raster logo artwork in `public/images/` still renders the words "ASSET GROUP", which is why the site uses the vector kit in `public/brand/vector/` instead. The repository directory is still named `HHPAssetBrokerage-Management`; that is a folder name, not the company name.

## Brand Positioning (read before writing any copy)

The site positions HHP as **Vertically Integrated. Data Driven. Forward Thinking.** — an operating company, not a technology vendor. This replaced an earlier "AI-Native / APEX platform" positioning, which was removed entirely.

### Hard rules

1. **No AI branding anywhere in user-facing copy.** Do not reintroduce "AI-native", "AI-powered", "AI-driven", "AI-assisted", or the retired product names **BrokerAi, LeaseAi, RentalAi, CapitalAi, APEX**. Use concrete substitutes: `predictive forecasting`, `automated dispatch`, `data-driven`, `written commentary`.
2. **Do not write in SaaS/tech-vendor voice.** Copy like "our platform automates routine workflows and surfaces actionable insights" is explicitly rejected. HHP is the operator — lead with people, crews, and accountability; technology is a supporting fact, not the subject.
3. **Vertical integration is the core claim, and it extends to the software.** Property management, every facility service trade, and accounting are in-house — and so are the asset management and operating systems, which HHP builds and maintains rather than licenses.

4. **Asset management is the umbrella, and it leads.** HHP presents as an asset management firm. Property management, facility services, and financial services are capabilities *beneath* that umbrella, not peer business lines. **Brokerage is a supporting capability, not a headline** — it appears as one nav entry and as a credibility point ("we underwrite from the expense side because we operate the buildings"), never as a co-equal pillar. Do not reintroduce brokerage-first enumerations like "Brokerage, asset management, property management, and…".

5. **Do not use the word "crew."** Say *self-performed*, *in house*, *our own personnel*, or name the trade. The register is formal and precise — an institutional operator, not a jobsite.
4. **Cost control is the payoff.** Self-performing means true line-item cost visibility, no subcontractor markup on self-performed work, and real-time cost reporting to owners instead of a month-end lag. Tie technology claims back to this.

### Terminology

| Use | Not |
| --- | --- |
| Facility Services | Facilities Management, Maintenance |
| Proprietary Platforms | AI Platforms |
| Deal Intelligence Engine | BrokerAi |
| Data-driven / predictive | AI-powered / AI-driven |

`HHP Facility Services, LLC` is the real entity name — keep it exact when referenced.

### Accuracy caution

The Facility Services page states "no subcontractor markup on self-performed work" and that specialty vendors are engaged "only where licensing requires." These are commitments an owner can hold HHP to. Do not broaden them into absolute claims (e.g. "we never use vendors") without explicit confirmation.

## Commands

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Production build + prerender + sitemap
npm run build:norender # Production build without the prerender step
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run preview      # Preview production build locally
```

No test framework is configured. `npm run typecheck` and a clean `npm run build`
are the closest thing to a test suite — run both before pushing.

## Deployment

Vercel project `intelio/hhpbrokerandmanagement`, deploying from `main`.

**A push succeeding tells you nothing about whether the site updated.** Deploys
have failed silently for hours here. Always confirm:

```bash
npx vercel ls | head -5          # latest Production deploy must say Ready
npx vercel inspect <url> --logs  # if it says Error
```

`npm run build` runs `scripts/prerender.mjs`, which needs Chrome. Puppeteer's
own Chrome download **cannot launch on Vercel's build image** — the binary is
there but the shared libraries it links against are not, and it exits 127 with
`libnspr4.so: cannot open shared object file`. The script uses
`@sparticuz/chromium` when `process.env.VERCEL` or `CI` is set for that reason;
locally it uses normal Chrome. If Chrome cannot start at all the prerender is
skipped loudly rather than failing the build, because a site that cannot deploy
is worse than one without prerendered HTML. Individual *route* failures are
still fatal.

`sitemap.xml` is generated into `dist/` by the same script from the route table,
excluding `noindex` routes. There is deliberately no `public/sitemap.xml` — the
hand-maintained one drifted and shipped an invalid XML namespace for a long time.

## Architecture

### Stack
- **React 18** with **TypeScript** (strict mode off)
- **Vite** with SWC plugin for compilation
- **Tailwind CSS** + **shadcn/ui** (40+ Radix UI components in `src/components/ui/`)
- **React Router v6** — SPA with 30 routes defined in `src/App.tsx`
- **TanStack React Query** for server state
- **React Hook Form + Zod** for form validation
- **Supabase** for database and auth
- **Google Analytics 4** (measurement ID: G-SEW7MT1WW1)

### Path Alias
`@/*` resolves to `./src/*` (configured in both `vite.config.ts` and `tsconfig.json`).

### Key Directories
- `src/pages/` — Page components, organized by domain (`services/`, `assetTypes/`, `technology/`)
- `src/components/Layout/` — Header, Footer, Layout wrapper (used by all pages)
- `src/components/ui/` — shadcn/ui primitives (do not manually edit; use shadcn CLI to update)
- `src/hooks/` — Custom hooks: `useAnalytics`, `useSEO`, `useScrollAnimation`, `use-mobile`
- `src/utils/` — `analytics.ts` (GA4 events), `debug.ts` (error logging/monitoring)
- `src/integrations/supabase/` — Supabase client init and auto-generated types

### Routing
All routes are in `src/App.tsx` (30 `<Route>` entries). The app includes legacy backward-compatible routes that map old URLs to new page components. Vercel is configured with a catch-all rewrite to `index.html` for SPA routing (`vercel.json`).

Because of that catch-all, **every path returns HTTP 200 even if no route matches** — `curl` status codes prove nothing about whether a route works. Verify routes in a browser and assert on rendered content instead.

Renamed routes keep their old path pointing at the same component rather than redirecting:

| Current | Legacy (still resolves) |
| --- | --- |
| `/technology/platforms` | `/technology/ai-platforms` |
| `/services/facility-services` | `/services/facilities-management` |

### Header navigation
The `navigation` array at the top of `src/components/Layout/Header.tsx` is the
only source of truth for the header. Four tabs: **About · Services · Asset
Types · Properties**, plus the Contact CTA and the two portal utility links.

Services holds the five capabilities (Property Management, Facility Services,
Financial Services, Brokerage & Advisory, Technology). **Asset Types is its own
tab** listing all six types — it used to be four rows of a flat nine-item
Services menu that mixed capabilities with sectors, and office, retail and
industrial had no path from the header at all. The footer already treated Asset
Types as a top-level destination.

Both dropdown tabs have a landing page, so clicking the label navigates and the
chevron (mobile) expands. `isDropdownActive()` decides which tab lights up;
Services owns `/technology` and `/brokerage` as well as `/services`. Dropdown
containers register into one `dropdownRefs` map — click-outside needs *every*
container, and the earlier two-ref version ANDed a ref that was never attached,
so the menu could only be closed by the hover timer or Escape.

### Marketing Sections
Home and Technology compose several standalone section components. When updating positioning copy, these are usually the files to touch:
- `src/components/DashboardShowcase.tsx` — dark dashboard mockup on Technology. Its
  figures are illustrative, not wired to live data.
- `src/components/DisciplinesSection.tsx` — three disciplines (Asset Management, Property Management, Facility Services). Rendered on Technology, not Home.
- `src/pages/FacilityServices.tsx` — self-performed trades grid (data lives in the `selfPerformedTrades` array at the top of the file), cost-control and in-house-technology sections

### Homepage Stacking Context (known gotcha)
The Home hero is `position: fixed; z-index: 0` with content scrolling over it, so **any sibling that must appear above the hero needs an explicit stacking context**. A `position: fixed` element paints above static content regardless of z-index, which previously left the footer invisible on Home. `Footer.tsx` carries `relative z-30` for this reason — do not remove it. Home's own scrolling content uses the same `relative z-30` wrapper.

### Scrollytelling sections (the house pattern)
Three sections share one interaction — a sticky diagram beside scrolling steps,
where the active step highlights its layer. Each deliberately cuts through a
**different object**, so it reads as a house style rather than a repeated trick:

| Page | Component | Subject | Diagram |
| --- | --- | --- | --- |
| Home | `CapabilityStack.tsx` | the firm | slab stack |
| Facility Services | `BuildingSection.tsx` | the asset | building cutaway |
| Technology | `SystemStack.tsx` | the software | UI wireframe |

All three use **`useActiveStep`** (`src/hooks/useActiveStep.ts`) — do not
reimplement this with an IntersectionObserver band; see `DEBUGGING_GUIDE.md` for
why that fails at the ends of a list. It returns `{ active, progress, setRef }`;
`progress` is the same measurement as a 0–1 fraction, for anything that fills
continuously rather than stepping.

They are built so scroll changes only *emphasis*, never visibility: every layer
and every word is in the DOM at rest. That is what lets them survive the
prerender. If you add one, keep that property and verify it in `dist/`.

**The outer wrapper is `lg:grid`, not `grid` — do not "tidy" that.** `sticky`
resolves against its containing block, and in a single-column grid each row is
its own area, so a sticky diagram there has nowhere to travel and scrolls away
before the steps arrive. Below `lg` the diagram is a plain block sibling of the
step list, pinned under the header in an **opaque** bar (the list scrolls beneath
it — at 95% the copy read straight through the diagram). At `lg` it becomes the
grid item and `self-start` keeps it content-height inside the tall column so it
can still stick.

SVG layers use `.bl` (dark ground) or `.bl bl-light` (light ground). Supporting
classes, all in `index.css`: `.bl-top` / `.bl-side` (extruded slab faces),
`.bl-lift` (active layer slides out of the stack), `.bl-solid` (accent tab),
`.bl-tag` (in-slab label, with a ground-coloured halo so the spine behind it is
knocked out), and `.bl-rail` / `.bl-rail-fill` / `.bl-rail-node` (the progress
rail). Below `lg` the linework is weighted up and `.bl-tag` is hidden — at half
width a 1.4px stroke in a 400-unit viewBox renders sub-pixel and the whole
diagram greys out.

Beware `border-white/12` and friends: **12 is not on Tailwind's opacity scale**,
so no rule is emitted and the border falls through to the global
`* { @apply border-border }` — a near-white grey on navy. This shipped in three
places before it was caught. Use `/10`, `/15`, or bracket it as `/[0.12]`.

### Time-of-day lighting
`src/hooks/useTimeOfDay.ts` returns `dawn | day | dusk | night` from the real
clock in **America/Chicago** — HHP's market, deliberately not the visitor's
locale, because the subject is the asset. It drives the Portfolio map's Mapbox
`lightPreset` and the Home hero's tint, so the site and the campus are lit the
same way at the same moment. The hero tint layers *over* the scrim, so text
contrast never depends on the hour.

### Team roster
`src/pages/About.tsx` holds a `TEAM` array of departments. Adding, moving or
retitling anyone is a data edit — do not go back to hand-written cards.

`image` and `bio` are both optional. Someone without a headshot renders as name,
title and email with **no placeholder portrait and no initials avatar** — a
placeholder is what makes a missing photo read as broken. The grid is
`items-start` so a photo-less card sizes to its own content.

Headshots live in `src/assets/` (Vite imports, not `public/`) and are cropped to
4:5 by `object-cover object-top`. **The sources are not consistent**: only
`marshella-franklin` and `andrew-hoanzl` are actually 900×1125 — `hayden-ashley`
is 800×800 and `phil-ashley` / `hannah-fanning` are 900×1350. The crop hides it
today, but changing the card aspect ratio would make head scale drift between
cards. Re-crop to 900×1125 before touching that ratio.

The portrait is exactly as wide as its grid track, so **the column ladder sets
the headshot size, not the image**. The ladder is
`grid-cols-1 sm:2 md:3 xl:4`, which keeps cards in a ~215–365px band; the
previous `md:2 lg:3` peaked at ~454px, which read as a feature gallery.

### Property data
`src/pages/Portfolio.tsx` declares an explicit `Property` type and annotates
`const properties: Property[]`. It used to infer the shape via
`(typeof properties)[number]`, which widens the union the moment one record
carries a field another does not — every read of that field then fails to
compile. Keep it declared.

All three communities are one campus at one address, so the shared facts —
`CAMPUS_ADDRESS`, `CAMPUS_WEBSITE` (mayorwallis.com), `CAMPUS_AMENITIES` and
`CAMPUS_PHOTOS` — are module constants rather than being copied into each
record. Photography lives in `public/images/properties/` at 900px webp; the
detail panel is `lg:w-2/5`, so anything larger is wasted bytes.

**Unresolved:** `Portfolio.tsx` lists Venture Villa I as built in 1985;
mayorwallis.com says 1995. Flagged in a comment on the record, not guessed at.

### Favicon
`public/favicon.svg` is the master — a single **H** from the brand letterform on
`#0A2342`. The PNGs are rasterised from it. Do not regenerate them from the
three-letter lockup: at 16px it is an illegible smear.

### Reusable Page Templates
`src/components/AssetTypePage.tsx` is a shared template used by all 6 asset type
detail pages. Change the template, not the individual pages, wherever possible.

Section order: hero → market context (with a drawn `AssetMark` per class) →
**what we watch** → services → the HHP advantage → **proof** → closing band.
Grounds alternate deliberately; keep that if you add a section.

Two props carry the weight, and both exist because the pages previously said
nothing class-specific — every service description was *"Comprehensive {type}
property management focused on operational consistency…"*:

- **`metrics`** — the figures that genuinely differ by class (clear height and
  dock ratio for industrial, occupancy cost ratio and co-tenancy exposure for
  retail, turn time for multifamily, load factor for office). This is what makes
  a page about its asset class rather than about HHP.
- **`proof`** — **honest by construction.** `kind: 'operating'` states a real
  portfolio with real figures; `kind: 'seeking'` states underwriting criteria
  instead. Today only Senior Housing and Affordable Housing use `operating`. **Never** give another
  class `operating` without a real asset behind it.

  **Do not present any single property as the whole portfolio.** The Pryor
  campus is *a* property HHP operates, not the extent of what it operates —
  `src/pages/Portfolio.tsx` lists only Pryor because that is all the page has
  ever been given, which is a data gap and not a description of the firm. Copy
  must say "one of the campuses we operate", never "our current operating
  portfolio", and figures must be labelled to their scope ("units on campus")
  rather than read as firm totals.

  **`seeking` states criteria, never absence.** These are business-development
  pages. Do not write "HHP does not currently operate X" or name the Pryor
  portfolio as a limit on a class it has nothing to do with — an industrial
  prospect does not care what we run in Pryor, and leading with what we lack
  loses the business. Lead with the capability that shapes the criteria
  ("the trades are ours, so response time is ours"), then list what we look
  for. Pryor belongs on the two housing pages, where it is proof.

Services render **open**, mapped from `SERVICE_ORDER`. They used to sit in a
collapsed six-row accordion — the substance of the page hidden behind closed
rows — built from six hand-copied JSX blocks. Do not put them back in an
accordion.

There is no `insights` prop. It rendered three article teasers per page, 18 in
total, all dated late 2024, each linking to `/insights` regardless of its title —
the same broken promise as the old fake portal logins. `showAboutUs`,
`useModernLayout` and the `ctaImage`/`ctaTitle` band are also gone; that band was
conditional on props no page ever supplied, so it never rendered.

### Lead capture
Three surfaces submit leads: the contact form, and the two portal access-request
forms. Delivery lives in **`src/lib/leads.ts`** (`submitLead`) — two independent
sinks attempted concurrently, the n8n webhook and a Supabase `contacts` insert,
so a lead is only lost if both fail. Route new forms through it rather than
re-implementing the pattern.

`src/components/AccessRequestForm.tsx` backs both portal pages.

**The portals do not authenticate anything.** They previously rendered a sign-in
that awaited a 1500ms timeout and then showed a success toast — any password
"worked", nothing was stored, and neither destination route exists. They are now
honest access-request forms with no password field. Do not add one back unless
real auth exists behind it.

### Structured data
`src/components/SiteSchema.tsx` renders from `Layout`, so every route carries
`Organization` + `WebSite`, plus `BreadcrumbList` on nested routes and `Service`
on capability pages — both derived from the pathname, so new routes are covered
automatically. `LocalBusinessSchema` (Home, Contact) shares the Organization
`@id` so the two merge into one entity. `FAQ.tsx` emits `FAQPage`.

`public/llms.txt` is the plain-language description for answer engines.

### Error Handling
- Global `ErrorBoundary` component wraps the entire app in `App.tsx`
- `src/utils/debug.ts` provides `initializeErrorHandling()` (called in `main.tsx`), `safeApiCall()` wrapper, and memory/network monitoring
- See `DEBUGGING_GUIDE.md` for past bug fixes and debugging procedures

### Analytics
`src/hooks/useAnalytics.ts` tracks page views, scroll depth (25/50/75/90/100%), and time-on-page. `src/utils/analytics.ts` has functions for tracking button clicks, form submissions, and custom events via GA4 `gtag()`.

## Design System

All tokens live in `:root` in `src/index.css` and are exposed through
`tailwind.config.ts`. Prefer the token over a literal — the recurring failure
mode in this repo has been hex values inlined in components that then drift.

### Typography

Fonts are **self-hosted** via `@fontsource-variable`, imported in `src/main.tsx`.
Do not add a Google Fonts `<link>`: it puts a third-party DNS + TLS handshake on
the critical path and ships static weights where the variable faces cover
100–900.

- `font-display` / `font-heading` — **Archivo Variable** (Montserrat is fallback only)
- `font-body` — **Inter Variable**

Brandon Grotesque was previously first in every stack but was never licensed or
loaded, so it always silently fell through. It is gone; do not reintroduce it.

**Headings are not uppercase.** A base-layer rule used to force
`text-transform: uppercase` on every `h1`–`h6`, every `<button>` and every
`nav a`. Caps destroy word-shape, which capped the entire type scale at 2rem.
Caps are now opt-in:

- `.u-caps` — uppercase + tracking, for labels
- `.eyebrow` — the canonical gold kicker with a hairline rule (add
  `.eyebrow-bare` to drop the rule)

Display sizes are fluid `clamp()` tokens, so they need no breakpoint ladder:
`text-display-2xl` (hero) · `display-xl` · `display-lg` (section `h2`) ·
`display-md` · `text-eyebrow`. `.hero-title`, `.section-title` and
`.hero-headline` are built from the same scale.

### Colour

- `hhp-navy` — `#0A2342`, the canonical brand navy
- `hhp-navy-deep` / `hhp-navy-soft` — darker ground, hairlines on dark
- `hhp-gold` — `#C8952E`, the accent
- `hhp-accent` — **also gold**; it used to be a pale sky blue the design had
  abandoned while ~47 usages still pointed at it
- `hhp-charcoal` — body text, slightly cooled so it sits with navy
- `surface` / `surface-sunken` — replaces `bg-gray-50` and a one-off `#f7f9fb`

### Elevation, radius, motion

- `shadow-subtle` · `shadow-elegant` · `shadow-premium` · `shadow-card` ·
  `shadow-card-hover` — two-stop layered shadows (a single large blur reads as a
  smudge at these sizes)
- `--radius: 4px`
- `--ease-out-expo` (also available as `ease-out-expo`) is the house curve

### Component classes

`.container-premium` · `.section-spacing` (fluid; used ~58 times, so it sets the
site's vertical rhythm) · `.premium-card` · `.platform-card-hover` (gold top bar
that wipes in — the canonical card hover) · `.btn-hero` · `.btn-secondary` ·
`.scrim-hero` / `.scrim-bottom` (gradient scrims for text over photography —
never use a flat `bg-black/NN`, it mutes the whole image) · `.tap` (mobile touch
target for inline text links).

### Mobile

There is **no** global `!important` override block any more. It was ~220 lines
that reset typography, grid gaps and padding below 768px and fought every
responsive change made in JSX. Fluid `clamp()` sizing replaced its purpose.

What it *was* legitimately doing — 44/48px touch targets — is now handled at the
component. If you add an inline text link that acts as a CTA, give it `.tap`.

Audit with a headless pass at 390px before shipping layout work: check for
horizontal scroll, elements wider than the viewport, and interactive targets
under 44px.

## Environment Variables

**`VITE_MAPBOX_TOKEN` is the only env var the app actually reads** (`src/pages/Portfolio.tsx`). Without it the Portfolio map pane stays blank and Mapbox logs an access-token error from a script `onload` callback — this does not trip the `ErrorBoundary`, so the rest of the page renders normally and the failure is easy to miss.

`.env.example` also lists `VITE_SUPABASE_PROJECT_ID`, `VITE_SUPABASE_PUBLISHABLE_KEY`, and `VITE_SUPABASE_URL`, but these are **not** read at runtime — `src/integrations/supabase/client.ts` hardcodes the project URL and anon key. Supabase works without any local env setup.

### Local setup

This repo is linked to the Vercel project `intelio/hhpbrokerandmanagement`. To pull the Mapbox token:

```bash
npx vercel env pull .env.local     # writes every var for the environment, gitignored
```

Vite loads `.env.local` at startup only — restart the dev server if you pull env after it is already running.
