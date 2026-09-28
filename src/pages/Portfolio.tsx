import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { PropertyCarousel } from '@/components/properties/PropertyCarousel';
import { PropertyFilters } from '@/components/properties/PropertyFilters';
import { listings } from '@/data/listings';
import { site } from '@/lib/site';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const featured = listings.filter((l) => l.featured && l.available);
  const availableCount = listings.filter((l) => l.available).length;
  const petFriendlyCount = listings.filter((l) => l.pets && l.available).length;
  const heroShot = featured[0] ?? listings[0];

  return (
    <Layout>
      <Helmet>
        <title>Properties — BSM Holdings</title>
        <meta
          name="description"
          content="Browse Oklahoma rentals managed by BSM Holdings — filter by type, beds, city, and pets."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-white/10 bg-hhp-navy-deep">
        {heroShot && (
          <div className="pointer-events-none absolute inset-0 opacity-35">
            <img
              src={heroShot.image}
              alt=""
              className="h-full w-full object-cover object-center"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-hhp-navy-deep via-hhp-navy-deep/88 to-hhp-navy-deep/40" />
          </div>
        )}
        <div
          className="pointer-events-none absolute -right-10 top-0 h-full w-48 rotate-[18deg] bg-gradient-to-b from-hhp-gold/20 to-transparent"
          aria-hidden
        />
        <div className="container-premium relative py-14 sm:py-16 lg:py-20">
          <span className="eyebrow mb-4 text-hhp-gold">Vacancies</span>
          <h1 className="font-display text-display-lg font-semibold tracking-tight text-white sm:text-display-xl">
            Properties
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/65">
            Filter by type, beds, city, and pets. Tour or apply from any card —
            {site.principal.shortName} follows up by email.
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

      <section className="border-b border-border bg-white">
        <div className="container-premium flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-brand text-xs font-bold text-white">
              Pets
            </span>
            <div>
              <p className="font-display text-sm font-bold text-brand-deep">
                Pet policy varies by home
              </p>
              <p className="mt-0.5 text-sm text-listing-muted">
                Filter for pet-friendly listings, or ask {site.principal.shortName} about a specific property.
              </p>
            </div>
          </div>
          <a
            href={`mailto:${site.principal.email}?subject=Pet%20policy%20question`}
            className="inline-flex min-h-[40px] items-center justify-center rounded-[4px] border border-brand/30 px-4 text-sm font-bold text-brand-deep transition hover:border-brand hover:bg-surface focus-ring"
          >
            Ask about pets
          </a>
        </div>
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
              Looking for property management?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-hhp-charcoal/70">
              We manage residential properties across Oklahoma — clear owner reporting and direct resident support.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-hero"
              onClick={() => {
                trackButtonClick('portfolio_cta_consultation', 'portfolio');
                trackLinkClick('Request a Consultation', '/contact');
              }}
            >
              Request a consultation
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
