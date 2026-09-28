/**
 * Per-route SEO metadata, applied to the prerendered HTML at build time.
 *
 * Two mechanisms already exist in the app (`useSEO` and `react-helmet-async`) but
 * between them cover only about half the routes; the rest inherited one generic
 * title from index.html. Rather than editing every page component, the prerender
 * step writes these values straight into each route's static HTML — which is also
 * what social scrapers and non-JS crawlers read, since they never run Helmet.
 *
 * Keep descriptions under ~155 characters and make every title distinct.
 */

export const SITE_NAME = 'BSM Holdings';
export const SITE_URL = 'https://bsmholdings.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/bsm-social-share.png`;

const t = (title) => `${title} | ${SITE_NAME}`;

export const ROUTE_META = {
  '/': {
    title: 'BSM Holdings — Vertically Integrated Asset Management in Oklahoma',
    description:
      'BSM Holdings manages residential property across Oklahoma — clear owner reporting and direct resident support.',
  },
  '/about': {
    title: t('About'),
    description:
      'Who we are and why BSM Holdings was built: one firm accountable for management, maintenance, accounting, and advisory instead of four vendors coordinating.',
  },
  '/contact': {
    title: t('Contact'),
    description:
      'Talk to BSM Holdings about your property. Offices at 1617 S. Cincinnati Ave, Tulsa, Oklahoma. Serving the Tulsa and Oklahoma City metros.',
  },
  '/portfolio': {
    title: t('Properties'),
    description:
      'Properties under BSM Holdings, including HUD Section 202 senior housing communities in Pryor, Oklahoma.',
  },
  '/opportunities': {
    title: t('Careers'),
    description:
      'Open roles at BSM Holdings. Brokerage, asset management, property management, and Facility Services under one roof.',
  },
  '/faq': {
    title: t('Frequently Asked Questions'),
    description:
      'Common questions about BSM Holdings: management scope, reporting, compliance, Facility Services, and how engagements begin.',
  },
  '/insights': {
    title: t('Insights'),
    description:
      'Market commentary and perspective from an operator-led asset management firm working in the Tulsa and Oklahoma City metros.',
  },
  '/services': {
    title: t('Services'),
    description:
      'Asset management, property management, Facility Services, financial services, and brokerage advisory — delivered by one accountable firm.',
  },
  '/services/asset-management': {
    title: t('Asset Management'),
    description:
      'The umbrella capability: business plan, underwriting, capital planning and owner reporting, with property management, the trades and accounting reporting into it.',
  },
  '/services/property-management': {
    title: t('Property Management'),
    description:
      'Day-to-day operations, leasing, compliance, and reporting run on systems we build and maintain, with maintenance performed in house.',
  },
  '/services/facility-services': {
    title: t('Facility Services'),
    description:
      'Construction, roofing, HVAC, plumbing, electrical, lawncare, and janitorial performed in house through BSM Holdings, LLC.',
  },
  '/services/financial-services': {
    title: t('Financial Services'),
    description:
      'Property accounting, owner reporting, budgeting, and variance analysis with written commentary alongside the financials.',
  },
  '/services/leasing-representation': {
    title: t('Leasing Representation'),
    description:
      'Landlord and tenant representation informed by what buildings actually cost to operate, with make-ready work performed in house.',
  },
  '/services/investment-capital-markets': {
    title: t('Investment Sales & Capital Markets'),
    description:
      'Investment sales and debt and equity placement, underwritten from the expense side by a firm that also operates the assets.',
  },
  '/services/advisory-site-selection': {
    title: t('Advisory & Site Selection'),
    description:
      'Site selection and occupancy advisory weighing total cost of occupancy — utilities, maintenance burden, and build-out, not rent alone.',
  },
  '/services/development-advisory': {
    title: t('Development Advisory'),
    description:
      'Development advisory from feasibility through delivery, informed by operating experience across the assets we manage.',
  },
  '/services/broker-consulting': {
    title: t('Broker Consulting & Broker of Record'),
    description:
      'Consulting and broker-of-record services for owners and operators who need licensed oversight without a full in-house desk.',
  },
  '/brokerage': {
    title: t('Brokerage & Advisory'),
    description:
      'Investment sales, leasing, and capital markets, underwritten in house by a firm that operates the buildings it advises on.',
  },
  '/asset-types': {
    title: t('Asset Types'),
    description:
      'How BSM Holdings approaches multifamily, affordable housing, office, retail, industrial, and senior housing across Oklahoma.',
  },
  '/asset-types/multifamily': {
    title: t('Multifamily Management'),
    description:
      'Multifamily management in Tulsa and Oklahoma City: occupancy, renewals, and turn time managed against a leasing plan with unit-level cost reporting.',
  },
  '/asset-types/hud-affordable': {
    title: t('Affordable & HUD Housing Management'),
    description:
      'HUD Section 202 and PRAC management with continuous compliance — 50059 and EIV file discipline, audit-ready year round.',
  },
  '/asset-types/senior-housing': {
    title: t('Senior Housing Management'),
    description:
      'Senior housing management with resident-centered operations, regulatory readiness, and transparent owner reporting.',
  },
  '/asset-types/office': {
    title: t('Office Property Management'),
    description:
      'Office management focused on building systems reliability, operating expense discipline, and tenant retention.',
  },
  '/asset-types/retail': {
    title: t('Retail Property Management'),
    description:
      'Retail management covering leasing, CAM reconciliation, and site upkeep handled by one accountable team.',
  },
  '/asset-types/industrial': {
    title: t('Industrial & Logistics Management'),
    description:
      'Industrial and logistics management with preventive maintenance scheduled against the asset life cycle rather than deferred until failure.',
  },
  '/technology': {
    title: t('Technology'),
    description:
      'The asset management and operating systems BSM Holdings builds and maintains in house, so owners see line-item cost as it is recorded.',
  },
  '/technology/platforms': {
    title: t('Proprietary Platforms'),
    description:
      'The systems behind BSM Holdings operations: accounting, compliance, work orders and dispatch, security, communications, and owner reporting.',
  },
  '/technology/advisory-analytics': {
    title: t('Advisory & Analytics'),
    description:
      'Portfolio analytics, underwriting models, and reporting that make asset strategy measurable.',
  },
  '/technology/custom-solutions': {
    title: t('Custom Solutions'),
    description:
      'Custom workflows, integrations, and reporting built around how a portfolio actually operates.',
  },
  '/resident-login': {
    title: t('Login'),
    description: 'Resident portal access for communities managed by BSM Holdings.',
    noindex: true,
  },
};
