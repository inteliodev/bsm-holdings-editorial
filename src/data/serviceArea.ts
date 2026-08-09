/**
 * Service area and canonical NAP (name / address / phone).
 *
 * This is the single source of truth for where HHP operates. It feeds the visible
 * Service Area section, the footer, and the LocalBusiness structured data, so those
 * three can never drift apart — mismatched NAP is the most common local-ranking
 * problem, and the site previously had no address at all.
 *
 * These city names are public claims about where HHP works. Remove any market we do
 * not actually serve rather than leaving it in for search coverage.
 */

export const ORGANIZATION_NAME = 'HHP Asset Management';
export const LEGAL_ENTITY_NAME = 'HHP Facility Services, LLC';

export const CONTACT_PHONE = '(918) 899-1650';
export const CONTACT_PHONE_E164 = '+19188991650';
export const CONTACT_EMAIL = 'info@hhpasset.com';

/**
 * Canonical NAP address.
 *
 * This exact string must match the Google Business Profile character for character —
 * inconsistent NAP is the most common cause of weak local ranking. Change it here
 * only, never in a component: the footer, the Service Area section, and the
 * LocalBusiness structured data all read from this object.
 */
export const OFFICE_ADDRESS = {
  street: '1617 S. Cincinnati Ave, Suite B',
  city: 'Tulsa',
  state: 'OK',
  postalCode: '74119',
  country: 'US',
};

/** Single-line form for display and for matching against the business profile. */
export const OFFICE_ADDRESS_LINE = `${OFFICE_ADDRESS.street}, ${OFFICE_ADDRESS.city}, ${OFFICE_ADDRESS.state} ${OFFICE_ADDRESS.postalCode}`;

export const hasStreetAddress = () => Boolean(OFFICE_ADDRESS.street && OFFICE_ADDRESS.postalCode);

export type Metro = {
  name: string;
  blurb: string;
  cities: string[];
};

export const SERVICE_AREA: Metro[] = [
  {
    name: 'Tulsa Metro',
    blurb:
      'Our home market, served directly by our own Facility Services teams and on-site staff.',
    cities: [
      // Named directly by HHP.
      'Tulsa',
      'Broken Arrow',
      'Jenks',
      'Owasso',
      'Bixby',
      'Sand Springs',
      'Glenpool',
      'Claremore',
      'Pryor',
      // Surrounding communities — remove any we do not actually serve.
      'Sapulpa',
      'Catoosa',
      'Coweta',
      'Skiatook',
      'Collinsville',
      'Verdigris',
      'Inola',
      'Wagoner',
      'Bartlesville',
      'Muskogee',
    ],
  },
  {
    name: 'Oklahoma City Metro',
    blurb:
      'A second market we serve, with brokerage, asset management, and property management coverage.',
    cities: [
      'Oklahoma City',
      'Edmond',
      'Norman',
      'Moore',
      'Yukon',
      'Mustang',
      'Midwest City',
      'Del City',
      'Bethany',
    ],
  },
];

/** Flat list for `areaServed` in structured data. */
export const ALL_SERVED_CITIES = SERVICE_AREA.flatMap((metro) => metro.cities);
