# 🚨 WEBSITE DEBUGGING GUIDE

> **Note on stale content:** the "Tab Clicking Issues" material below is historical. It references `RentalAi.tsx`, which no longer exists — the AI-branded pages and products were removed during the brand repositioning (see the Brand Positioning section of `CLAUDE.md`). The error-handling patterns and debugging checklist remain accurate.

---

## 🚀 **DEPLOY: EVERY PRODUCTION BUILD FAILED FOR HOURS, SILENTLY (FIXED)**

### Symptom
Commits pushed to `main` cleanly. The live site kept serving an older build.
Nothing in the repo looked wrong, and nothing surfaced the failure — you only
notice if you happen to compare the live asset hash against a local build.

### Root cause
`npm run build` runs `scripts/prerender.mjs`, which launches Puppeteer. Vite
built fine; the prerender step exited 1:

```
✓ built in 8.43s
chrome: error while loading shared libraries: libnspr4.so:
        cannot open shared object file
Error: Failed to launch the browser process: Code: 127
Error: Command "npm run build" exited with 1
```

Puppeteer's downloaded Chrome **is present** on Vercel's build image, but the
system libraries it links against are not. This broke the moment prerendering
was introduced, so the last good deploy predated the feature.

### Fix
Two changes, both in `scripts/prerender.mjs`:

1. Use `@sparticuz/chromium` when `process.env.VERCEL` or `CI` is set — a
   Chromium built for serverless/CI containers. Local builds are unaffected.
2. A browser that will not launch is **non-fatal**. Prerendering is an SEO
   enhancement and the app is a working SPA without it; failing the build means
   nothing ships, which is strictly worse. Route-level failures stay fatal,
   because those mean a page actually threw.

### How to detect this class of bug
A green `git push` is not a deploy. Compare the live bundle to the local one:

```bash
curl -s https://hhpasset.com/ | grep -o 'assets/index-[A-Za-z0-9_-]*\.js'
ls dist/assets/index-*.js
# different hash = the live site is not your build
npx vercel ls | head -5
```

---

## 🎞️ **INTERSECTIONOBSERVER BANDS FAIL AT THE ENDS OF A LIST**

### Symptom
A scrollytelling section ended with layer **01** highlighted while layer **05**
filled the screen. Mid-scroll it tracked correctly, so it looked fine unless you
watched the last step.

### Root cause
Tracking used an `IntersectionObserver` with a narrow `rootMargin` band:

```js
{ rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.5, 1] }
```

That resolves "which step is current" only while a step is *inside* the band.
Scroll past the end of the section — or jump with a fast scroll — and nothing
intersects, no callback fires, and the diagram keeps whatever it was last set
to. There is no event for "nothing is active any more".

### Fix
`src/hooks/useActiveStep.ts` measures instead: whichever step's midpoint is
nearest the middle of the viewport wins. That always resolves to exactly one
answer, including at both ends, and costs one rAF-throttled pass over a handful
of elements.

### How to detect this class of bug
Scroll to the very end of the section, not just through it. Anything that
derives state from "what is currently intersecting" needs an answer for the case
where **nothing** is.

---

## 🖼️ **FAVICONS ARE NOT LOGOS SCALED DOWN**

The favicons were the full three-letter HHP lockup exported at each size. At
16px it was an illegible smear: three thin serif letters, with the artwork
occupying only ~9% of the canvas. They were also `#09275D`, a royal blue, not
the brand navy `#0A2342` — so the browser tab did not match the site.

`public/favicon.svg` is now the master: a **single H** from the real brand
letterform, cropped tight and set large on `#0A2342`. One letter survives 16px;
three never will. The PNGs are rasterised from that SVG so every size agrees.

Check a favicon by rendering it at 16px and looking at it, not by opening the
512px version.

---

## 🕳️ **THE CATCH-ALL MAKES EVERY URL LOOK LIKE IT EXISTS**

`vercel.json` rewrites unmatched paths to `index.html`, so **a 200 proves
nothing** — this is the single easiest trap in this repo to fall into, and it
has been fallen into more than once.

A newly added `public/llms.txt` appeared to be live:

```
$ curl -s -o /dev/null -w "HTTP %{http_code} %{size_download}" .../llms.txt
HTTP 200  3488 bytes
```

It was not deployed at all. The same request to a deliberately nonsense path
returned **byte-identical** output — both were `index.html`.

### How to check a static file actually exists
Assert on content type or content, never on status:

```bash
curl -s -o /dev/null -w "%{content_type}\n" https://hhpasset.com/llms.txt
# text/plain  = real file
# text/html   = SPA fallback, the file is not there

curl -s https://hhpasset.com/definitely-not-real-xyz | head -c 60
# compare against the file you are testing
```

---

## 🪟 **`backdrop-filter` BREAKS `position: fixed` CHILDREN**

### Symptom
The mobile menu opened correctly but the header's own logo and close button
vanished behind it. Nothing errored; types and build were clean.

### Root cause
The overlay sheet is a descendant of `<header>`, and the header had
`backdrop-blur-md`. **A non-`none` `backdrop-filter` makes an element a
containing block for `position: fixed` descendants.** So `fixed inset-0`
resolved against the header box rather than the viewport, and the sheet painted
over the header's contents.

### Fix
Drop the blur while the sheet is open, and give the header's top bar
`relative z-50` so it keeps painting above the `z-40` sheet.

### Worth remembering
The same applies to `filter`, `transform`, `perspective`, `contain: paint` and
`will-change`. Adding any of them to an ancestor silently re-anchors fixed
children, with no error and no type failure. If a `fixed` element lands in the
wrong place, walk its ancestors looking for these properties first.

---

## 📱 **DELETING THE `!important` BLOCK REMOVED TOUCH TARGETS**

The ~220-line mobile override block in `index.css` was mostly harmful — it reset
typography, grid gaps and padding below 768px and fought every responsive change
made in JSX. But buried inside it was a blanket rule giving every anchor a 48px
minimum height on mobile.

Removing the block dropped the header logo to 32px, footer links to 36px, social
buttons to 40px, and every inline text CTA to ~20px. Nothing looked broken on
desktop and nothing failed a build.

Touch targets are now sized at the component, with a `.tap` utility for inline
text links that act as CTAs. **When you delete a broad rule, enumerate what it
was legitimately doing before assuming it was all bad.**

Audit with a headless pass at 390px, asserting on measurements rather than
screenshots: horizontal scroll, elements wider than the viewport, interactive
targets under 44px, text under 12px.

---

## 🎨 **CSS CLASSES THAT DO NOT EXIST FAIL SILENTLY**

Three classes were referenced and never defined. Tailwind emits nothing for an
unknown class and React does not care, so each rendered as *almost* correct:

| Class | Where | Effect |
| --- | --- | --- |
| `icon-hhp-accent` | `Brokerage.tsx` ×4 | `.icon-accent` exists; this does not. The **first checklist in every section rendered navy and the second uncoloured** |
| `bg-hhip-accent/10` | `technology/CustomSolutions.tsx` | Typo for `hhp`. One of four icon wells rendered transparent |
| `min-h-auto` | `Technology.tsx` | Not a Tailwind class at all |

Grep for suspicious class names when something looks subtly inconsistent between
two elements that should match.

---

## 🔗 **SEO: EVERY ROUTE SELF-CANONICALIZED TO THE HOMEPAGE (FIXED)**

### Symptom
No page other than `/` could rank. Search Console treated the whole site as duplicates.

### Root cause
`index.html` carried a hardcoded `<link rel="canonical" href="https://hhpasset.com/">`. Under the SPA catch-all rewrite in `vercel.json`, that same HTML is served for **every** URL — so all 61 routes declared themselves duplicates of the homepage. Only three files overrode it via `Helmet`.

### Fix
Removed the static tag. Canonicals are emitted per route by page components. **Never put a canonical, `og:url`, or any URL-specific tag in `index.html` on an SPA with a catch-all rewrite** — it is served everywhere.

---

## 💧 **LEADS: CONTACT FORM COULD SILENTLY DROP SUBMISSIONS (FIXED)**

### Symptom
None — that was the problem. A failed submission produced a toast and no record anywhere.

### Root cause
`Contact.tsx` POSTed to a single n8n webhook with no fallback. If the webhook was down, the lead was gone: no database row, no retry, no queue. The `contacts` table existed and was typed in `src/integrations/supabase/types.ts`, and nothing wrote to it.

### Fix
Both forms now write to the webhook **and** Supabase concurrently via `Promise.allSettled`; a lead is lost only if both fail. Partial failures are logged. Honeypot fields added.

```javascript
// Verify: block the webhook domain in DevTools, submit, confirm the row still lands.
```

---

## 📦 **PERF: SUPABASE SHIPPED IN THE EAGER BUNDLE (FIXED)**

### Symptom
145 kB gzip of eager JS on every page view.

### Root cause
`main.tsx` → `utils/debug.ts` → a top-level `import { supabase }`. That pulled the entire client, including the realtime/phoenix websocket layer (~105 kB raw), onto every route — to support inserts into `error_logs` and `route_logs`, **two tables that do not exist in the schema**. Every write failed silently.

### Fix
Removed the import; errors now route through the existing `trackError` GA4 helper. Supabase is reached only via dynamic `import()` inside form submit handlers. Eager bundle: **473 → 341 kB raw, 145.8 → 110.1 kB gzip.**

```bash
grep -c "GoTrueClient" dist/assets/index-*.js   # must be 0
```

Also fixed in that file: a `setInterval` memory logger that ran forever in production, and a `window.onerror` handler that dereferenced `error.message` without a null check — cross-origin script errors deliver `event.error === null`, so the error handler threw inside itself and could re-fire the error event.

---

## 🖼️ **ASSETS: LOGO AND IMAGE TRAPS**

### Broken references render as nothing, not as errors
Nine `/images/...` paths pointed at files that do not exist, including the Home hero **video poster** — so the LCP element was a black box until a 3.4 MB video decoded. Detect with:

```bash
grep -rhoE '/images/[A-Za-z0-9._ -]+\.(png|jpg|jpeg|webp|svg|mp4)' src | sort -u   | while read p; do [ -f "public$p" ] || echo "MISSING: $p"; done
```

### Not every "white" logo is usable on dark
`HHP Logo White Letters.png` is a **hollow outline** (white fill, thin navy stroke) sitting on a 1024² canvas where the mark occupies ~⅓ of the frame — it renders small and washed. The full-lockup PNGs have **opaque white backgrounds** (0% alpha), so `brightness-0 invert` turns them into solid white plates. Check alpha before assuming transparency:

```javascript
// draw to canvas, then count pixels with data[i+3] < 16
```

Use the SVG masters in `public/brand/vector/` instead. Note their artboards are **tight**, so the same CSS height renders a much larger mark than the padded rasters did — resize when swapping.

---

## 🗺️ **MAPBOX: STYLES LOAD AFTER YOUR BUNDLE**

`Portfolio.tsx` injects the Mapbox stylesheet via `document.createElement('link')` at runtime, so it lands in `<head>` **after** the bundled CSS and wins on equal specificity. Overrides for `.mapboxgl-ctrl-group`, `.mapboxgl-popup-close-button`, etc. need `!important`.

Two other traps found here:
- **Two different popups exist.** The marker-click popup and the one built in `flyToProperty` are separate; styling one leaves the other untouched. The `flyToProperty` popup is the one users actually reach.
- A white box on the popup close button was the **default focus ring**, not a background. Computed style said `background: rgba(0,0,0,0)` — always check `outline` before chasing backgrounds.

Custom HTML markers previously caused drift on zoom; the built-in `mapboxgl.Marker` is used deliberately. Get aesthetics from the basemap style and marker colour rather than reintroducing a custom element.

---

## 🧩 **PROPS THAT ARE ACCEPTED AND SILENTLY DROPPED**

`AssetTypePage.tsx` declared `marketText`, destructured it, rendered the `<h2>Market Context</h2>` heading — and never rendered the value. All six asset-type pages passed it; all six showed a bare heading. Separately, `Office.tsx` and `SeniorHousing.tsx` passed a `caseStudies` prop the component does not accept, so that content never rendered at all.

`vite build` does **not** run `tsc`, so neither showed up in a build. Run the typecheck explicitly:

```bash
npx tsc --noEmit -p tsconfig.app.json
```

---

## 🧱 **LAYOUT: FOOTER INVISIBLE ON HOMEPAGE (FIXED)**

### Symptom
The footer was missing on `/` only. It was present in the DOM at the correct position and size — it simply could not be seen.

### Root cause
Stacking context, not layout. The Home hero is:

```jsx
<section className="fixed inset-0 w-full h-screen min-h-[600px] z-0 ...">
```

Per CSS painting order, a **positioned** element (`position: fixed`, even at `z-index: 0`) paints above **static, non-positioned** content. The footer in `Layout.tsx` was a plain static sibling with `z-index: auto`, so the hero — specifically its `z-20` content overlay — painted straight over it. Home's own content had dodged this all along by using a `relative z-30` wrapper; the footer, living outside that wrapper, had nothing.

### Fix
`src/components/Layout/Footer.tsx` — added `relative z-30` to the `<footer>` root:

```jsx
<footer className="relative z-30 bg-hhp-navy text-white -mt-px">
```

### How to detect this class of bug
An element rendering but being invisible is a paint-order problem, not a display problem. Hit-test the exact point instead of eyeballing it:

```javascript
const f = document.querySelector('footer');
const r = f.getBoundingClientRect();
const top = document.elementFromPoint(r.left + r.width / 2, r.top + 50);
console.log('footer on top?', f.contains(top), '| actually on top:', top);
```

If `contains()` is `false`, something is painting over it — and the returned element tells you exactly what.

> ⚠️ A **full-page screenshot will not reproduce this.** Headless full-page capture flattens fixed elements, so the footer looks fine in the image while being invisible in a real viewport. Verify in a real scrolled viewport.

---

## ✅ **ROOT CAUSE ANALYSIS - ISSUES IDENTIFIED & FIXED**

### **Critical Issues Found:**

#### **1. SYNTAX ERRORS (FIXED)**
- **Contact.tsx**: Missing Supabase import causing crashes
- **RentalAi.tsx**: Malformed useState and function declarations *(page since removed)*
- **App.tsx**: Missing NotFound import

#### **2. MISSING ERROR HANDLING (FIXED)**
- No error boundaries to catch component crashes
- Unhandled promise rejections causing blank pages
- No fallback UI for failed components

#### **3. SUPABASE CONNECTION ISSUES (FIXED)**
- Pages trying to use Supabase without proper imports
- API calls failing silently
- No error logging for debugging

---

## 🔧 **SPECIFIC FIXES IMPLEMENTED**

### **1. Fixed Contact.tsx**
```typescript
// ADDED: Missing import
import { supabase } from '@/integrations/supabase/client';

// FIXED: Proper error handling
catch (error) {
  console.error('Contact form error:', error);
  toast({
    title: "Error",
    description: "Something went wrong. Please try again.",
    variant: "destructive",
  });
}
```

### **2. Fixed RentalAi.tsx**
```typescript
// FIXED: Proper useState declaration
const [formData, setFormData] = useState({
  name: '',
  email: '',
  company: '',
  property_count: '',
  interested_features: [] as string[]
});

// FIXED: Proper function declaration
const handleFeatureChange = (feature: string, checked: boolean) => {
  setFormData(prev => ({
    ...prev,
    interested_features: checked 
      ? [...prev.interested_features, feature]
      : prev.interested_features.filter(f => f !== feature)
  }));
};
```

### **3. Added Error Boundary**
```typescript
// NEW: ErrorBoundary component catches all crashes
class ErrorBoundary extends Component<Props, State> {
  // Catches JavaScript errors anywhere in component tree
  // Displays fallback UI instead of blank screen
  // Logs errors for debugging
}
```

### **4. Added Global Error Handling**
```typescript
// NEW: Comprehensive error monitoring
export const initializeErrorHandling = () => {
  // Handles unhandled promise rejections
  // Monitors memory usage
  // Tracks network status
  // Logs all errors to console and Supabase
};
```

---

## 🛡️ **PREVENTION MEASURES IMPLEMENTED**

### **1. Error Boundaries**
- ✅ Catches all component crashes
- ✅ Shows user-friendly error messages
- ✅ Provides retry functionality
- ✅ Logs errors for debugging

### **2. Global Error Monitoring**
- ✅ Unhandled promise rejection handling
- ✅ Global JavaScript error catching
- ✅ Memory usage monitoring
- ✅ Network status tracking
- ✅ Performance measurement utilities

### **3. API Error Handling**
- ✅ Safe API call wrapper
- ✅ Automatic error logging
- ✅ Graceful fallbacks
- ✅ User-friendly error messages

### **4. Development Tools**
- ✅ Console error logging
- ✅ Performance monitoring
- ✅ Component lifecycle tracking
- ✅ Route change monitoring

---

## 🔍 **DEBUGGING CHECKLIST**

### **When Issues Occur:**

#### **1. Check Browser Console**
```javascript
// Look for these error patterns:
- "Uncaught SyntaxError"
- "Cannot read property of undefined"
- "Module not found"
- "Network request failed"
```

#### **2. Check Network Tab**
```javascript
// Look for:
- Failed API calls (red status codes)
- CORS errors
- Timeout errors
- 404/500 responses
```

#### **3. Check Memory Usage**
```javascript
// In console, run:
logMemoryUsage();
// Look for memory leaks or excessive usage
```

#### **4. Check Component State**
```javascript
// Add debugging to components:
useEffect(() => {
  console.log('[Component] State changed:', state);
}, [state]);
```

---

## 🚀 **TESTING THE FIXES**

### **1. Test Tab Navigation**
- ✅ Click all navigation tabs
- ✅ Verify no blank screens
- ✅ Check console for errors
- ✅ Test dropdown menus

### **2. Test Form Submissions**
- ✅ Contact form submission
- ✅ Error handling for failed submissions

### **3. Test Error Scenarios**
- ✅ Disconnect internet (offline mode)
- ✅ Navigate to non-existent routes
- ✅ Submit forms with invalid data

---

## 📊 **MONITORING & ANALYTICS**

### **Error Tracking**
- All errors logged to console
- Production errors sent to Supabase
- Component crash tracking
- Performance monitoring

### **User Experience**
- Route change tracking
- Form submission success/failure rates
- Page load performance
- Memory usage patterns

---

## 🔧 **FUTURE PREVENTION**

### **1. Code Quality**
- ✅ TypeScript strict mode enabled
- ✅ ESLint error checking
- ✅ Proper error handling patterns
- ✅ Component error boundaries

### **2. Testing Strategy**
- ✅ Error boundary testing
- ✅ API failure simulation
- ✅ Network condition testing
- ✅ Memory leak detection

### **3. Monitoring**
- ✅ Real-time error logging
- ✅ Performance metrics
- ✅ User behavior tracking
- ✅ Automated alerting

---

## 🎯 **EXPECTED OUTCOME**

### **Before Fixes:**
- ❌ Tabs caused blank screens
- ❌ No error messages
- ❌ Silent failures
- ❌ Poor user experience

### **After Fixes:**
- ✅ Smooth tab navigation
- ✅ Clear error messages
- ✅ Graceful fallbacks
- ✅ Professional user experience
- ✅ Comprehensive error logging
- ✅ Performance monitoring

---

## 🚨 **EMERGENCY DEBUGGING**

If issues persist:

1. **Open Browser Console** - Look for red error messages
2. **Check Network Tab** - Look for failed requests
3. **Clear Browser Cache** - Hard refresh (Ctrl+Shift+R)
4. **Check Supabase Status** - Verify database connectivity
5. **Review Error Logs** - Check console for detailed error info

The website should now be robust and handle all error scenarios gracefully!
