import { Link } from 'react-router-dom';
import { formatPrice, type Listing } from '@/data/listings';
import { site } from '@/lib/site';

type Props = { listing: Listing; className?: string };

export function ListingCard({ listing, className = '' }: Props) {
  const applyHref = `${site.applyUrl}&body=${encodeURIComponent(
    `I'm interested in applying for ${listing.address}, ${listing.city}. Please send application steps.`,
  )}`;
  const tourHref = `${site.tourUrl}&body=${encodeURIComponent(
    `I'd like to schedule a tour of ${listing.address}, ${listing.city}.`,
  )}`;

  const status = listing.comingSoon
    ? 'Coming soon'
    : listing.available
      ? 'Available'
      : 'Leased';

  const statusClass = listing.comingSoon
    ? 'bg-silver-deep text-brand-deep'
    : listing.available
      ? 'bg-brand text-white'
      : 'bg-brand-deep/90 text-white';

  return (
    <article
      className={`bevel-frame card-shine group flex max-w-[400px] flex-col overflow-hidden ${className}`}
    >
      <div className="relative z-[1] aspect-[4/3] overflow-hidden bg-surface-sunken">
        <img
          src={listing.image}
          alt={listing.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/40 via-transparent to-transparent opacity-70" />
        <div
          className="pointer-events-none absolute right-0 top-0 h-16 w-16 bg-gradient-to-bl from-brand/40 to-transparent"
          style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
          aria-hidden
        />
        <span
          className={`absolute left-3 top-3 rounded-[3px] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide shadow-sm ${statusClass}`}
        >
          {status}
        </span>
        <span className="absolute bottom-3 right-3 border border-white/25 bg-brand-deep/90 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {listing.type}
        </span>
        {listing.pets && (
          <span className="absolute bottom-3 left-3 rounded-[3px] border border-white/20 bg-success/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Pets OK
          </span>
        )}
      </div>

      <div className="relative z-[1] flex flex-1 flex-col gap-2 p-3.5">
        <div className="flex items-baseline justify-between gap-2">
          <p className="font-display text-xl font-extrabold tracking-tight text-brand-deep">
            {formatPrice(listing.price)}
            <span className="text-sm font-normal text-listing-muted">/mo</span>
          </p>
          <p className="text-[11px] font-semibold text-listing-muted">{listing.availLabel}</p>
        </div>
        <h3 className="font-display text-[0.95rem] font-bold leading-snug text-hhp-charcoal">
          {listing.address}
        </h3>
        <p className="text-sm text-listing-muted">
          {listing.city}, {listing.state} {listing.zip}
        </p>
        <p className="text-sm text-hhp-charcoal">
          {listing.beds} bd · {listing.baths} ba · {listing.sqft.toLocaleString()} sq ft
        </p>
        {listing.blurb && (
          <p className="line-clamp-2 text-xs leading-snug text-listing-muted">{listing.blurb}</p>
        )}
        {listing.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {listing.amenities.map((a) => (
              <span
                key={a}
                className={`border px-1.5 py-0.5 text-[10px] font-medium ${
                  a.toLowerCase().includes('pet')
                    ? 'border-success/30 bg-success/10 text-success'
                    : 'border-border bg-surface text-brand-deep'
                }`}
              >
                {a}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
          <a
            href={tourHref}
            className="inline-flex items-center justify-center rounded-[4px] border border-brand/30 bg-white px-3 py-2.5 text-sm font-bold text-brand-deep transition hover:border-brand hover:bg-surface focus-ring"
          >
            Request tour
          </a>
          <a
            href={applyHref}
            className="btn-chrome !min-h-0 !rounded-[4px] !px-3 !py-2.5 !text-sm focus-ring"
          >
            Apply now
          </a>
        </div>
        <Link
          to={`/portfolio#${listing.slug}`}
          className="rounded text-center text-xs font-medium text-listing-muted hover:text-brand focus-ring"
        >
          View on properties board
        </Link>
      </div>
    </article>
  );
}
