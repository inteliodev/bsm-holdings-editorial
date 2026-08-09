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
- **React Router v6** (61 routes — see *Known Issues*)
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

- **42 of 61 routes have no inbound links.** Four overlapping taxonomies (`/services/*`, `/asset-types/*`, `/asset-management/*` + `/management/*`, `/brokerage/*`) describe the same subject matter. Consolidation is pending.
- **No prerendering.** The app is a client-rendered SPA, so every URL serves an empty shell to anything that does not execute JavaScript — social scrapers and AI crawlers included.
- **`sitemap.xml` is stale.** It advertises the orphaned legacy trees, omits every live `/services/*` and `/asset-types/*` child, lists `/owner-login` (not a route), and is stamped 2024-12-30.
- **Most pages set no title or description.** Only ~15 of 47 page files use `useSEO` or `Helmet`; the rest inherit the generic one from `index.html`.
- **6 pre-existing TypeScript errors** in the `Management*` pages (`IconGrid` missing a required `title` prop). `vite build` does not run `tsc`, so they do not fail the build. Check with `npx tsc --noEmit -p tsconfig.app.json`.
- **Two lockfiles** (`bun.lockb` and `package-lock.json`) are committed; CI may resolve differently from local.
