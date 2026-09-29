import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout/Layout';
import {
  formatBedsBaths,
  formatPrice,
  getListingBySlug,
  getListingGallery,
} from '@/data/listings';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const PropertyDetail = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const listing = getListingBySlug(slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const gallery = useMemo(
    () => (listing ? getListingGallery(listing) : []),
    [listing],
  );

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

  const main = gallery[0];
  const supporting = gallery.slice(1, 3);
  const hasMulti = gallery.length > 1;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    trackButtonClick('view_gallery', `property_${listing.slug}`);
  };

  const TourActions = ({ className = '' }: { className?: string }) => (
    <div className={className}>
      <Link
        to={tourHref}
        className="btn-hero w-full text-center"
        onClick={() => {
          trackButtonClick('schedule_tour', `property_${listing.slug}`);
          trackLinkClick('Schedule a Tour', tourHref);
        }}
      >
        Schedule a Tour
      </Link>
      <Link
        to={applyHref}
        className="btn-secondary w-full text-center"
        onClick={() => {
          trackButtonClick('request_application', `property_${listing.slug}`);
          trackLinkClick('Request Application', applyHref);
        }}
      >
        Request Application
      </Link>
    </div>
  );

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

      {/* Extra bottom padding on mobile so fixed action bar doesn't cover content */}
      <section className="bg-background pb-28 pt-2 lg:pb-20">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
            {/* Gallery */}
            <div className="lg:col-span-7">
              {hasMulti ? (
                <div className="grid gap-3 sm:grid-cols-12 sm:gap-4">
                  <figure className="relative overflow-hidden border border-border bg-surface-sunken sm:col-span-12">
                    <button
                      type="button"
                      className="group relative aspect-[16/10] w-full cursor-zoom-in text-left"
                      onClick={() => openLightbox(0)}
                      aria-label="View all photos"
                    >
                      <img
                        src={main.src}
                        alt={main.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]"
                        loading="eager"
                        decoding="async"
                      />
                      <span
                        className={`absolute left-3 top-3 rounded px-2.5 py-0.5 text-[11px] font-semibold tracking-wide shadow-sm ${statusClass}`}
                      >
                        {status}
                      </span>
                    </button>
                    {main.caption ? (
                      <figcaption className="border-t border-border bg-white px-3 py-2 text-xs tracking-wide text-listing-muted">
                        {main.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                  {supporting.map((img, i) => (
                    <figure
                      key={img.src}
                      className="relative overflow-hidden border border-border bg-surface-sunken sm:col-span-6"
                    >
                      <button
                        type="button"
                        className="group relative aspect-[4/3] w-full cursor-zoom-in text-left"
                        onClick={() => openLightbox(i + 1)}
                        aria-label={`View photo ${i + 2}`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                      {img.caption ? (
                        <figcaption className="border-t border-border bg-white px-3 py-2 text-xs tracking-wide text-listing-muted">
                          {img.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              ) : (
                <figure className="overflow-hidden border border-border bg-surface-sunken">
                  <div className="relative aspect-[4/3] w-full">
                    <img
                      src={main.src}
                      alt={main.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                    <span
                      className={`absolute left-3 top-3 rounded px-2.5 py-0.5 text-[11px] font-semibold tracking-wide shadow-sm ${statusClass}`}
                    >
                      {status}
                    </span>
                    <button
                      type="button"
                      onClick={() => openLightbox(0)}
                      className="absolute bottom-3 right-3 rounded border border-white/30 bg-brand-deep/85 px-3 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-brand-deep"
                    >
                      View all
                    </button>
                  </div>
                  {main.caption ? (
                    <figcaption className="border-t border-border bg-white px-3 py-2 text-xs tracking-wide text-listing-muted">
                      {main.caption}
                    </figcaption>
                  ) : null}
                </figure>
              )}
              <p className="mt-3 text-xs leading-relaxed text-listing-muted">
                Additional interior photos are shared during a tour when available.
              </p>
            </div>

            {/* Sticky tour panel — desktop */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+1rem)]">
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

                {/* Desktop / tablet CTAs — hidden on small screens (mobile bar handles it) */}
                <TourActions className="mt-6 hidden flex-col gap-3 lg:flex" />
              </div>
            </aside>
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

      {/* Mobile action bar */}
      <div className="safe-pb fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-4 pt-3 backdrop-blur-sm lg:hidden">
        <div className="mx-auto flex max-w-lg gap-3">
          <Link
            to={tourHref}
            className="btn-hero flex-1 text-center text-sm"
            onClick={() => {
              trackButtonClick('schedule_tour_mobile', `property_${listing.slug}`);
              trackLinkClick('Schedule a Tour', tourHref);
            }}
          >
            Schedule a Tour
          </Link>
          <Link
            to={applyHref}
            className="btn-secondary flex-1 text-center text-sm"
            onClick={() => {
              trackButtonClick('request_application_mobile', `property_${listing.slug}`);
              trackLinkClick('Request Application', applyHref);
            }}
          >
            Apply
          </Link>
        </div>
      </div>

      {/* Simple lightbox — available photos only, no invented assets */}
      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-deep/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Property photos"
          onClick={() => setLightboxOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setLightboxOpen(false);
          }}
        >
          <button
            type="button"
            className="absolute right-3 top-3 flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-4 sm:top-4"
            aria-label="Close"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[lightboxIndex]?.src}
              alt={gallery[lightboxIndex]?.alt ?? ''}
              className="max-h-[80vh] w-full object-contain"
            />
            {gallery[lightboxIndex]?.caption ? (
              <figcaption className="mt-3 text-center text-sm text-white/70">
                {gallery[lightboxIndex].caption}
              </figcaption>
            ) : null}
            {gallery.length > 1 ? (
              <div className="mt-4 flex justify-center gap-1">
                {gallery.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    aria-label={`Show photo ${i + 1}`}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <span
                      className={`block h-1.5 w-6 rounded-full transition-colors ${
                        i === lightboxIndex ? 'bg-white' : 'bg-white/35'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </figure>
        </div>
      ) : null}
    </Layout>
  );
};

export default PropertyDetail;
