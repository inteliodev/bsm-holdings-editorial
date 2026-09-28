import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { PropertyCarousel } from '@/components/properties/PropertyCarousel';
import { PropertyFilters } from '@/components/properties/PropertyFilters';
import { listings } from '@/data/listings';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const featured = listings.filter((l) => l.featured && l.available);
  // Match ListingCard status rules: open (available) or coming soon.
  const openOrComing = listings.filter((l) => l.available || l.comingSoon);
  const availableCount = openOrComing.length;
  const petFriendlyCount = openOrComing.filter((l) => l.pets).length;
  const heroShot = featured[0] ?? listings[0];

  return (
    <Layout>
      <Helmet>
        <title>Available Rentals | BSM Holdings</title>
        <meta
          name="description"
          content="Browse Oklahoma rentals managed by BSM Holdings — filter by type, beds, city, and pets."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-white/10 bg-brand-deep">
        {heroShot && (
          <div className="pointer-events-none absolute inset-0 opacity-35">
            <img
              src={heroShot.image}
              alt=""
              className="h-full w-full object-cover object-center"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/85 to-brand-deep/50" />
          </div>
        )}
        <div
          className="pointer-events-none absolute -right-10 top-0 h-full w-48 rotate-[18deg] bg-gradient-to-b from-hhp-gold/20 to-transparent"
          aria-hidden
        />
        <div className="container-premium relative py-14 sm:py-16 lg:py-20">
          <span className="eyebrow mb-4 text-hhp-gold">Vacancies</span>
          <h1 className="font-display text-display-lg font-semibold tracking-tight text-white sm:text-display-xl">
            Available Rentals
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/65">
            Browse available homes and contact our team to schedule a tour.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="border border-white/25 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/90">
              {availableCount} open or coming available
            </span>
            <span className="border border-white/25 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/90">
              {petFriendlyCount} pet-friendly available
            </span>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-8 bg-white"
          style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
          aria-hidden
        />
      </section>

      {featured.length > 0 && (
        <section className="border-b border-border bg-surface py-10 sm:py-12">
          <div className="container-premium">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <span className="eyebrow mb-3">Featured</span>
                <h2 className="font-display text-display-md text-hhp-navy">Highlighted homes</h2>
              </div>
            </div>
            <PropertyCarousel listings={featured} />
          </div>
        </section>
      )}

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="container-premium">
          <div className="mb-6">
            <span className="eyebrow mb-3">All listings</span>
            <h2 className="font-display text-display-md text-hhp-navy">Browse and filter</h2>
          </div>
          <PropertyFilters />
        </div>
      </section>

      <section className="border-t border-border bg-surface py-12 sm:py-14">
        <div className="container-premium flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold text-hhp-navy">
              Looking for a Property Manager?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-hhp-charcoal/70">
              We manage residential properties in the Oklahoma City metro — clear owner reporting and direct resident support.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-hero"
              onClick={() => {
                trackButtonClick('portfolio_cta_proposal', 'portfolio');
                trackLinkClick('Request a Proposal', '/contact');
              }}
            >
              Request a Proposal
            </Link>
            <Link
              to="/services/property-management"
              className="btn-secondary"
              onClick={() => {
                trackButtonClick('portfolio_cta_pm', 'portfolio');
                trackLinkClick('Property Management', '/services/property-management');
              }}
            >
              Property Management
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
