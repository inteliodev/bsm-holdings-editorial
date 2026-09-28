import type { AssetMarkName } from '@/components/AssetMark';

/**
 * The six asset classes — the single source of truth for their names.
 *
 * The same six things were previously labelled five different ways: the header
 * said "Industrial & Logistics", this list said "Industrial & Logistics" and
 * "Senior Housing & Healthcare", the detail pages' own <h1>s said "Industrial"
 * and "Senior Housing", the breadcrumb schema said "HUD & Affordable Housing",
 * and the prerender meta said "Industrial & Logistics Management". Change a
 * label here, never in a component.
 *
 * ── `track` is a presentation split, not a portfolio claim ──────────────────
 *
 * `track` decides which section a class leads in on Home, on /asset-types and
 * in the header. It says where the operation is built. It does NOT say what BSM Holdings
 * holds, and it does NOT say what BSM Holdings is willing to manage: all six classes
 * have a full management page behind them, and retail and industrial are linked
 * from every surface the other four are.
 *
 * Never write copy off this field that reads as an exclusion — no "we manage
 * four asset classes", no "we do not manage retail". That is the same rule
 * `proof.kind: 'seeking'` already carries on the detail pages: state criteria,
 * never absence.
 *
 * The only claim about assets BSM Holdings actually operates is `proof.kind: 'operating'`
 * in src/pages/assetTypes/*.tsx, and only Senior Housing and Affordable Housing
 * carry it. Nothing here should be read as widening that.
 */

export type AssetTrack = 'management' | 'advisory';

export type AssetClass = {
  /** Path segment under /asset-types. */
  slug: string;
  /** The canonical label. The only one, everywhere. */
  label: string;
  href: string;
  image: string;
  mark: AssetMarkName;
  /** Which track this class leads with. See the note above. */
  track: AssetTrack;
  /**
   * One plain clause: what BSM Holdings does in this class. Not a slogan, and not a
   * figure — these previously held six invented performance numbers for classes
   * BSM Holdings does not operate. Restore a number only when it is sourced to a real
   * property, and put it on the detail page's `proof` block rather than here.
   */
  hook: string;
};

export const ASSET_CLASSES: AssetClass[] = [
  {
    slug: 'multifamily',
    label: 'Multifamily',
    href: '/asset-types/multifamily',
    image: '/images/multifamily-image-trendy.jpg',
    mark: 'multifamily',
    track: 'management',
    hook: 'Leasing, turns and unit-level cost managed against a plan.',
  },
  {
    slug: 'hud-affordable',
    label: 'Affordable Housing',
    href: '/asset-types/hud-affordable',
    image: '/images/affordable-housing-image.jpeg',
    mark: 'affordable',
    track: 'management',
    hook: 'Section 202 and PRAC compliance run as part of the operation, not beside it.',
  },
  {
    slug: 'senior-housing',
    label: 'Senior Housing',
    href: '/asset-types/senior-housing',
    image: '/images/senior-housing-image.jpg',
    mark: 'senior',
    track: 'management',
    // Deliberately not the Pryor campus. That belongs on the detail page as
    // proof, scoped to itself; on an index card it reads as the extent of the
    // portfolio rather than an example of it.
    hook: 'Occupancy, resident tenure and inspection readiness, handled by our own on-site personnel.',
  },
  {
    slug: 'office',
    label: 'Office',
    href: '/asset-types/office',
    image: '/images/office-image.jpg',
    mark: 'office',
    track: 'management',
    hook: 'Building systems and operating expense managed against budget.',
  },
  {
    slug: 'retail',
    label: 'Retail',
    href: '/asset-types/retail',
    image: '/images/retail-image.jpg',
    mark: 'retail',
    track: 'advisory',
    hook: 'Leasing, CAM reconciliation and site upkeep under one accountable team.',
  },
  {
    slug: 'industrial',
    label: 'Industrial',
    href: '/asset-types/industrial',
    image: '/images/industrial-image.webp',
    mark: 'industrial',
    track: 'advisory',
    hook: "Preventive maintenance scheduled against the asset's life cycle.",
  },
];

/** The classes the operation is built around. See the `track` note above. */
export const MANAGEMENT_CLASSES = ASSET_CLASSES.filter((c) => c.track === 'management');

/** Slug → label, for breadcrumb schema and anywhere else keyed by path segment. */
export const ASSET_SEGMENT_LABELS: Record<string, string> = Object.fromEntries(
  ASSET_CLASSES.map((c) => [c.slug, c.label]),
);

/** Sentence-case list for prose, e.g. "multifamily, affordable housing and …". */
export const assetClassSentence = (classes: AssetClass[] = ASSET_CLASSES) => {
  const names = classes.map((c) => c.label.toLowerCase());
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
};
