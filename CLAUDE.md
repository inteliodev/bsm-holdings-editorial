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
npm run dev        # Start dev server on port 8080
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test framework is configured.

## Architecture

### Stack
- **React 18** with **TypeScript** (strict mode off)
- **Vite** with SWC plugin for compilation
- **Tailwind CSS** + **shadcn/ui** (40+ Radix UI components in `src/components/ui/`)
- **React Router v6** — SPA with 60+ routes defined in `src/App.tsx`
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
All routes are in `src/App.tsx` (61 `<Route>` entries). The app includes legacy backward-compatible routes that map old URLs to new page components. Vercel is configured with a catch-all rewrite to `index.html` for SPA routing (`vercel.json`).

Because of that catch-all, **every path returns HTTP 200 even if no route matches** — `curl` status codes prove nothing about whether a route works. Verify routes in a browser and assert on rendered content instead.

Renamed routes keep their old path pointing at the same component rather than redirecting:

| Current | Legacy (still resolves) |
| --- | --- |
| `/technology/platforms` | `/technology/ai-platforms` |
| `/services/facility-services` | `/services/facilities-management` |

### Marketing Sections
Home and Technology compose several standalone section components. When updating positioning copy, these are usually the files to touch:
- `src/components/PlatformSection.tsx` — six-capability grid on Home
- `src/components/DashboardShowcase.tsx` — dark dashboard mockup on Technology
- `src/components/DisciplinesSection.tsx` — three disciplines (Asset Management, Property Management, Facility Services)
- `src/pages/FacilityServices.tsx` — self-performed trades grid (data lives in the `selfPerformedTrades` array at the top of the file), cost-control and in-house-technology sections

### Homepage Stacking Context (known gotcha)
The Home hero is `position: fixed; z-index: 0` with content scrolling over it, so **any sibling that must appear above the hero needs an explicit stacking context**. A `position: fixed` element paints above static content regardless of z-index, which previously left the footer invisible on Home. `Footer.tsx` carries `relative z-30` for this reason — do not remove it. Home's own scrolling content uses the same `relative z-30` wrapper.

### Reusable Page Templates
`src/components/AssetTypePage.tsx` is a shared template used by all 6 asset type detail pages. When modifying asset type pages, update the template rather than individual pages when possible.

### Contact Form
The contact form in `src/pages/Contact.tsx` submits to an n8n webhook at `https://n8n.capitalaiadvisors.com/webhook/hhp-contact`.

### Error Handling
- Global `ErrorBoundary` component wraps the entire app in `App.tsx`
- `src/utils/debug.ts` provides `initializeErrorHandling()` (called in `main.tsx`), `safeApiCall()` wrapper, and memory/network monitoring
- See `DEBUGGING_GUIDE.md` for past bug fixes and debugging procedures

### Analytics
`src/hooks/useAnalytics.ts` tracks page views, scroll depth (25/50/75/90/100%), and time-on-page. `src/utils/analytics.ts` has functions for tracking button clicks, form submissions, and custom events via GA4 `gtag()`.

## Design System

### Brand Colors (Tailwind)
- `hhp-navy` — primary dark navy
- `hhp-accent` — accent blue
- `hhp-charcoal` — body text
- `hhp-white` — backgrounds

### Typography
- Headings: `font-heading` (Brandon Grotesque → Montserrat fallback)
- Body: `font-body` (Inter system stack)
- Display: `font-display` (same as heading)

### Custom Shadows
`shadow-elegant`, `shadow-premium`, `shadow-subtle` — defined via CSS variables in `src/index.css`.

## Environment Variables

**`VITE_MAPBOX_TOKEN` is the only env var the app actually reads** (`src/pages/Portfolio.tsx`). Without it the Portfolio map pane stays blank and Mapbox logs an access-token error from a script `onload` callback — this does not trip the `ErrorBoundary`, so the rest of the page renders normally and the failure is easy to miss.

`.env.example` also lists `VITE_SUPABASE_PROJECT_ID`, `VITE_SUPABASE_PUBLISHABLE_KEY`, and `VITE_SUPABASE_URL`, but these are **not** read at runtime — `src/integrations/supabase/client.ts` hardcodes the project URL and anon key. Supabase works without any local env setup.

### Local setup

This repo is linked to the Vercel project `intelio/hhpbrokerandmanagement`. To pull the Mapbox token:

```bash
npx vercel env pull .env.local     # writes every var for the environment, gitignored
```

Vite loads `.env.local` at startup only — restart the dev server if you pull env after it is already running.
