/**
 * The firm's capabilities, in the order they stack.
 *
 * Asset management is first because it is the umbrella everything else reports
 * into — not a peer of the disciplines beneath it. Technology is last because it
 * is the foundation they all stand on.
 *
 * Shared by `CapabilityStack` (the scrollytelling section on Home) and the Asset
 * Management page, which lists the layers reporting into it. Written once here
 * rather than twice: the same copy in two files is how the asset class labels
 * drifted into five different versions.
 *
 * Brokerage is deliberately not a layer. It is a supporting capability, not a
 * peer discipline, and putting it in the stack would restate exactly the
 * hierarchy the repositioning removed. It appears as one entry in the header's
 * Services menu and as a credibility point on the pages that earn it.
 */

export type Capability = {
  id: string;
  name: string;
  /** One or two words placing the layer, e.g. "The umbrella". */
  role: string;
  body: string;
  href: string;
  image: string;
  /** Short form for card grids, where the full `body` is too long to sit well. */
  hook: string;
};

/**
 * All six, in the order the header's Services menu lists them: the umbrella
 * first, then the operating disciplines, then brokerage and the systems
 * everything runs on.
 */
export const SERVICES: Capability[] = [
  {
    id: 'am',
    name: 'Asset Management',
    role: 'The umbrella',
    body: 'Strategy, underwriting and owner reporting for the asset as a whole. Everything below reports into it, which is why there is one set of numbers rather than four vendors’ versions of them.',
    hook: 'Strategy, underwriting and owner reporting for the asset as a whole.',
    href: '/services/asset-management',
    image: '/images/asset-management-image.jpg',
  },
  {
    id: 'pm',
    name: 'Property Management',
    role: 'Operations',
    body: 'Day-to-day operations, leasing administration, compliance and resident experience — handled by our own personnel, not a call centre.',
    hook: 'Day-to-day operations, leasing and compliance, handled by our own personnel.',
    href: '/services/property-management',
    image: '/images/property-management-picture.webp',
  },
  {
    id: 'fs',
    name: 'Facility Services',
    role: 'Self-performed trades',
    body: 'Construction, roofing, HVAC, plumbing, electrical, lawncare and janitorial through BSM Holdings Facility Services, LLC — a separate offering from residential property management.',
    hook: 'Construction, roofing, HVAC, plumbing, electrical and grounds, self-performed.',
    href: '/services/facility-services',
    image: '/images/facilities-management-hero-image.jpg',
  },
  {
    id: 'fin',
    name: 'Financial Services',
    role: 'Accounting',
    body: 'Accounting, financial analysis and reporting in house. Because the people doing the work and the people reporting the cost sit in the same firm, owners get line-item visibility instead of a month-end lag.',
    hook: 'Accounting, analysis and owner reporting in house, without the month-end lag.',
    href: '/services/financial-services',
    image: '/images/financial-services-hero.jpg',
  },
  {
    id: 'brokerage',
    name: 'Brokerage & Advisory',
    role: 'Transactions',
    body: 'Sales, leasing and capital markets across all six asset classes, underwritten in house. Because we operate buildings, the expense assumptions come from what the work actually costs us.',
    hook: 'Sales, leasing and capital markets, underwritten from the expense side.',
    href: '/brokerage',
    image: '/images/investment-sales-capital-markets-hero.webp',
  },
  {
    id: 'tech',
    name: 'Technology',
    role: 'The foundation',
    body: 'The operating and reporting systems are built and maintained by BSM Holdings rather than licensed. That is what makes real-time cost reporting possible at all — the data comes from our own work orders.',
    hook: 'The operating and reporting systems, built in house rather than licensed.',
    href: '/technology',
    // Not `platforms-hero.jpg` or `advisory-analytics-hero.jpg`, which are both
    // glowing neural-net / particle-field renders. That is the AI-vendor visual
    // language the repositioning removed, and putting it on the homepage as one
    // of six service cards reinstates it louder than any copy would. BSM Holdings is the
    // operator; the systems are a supporting fact.
    image: '/images/custom-solutions.jpg',
  },
];

/**
 * The five that stack. Brokerage is deliberately excluded — see the note above;
 * `CapabilityStack` renders from this, and each `id` keys into its slab geometry.
 */
export const CAPABILITIES: Capability[] = SERVICES.filter((s) => s.id !== 'brokerage');

/** The disciplines beneath the umbrella — everything except asset management. */
export const REPORTING_CAPABILITIES = CAPABILITIES.filter((c) => c.id !== 'am');
