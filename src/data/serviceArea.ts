/**
 * Service area and canonical NAP (name / address / phone).
 *
 * BSM Holdings — rebranded template. No invented street address or phone.
 * Email is the canonical contact channel.
 */

export const ORGANIZATION_NAME = 'BSM Holdings';
export const LEGAL_ENTITY_NAME = 'BSM Holdings, LLC';

/**
 * No public phone number. Do not invent one.
 */
export const CONTACT_EMAIL = 'ty@bsmholdings.com';

/**
 * No published street address yet — do not invent one.
 * hasStreetAddress() stays false until a real address is confirmed.
 */
export const OFFICE_ADDRESS = {
  street: '',
  city: 'Oklahoma City',
  state: 'OK',
  postalCode: '',
  country: 'US',
};

/** Single-line form for display. */
export const OFFICE_ADDRESS_LINE = OFFICE_ADDRESS.street
  ? `${OFFICE_ADDRESS.street}, ${OFFICE_ADDRESS.city}, ${OFFICE_ADDRESS.state} ${OFFICE_ADDRESS.postalCode}`
  : `${OFFICE_ADDRESS.city} metro & surrounding communities, ${OFFICE_ADDRESS.state}`;

export const hasStreetAddress = () => Boolean(OFFICE_ADDRESS.street && OFFICE_ADDRESS.postalCode);

export type Metro = {
  name: string;
  blurb: string;
  cities: string[];
};

export const SERVICE_AREA: Metro[] = [
  {
    name: 'Oklahoma City Metro',
    blurb:
      'Our primary market — residential property management across the Oklahoma City metro.',
    cities: [
      'Oklahoma City',
      'Edmond',
      'Norman',
      'Moore',
      'Yukon',
      'Midwest City',
    ],
  },
  {
    name: 'Tulsa Metro (select)',
    blurb:
      'Select residential properties in the Tulsa metro.',
    cities: [
      'Tulsa',
    ],
  },
];

/** Flat list for `areaServed` in structured data. */
export const ALL_SERVED_CITIES = SERVICE_AREA.flatMap((metro) => metro.cities);
