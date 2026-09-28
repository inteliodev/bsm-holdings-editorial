export type PropertyType =
  | "Single-family"
  | "Duplex"
  | "Triplex"
  | "Townhome"
  | "Apartment";

export type Listing = {
  id: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  type: PropertyType;
  beds: number;
  baths: number;
  sqft: number;
  price: number;
  pets: boolean;
  available: boolean;
  comingSoon?: boolean;
  featured?: boolean;
  availLabel: string;
  amenities: string[];
  blurb: string;
  image: string;
  imageAlt: string;
};

export const listings: Listing[] = [
  {
    id: "1",
    slug: "2148-willow-creek-edmond",
    address: "2148 Willow Creek Dr",
    city: "Edmond",
    state: "OK",
    zip: "73013",
    type: "Single-family",
    beds: 3,
    baths: 2,
    sqft: 1680,
    price: 1850,
    pets: true,
    available: true,
    featured: true,
    availLabel: "Avail. Now",
    amenities: ["Pet friendly", "Parking", "W/D"],
    blurb: "Quiet cul-de-sac home with fenced yard and updated kitchen.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Brick single-family home with front porch",
  },
  {
    id: "2",
    slug: "88-maple-lane-unit-b-norman",
    address: "88 Maple Lane, Unit B",
    city: "Norman",
    state: "OK",
    zip: "73071",
    type: "Duplex",
    beds: 2,
    baths: 1.5,
    sqft: 1120,
    price: 1325,
    pets: true,
    available: true,
    featured: true,
    availLabel: "Avail. Oct 1",
    amenities: ["Pet friendly", "Parking"],
    blurb: "Side-by-side duplex near OU — washer/dryer hookups included.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Duplex exterior with landscaped front lawn",
  },
  {
    id: "3",
    slug: "401-heritage-square-okc",
    address: "401 Heritage Square #12",
    city: "Oklahoma City",
    state: "OK",
    zip: "73118",
    type: "Apartment",
    beds: 1,
    baths: 1,
    sqft: 720,
    price: 1095,
    pets: false,
    available: true,
    featured: true,
    availLabel: "Avail. Now",
    amenities: ["Parking"],
    blurb: "Bright one-bedroom near Midtown — reserved parking available.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern apartment living room with large windows",
  },
  {
    id: "4",
    slug: "19-stonebridge-townhomes-yukon",
    address: "19 Stonebridge Townhomes",
    city: "Yukon",
    state: "OK",
    zip: "73099",
    type: "Townhome",
    beds: 3,
    baths: 2.5,
    sqft: 1540,
    price: 1675,
    pets: true,
    available: true,
    featured: true,
    availLabel: "Avail. Sep 28",
    amenities: ["Pet friendly", "Parking", "W/D"],
    blurb: "Two-story townhome with attached garage and patio.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Townhome exterior at dusk",
  },
  {
    id: "5",
    slug: "772-redbud-ave-midwest-city",
    address: "772 Redbud Ave",
    city: "Midwest City",
    state: "OK",
    zip: "73110",
    type: "Single-family",
    beds: 4,
    baths: 2,
    sqft: 1920,
    price: 1995,
    pets: true,
    available: false,
    availLabel: "Leased",
    amenities: ["Pet friendly", "Parking", "W/D"],
    blurb: "Spacious four-bedroom — currently leased; join the waitlist.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Contemporary single-family home with garage",
  },
  {
    id: "6",
    slug: "305-cashion-rd-triplex-okc",
    address: "305 Cashion Rd, Unit 3",
    city: "Oklahoma City",
    state: "OK",
    zip: "73114",
    type: "Triplex",
    beds: 2,
    baths: 1,
    sqft: 980,
    price: 1195,
    pets: false,
    available: true,
    comingSoon: false,
    availLabel: "Avail. Now",
    amenities: ["Utilities included"],
    blurb: "Ground-floor unit with private entrance and storage closet.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Apartment kitchen and dining area",
  },
  {
    id: "7",
    slug: "5401-prairie-view-moore",
    address: "5401 Prairie View Ln",
    city: "Moore",
    state: "OK",
    zip: "73160",
    type: "Single-family",
    beds: 3,
    baths: 2,
    sqft: 1450,
    price: 1590,
    pets: true,
    available: true,
    availLabel: "Avail. Oct 15",
    amenities: ["Pet friendly", "Parking", "W/D"],
    blurb: "Move-in ready with new flooring and covered back patio.",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Suburban home with neat landscaping",
  },
  {
    id: "8",
    slug: "1200-riverbend-apt-okc",
    address: "1200 Riverbend Ct #204",
    city: "Oklahoma City",
    state: "OK",
    zip: "73120",
    type: "Apartment",
    beds: 2,
    baths: 2,
    sqft: 1050,
    price: 1425,
    pets: true,
    available: false,
    comingSoon: true,
    availLabel: "Coming soon",
    amenities: ["Pet friendly", "W/D", "Parking"],
    blurb: "Upper-floor apartment with balcony and in-unit laundry.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Furnished apartment interior with natural light",
  },
];

export const propertyTypes: PropertyType[] = [
  "Single-family",
  "Duplex",
  "Triplex",
  "Townhome",
  "Apartment",
];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}
