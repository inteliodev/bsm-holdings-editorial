import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ORGANIZATION_NAME,
  CONTACT_EMAIL,
  OFFICE_ADDRESS,
  hasStreetAddress,
  ALL_SERVED_CITIES,
} from '@/data/serviceArea';

const SITE_URL = 'https://hhpasset.com';
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/**
 * Site-wide structured data, rendered once from Layout so every route carries
 * it. Previously the only schema on the site was a RealEstateAgent block on two
 * pages, which left search and answer engines with no stable entity for the
 * organisation itself and no breadcrumb trail on any nested route.
 *
 * Organization and WebSite are emitted as a @graph with stable @ids so the
 * RealEstateAgent block on Home and Contact merges into the same entity rather
 * than competing with it.
 */

/** Human labels for path segments, so breadcrumbs read properly. */
const SEGMENT_LABELS: Record<string, string> = {
  services: 'Services',
  'property-management': 'Property Management',
  'facility-services': 'Facility Services',
  'financial-services': 'Financial Services',
  'leasing-representation': 'Leasing & Representation',
  'investment-capital-markets': 'Investment & Capital Markets',
  'advisory-site-selection': 'Advisory & Site Selection',
  'development-advisory': 'Development Advisory',
  'broker-consulting': 'Consulting & Strategic Advisory',
  'asset-types': 'Asset Types',
  multifamily: 'Multifamily',
  'hud-affordable': 'HUD & Affordable Housing',
  office: 'Office',
  retail: 'Retail',
  industrial: 'Industrial',
  'senior-housing': 'Senior Housing',
  technology: 'Technology',
  platforms: 'Platforms',
  'advisory-analytics': 'Advisory & Analytics',
  'custom-solutions': 'Custom Solutions',
  about: 'About',
  contact: 'Contact',
  portfolio: 'Properties',
  insights: 'Insights',
  faq: 'FAQ',
  opportunities: 'Careers',
  brokerage: 'Brokerage & Advisory',
  'resident-login': 'Resident Access',
  'investor-portal': 'Investor Portal',
};

const labelFor = (segment: string) =>
  SEGMENT_LABELS[segment] ??
  segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const SiteSchema = () => {
  const { pathname } = useLocation();

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: ORGANIZATION_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/brand/vector/HHP_Logo_Primary.svg`,
      },
      image: `${SITE_URL}/images/hhp-social-share.png`,
      description:
        'Vertically integrated asset management in Oklahoma. Property management, Facility Services, and accounting under one accountable firm, supported by in-house brokerage and advisory.',
      areaServed: ALL_SERVED_CITIES.map((city) => ({ '@type': 'City', name: `${city}, OK` })),
      sameAs: [
        'https://www.linkedin.com/company/hhpasset',
        'https://www.facebook.com/share/1JLHp25e3N/?mibextid=wwXIfr',
      ],
      ...(hasStreetAddress()
        ? {
            address: {
              '@type': 'PostalAddress',
              streetAddress: OFFICE_ADDRESS.street,
              addressLocality: OFFICE_ADDRESS.city,
              addressRegion: OFFICE_ADDRESS.state,
              postalCode: OFFICE_ADDRESS.postalCode,
              addressCountry: OFFICE_ADDRESS.country,
            },
          }
        : {}),
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: SITE_URL,
      name: ORGANIZATION_NAME,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    },
  ];

  const segments = pathname.split('/').filter(Boolean);

  /**
   * Service schema for the capability pages, derived from the path rather than
   * added by hand to each one. Answer engines use this to associate a named
   * service with a provider and a service area, which is exactly the shape of
   * the question "who does property management in Tulsa".
   */
  const isServicePage =
    pathname.startsWith('/services/') || pathname === '/brokerage' || pathname === '/technology';

  if (isServicePage) {
    const name = labelFor(segments[segments.length - 1]);
    graph.push({
      '@type': 'Service',
      '@id': `${SITE_URL}${pathname}#service`,
      name,
      serviceType: name,
      url: `${SITE_URL}${pathname}`,
      provider: { '@id': ORG_ID },
      areaServed: ALL_SERVED_CITIES.map((city) => ({ '@type': 'City', name: `${city}, OK` })),
    });
  }

  // BreadcrumbList for nested routes. A single-segment path is its own trail
  // and adds nothing, so it is skipped.
  if (segments.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        ...segments.map((segment, index) => ({
          '@type': 'ListItem',
          position: index + 2,
          name: labelFor(segment),
          item: `${SITE_URL}/${segments.slice(0, index + 1).join('/')}`,
        })),
      ],
    });
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}
      </script>
    </Helmet>
  );
};

export default SiteSchema;
