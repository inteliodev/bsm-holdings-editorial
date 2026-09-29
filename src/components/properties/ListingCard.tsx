import { Link } from 'react-router-dom';
import { formatBedsBaths, formatPrice, type Listing } from '@/data/listings';

type Props = { listing: Listing; className?: string };

/**
 * Simplified rental card hierarchy:
 * photo → availability badge → rent → address/city → beds · baths · sqft → View Property
 * Tour / apply / pets / amenities live on the property detail page.
 */
export function ListingCard({ listing, className = '' }: Props) {
  const status = listing.comingSoon
    ? 'Coming soon'
    : listing.available
      ? 'Available'
      : 'Leased';

  const statusClass = listing.comingSoon
    ? 'bg-white/95 text-brand-deep'
    : listing.available
      ? 'bg-brand text-white'
      : 'bg-brand-deep/90 text-white';

  return (
    <article
      className={`bevel-frame group flex max-w-[400px] flex-col overflow-hidden ${className}`}
    >
      <div className="card-media relative z-[1] aspect-[4/3] overflow-hidden bg-surface-sunken">
        <img
          src={listing.image}
          alt={listing.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <span
          className={`absolute left-3 top-3 rounded px-2.5 py-0.5 text-[11px] font-semibold tracking-wide shadow-sm ${statusClass}`}
        >
          {status}
        </span>
      </div>

      <div className="relative z-[1] flex flex-1 flex-col gap-1.5 p-4">
        <p className="font-display text-xl font-semibold tracking-tight text-brand-deep">
          {formatPrice(listing.price)}
          <span className="text-sm font-normal text-listing-muted">/mo</span>
        </p>
        <h3 className="font-display text-[0.95rem] font-semibold leading-snug text-hhp-navy">
          {listing.address}
        </h3>
        <p className="text-sm text-listing-muted">
          {listing.city}, {listing.state}
        </p>
        <p className="text-sm text-hhp-charcoal">
          {formatBedsBaths(listing.beds, listing.baths)} · {listing.sqft.toLocaleString()} sqft
        </p>
        <Link
          to={`/portfolio/${listing.slug}`}
          className="tap group/link mt-auto inline-flex items-center gap-1 pt-3 text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-ring"
        >
          View Property
          <span aria-hidden="true" className="transition-transform duration-200 group-hover/link:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
