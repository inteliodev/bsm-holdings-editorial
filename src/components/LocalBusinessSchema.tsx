import { Helmet } from 'react-helmet-async';
import {
  ORGANIZATION_NAME,
  CONTACT_EMAIL,
  OFFICE_ADDRESS,
  hasStreetAddress,
  ALL_SERVED_CITIES,
} from '@/data/serviceArea';

const SITE_URL = 'https://hhpasset.com';

/**
 * LocalBusiness / RealEstateAgent structured data.
 *
 * The site had no structured data of any kind. For a firm whose goal is winning local
 * management mandates, this is the highest-value schema to emit: it is what lets a
 * search engine associate HHP with the markets it actually serves.
 *
 * `address` is omitted entirely until a real street address exists — publishing a
 * partial or invented PostalAddress would conflict with the Google Business Profile
 * and is worse than omitting the property.
 *
 * `telephone` is likewise omitted: the only number the site had was a personal
 * cell, which has been removed. `telephone` is optional on this type, so leaving
 * it out is valid — but if the Google Business Profile still lists a number, the
 * profile and the markup now differ. Add a business line to serviceArea.ts to
 * bring them back into agreement.
 */
const LocalBusinessSchema = () => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    image: `${SITE_URL}/images/hhp-social-share.png`,
    description:
      'Vertically integrated asset management in Oklahoma. Property management, Facility Services, and accounting under one accountable firm, supported by in-house brokerage and advisory.',
    areaServed: ALL_SERVED_CITIES.map((city) => ({
      '@type': 'City',
      name: `${city}, OK`,
    })),
  };

  if (hasStreetAddress()) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: OFFICE_ADDRESS.street,
      addressLocality: OFFICE_ADDRESS.city,
      addressRegion: OFFICE_ADDRESS.state,
      postalCode: OFFICE_ADDRESS.postalCode,
      addressCountry: OFFICE_ADDRESS.country,
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
