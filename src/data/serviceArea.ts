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

export type ServiceArea = {
  name: string;
  /** Optional short note shown when the accordion item is open. */
  note?: string;
};

/**
 * Oklahoma City metro communities we serve.
 * Keep Oklahoma-focused — no Tulsa or out-of-state markets.
 */
export const SERVICE_AREAS: ServiceArea[] = [
  { name: 'Oklahoma City', note: 'Primary market for residential property management across the city.' },
  { name: 'Edmond', note: 'Single-family and multifamily management throughout Edmond.' },
  { name: 'Norman', note: 'Owner and resident support across Norman neighborhoods.' },
  { name: 'Moore', note: 'Day-to-day management for homes and small multifamily in Moore.' },
  { name: 'Midwest City', note: 'Residential management across Midwest City.' },
  { name: 'Yukon', note: 'Property management for Yukon owners and residents.' },
  { name: 'Bethany', note: 'Local management coverage in Bethany.' },
  { name: 'The Village', note: 'Residential property management in The Village.' },
  { name: 'Nichols Hills', note: 'Hands-on management for Nichols Hills properties.' },
  { name: 'Del City', note: 'Owner reporting and resident support in Del City.' },
  { name: 'Mustang', note: 'Residential management across Mustang.' },
  { name: 'Choctaw', note: 'Property management for Choctaw-area homes.' },
  { name: 'Warr Acres', note: 'Local coverage for Warr Acres properties.' },
  { name: 'Spencer', note: 'Residential management in Spencer.' },
];

/** Flat city names for `areaServed` structured data. */
export const ALL_SERVED_CITIES = SERVICE_AREAS.map((area) => area.name);

/**
 * @deprecated Prefer SERVICE_AREAS. Kept temporarily for any remaining metro-shaped consumers.
 */
export type Metro = {
  name: string;
  blurb: string;
  cities: string[];
};

/** @deprecated Prefer SERVICE_AREAS */
export const SERVICE_AREA: Metro[] = [
  {
    name: 'Oklahoma City Metro',
    blurb: 'Residential property management across the Oklahoma City metro.',
    cities: ALL_SERVED_CITIES,
  },
];
