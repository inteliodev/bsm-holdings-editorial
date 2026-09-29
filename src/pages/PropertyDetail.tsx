import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout/Layout';
import {
  formatBedsBaths,
  formatPrice,
  getListingBySlug,
} from '@/data/listings';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const PropertyDetail = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const listing = getListingBySlug(slug);

  if (!listing) {
    return (
      <Layout>
        <Helmet>
          <title>Property Not Found | BSM Holdings</title>
        </Helmet>
        <section className="bg-background py-16 sm:py-20">
          <div className="container-premium max-w-2xl">
            <h1 className="section-title text-hhp-navy">Property not found</h1>
            <p className="mt-4 text-lg text-hhp-charcoal">
              That listing is unavailable or the link is out of date.
            </p>
            <Link to="/portfolio" className="btn-hero mt-8 inline-flex">
              Back to Available Rentals
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const status = listing.comingSoon
    ? 'Coming soon'
    : listing.available
      ? 'Available'
      : 'Leased';

  const statusClass = listing.comingSoon
    ? 'bg-surface-sunken text-brand-deep'
    : listing.available
      ? 'bg-brand text-white'
      : 'bg-brand-deep text-white';

  const addressParam = encodeURIComponent(
    `${listing.address}, ${listing.city}, ${listing.state} ${listing.zip}`,
  );
  const tourHref = `/contact?inquiry=rental&address=${addressParam}&intent=tour`;
  const applyHref = `/contact?inquiry=rental&address=${addressParam}&intent=application`;

  return (
    <Layout>
      <Helmet>
        <title>{`${listing.address} | Available Rentals | BSM Holdings`}</title>
        <meta
          name="description"
          content={`${listing.address} in ${listing.city}, OK — ${formatBedsBaths(listing.beds, listing.baths)}, ${formatPrice(listing.price)}/mo. ${listing.blurb}`}
        />
      </Helmet>

      <section className="border-b border-border bg-background py-6 sm:py-8">
        <div className="container-premium">
          <Link
            to="/portfolio"
            className="tap inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-deep"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All rentals
          </Link>
        </div>
      </section>

      <section className="bg-background pb-12 pt-2 sm:pb-16 lg:pb-20">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
            {/* Gallery — existing listing photo only (no invented images) */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden border border-border bg-surface-sunken">
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={listing.image}
                    alt={listing.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <span
                    className={`absolute left-3 top-3 rounded px-2.5 py-0.5 text-[11px] font-semibold tracking-wide shadow-sm ${statusClass}`}
                  >
                    {status}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-listing-muted">
                Additional interior photos are shared during a tour when available.
              </p>
            </div>

            {/* Summary + actions */}
            <div className="lg:col-span-5">
              <p className="font-display text-3xl font-semibold tracking-tight text-brand-deep sm:text-4xl">
                {formatPrice(listing.price)}
                <span className="text-base font-normal text-listing-muted">/mo</span>
              </p>
              <h1 className="mt-3 font-display text-2xl font-semibold leading-snug text-hhp-navy sm:text-3xl">
                {listing.address}
              </h1>
              <p className="mt-2 flex items-start gap-2 text-base text-hhp-charcoal">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {listing.city}, {listing.state} {listing.zip}
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-3 border border-border bg-white p-4 sm:grid-cols-3">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
                    Beds / Baths
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-hhp-navy">
                    {formatBedsBaths(listing.beds, listing.baths)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
                    Size
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-hhp-navy">
                    {listing.sqft.toLocaleString()} sqft
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
                    Type
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-hhp-navy">{listing.type}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
                    Availability
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-hhp-navy">{listing.availLabel}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
                    Pets
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-hhp-navy">
                    {listing.pets ? 'Pet friendly' : 'No pets'}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
                    Rent
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-hhp-navy">
                    {formatPrice(listing.price)}/mo
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to={tourHref}
                  className="btn-hero text-center"
                  onClick={() => {
                    trackButtonClick('schedule_tour', `property_${listing.slug}`);
                    trackLinkClick('Schedule a Tour', tourHref);
                  }}
                >
                  Schedule a Tour
                </Link>
                <Link
                  to={applyHref}
                  className="btn-secondary text-center"
                  onClick={() => {
                    trackButtonClick('request_application', `property_${listing.slug}`);
                    trackLinkClick('Request Application', applyHref);
                  }}
                >
                  Request Application
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 border-t border-border pt-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-xl font-semibold text-hhp-navy">About this home</h2>
              <p className="mt-4 text-lg leading-relaxed text-hhp-charcoal">{listing.blurb}</p>
              <p className="mt-4 text-base leading-relaxed text-hhp-charcoal/80">
                Managed by BSM Holdings in the Oklahoma City metro. Ask about lease terms,
                move-in timing, and screening requirements when you schedule a tour.
              </p>
            </div>
            <div className="lg:col-span-5">
              <h2 className="font-display text-xl font-semibold text-hhp-navy">Amenities</h2>
              {listing.amenities.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {listing.amenities.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-base text-hhp-charcoal"
                    >
                      <span className="h-px w-3 shrink-0 bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-base text-hhp-charcoal/80">
                  Ask our team for amenity details during your tour inquiry.
                </p>
              )}

              <h2 className="mt-8 font-display text-xl font-semibold text-hhp-navy">Location</h2>
              <p className="mt-3 text-base leading-relaxed text-hhp-charcoal">
                {listing.address}
                <br />
                {listing.city}, {listing.state} {listing.zip}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetail;
