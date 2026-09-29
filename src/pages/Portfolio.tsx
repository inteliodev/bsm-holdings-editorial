import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { PropertyFilters } from '@/components/properties/PropertyFilters';
import { listings } from '@/data/listings';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const availableCount = listings.filter((l) => l.available || l.comingSoon).length;

  return (
    <Layout>
      <Helmet>
        <title>Available Rentals | BSM Holdings</title>
        <meta
          name="description"
          content="Browse Oklahoma rentals managed by BSM Holdings — filter by location, rent, beds, and pets."
        />
      </Helmet>

      <section className="border-b border-border bg-background py-8 sm:py-10">
        <div className="container-premium">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Vacancies</span>
              <h1 className="section-title mt-2 text-hhp-navy">Available Rentals</h1>
              <p className="mt-2 max-w-xl text-base text-hhp-charcoal">
                Browse available homes and contact our team to schedule a tour.
              </p>
            </div>
            <p className="text-sm font-medium text-hhp-navy">
              <span className="font-display text-lg font-semibold tabular-nums">
                {availableCount}
              </span>{' '}
              open or coming soon
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="container-premium">
          {/*
            Listing photos currently use third-party stock URLs. Prefer replacing
            with real property photography when available — do not invent tropical
            or out-of-market imagery for Oklahoma City homes.
          */}
          <PropertyFilters />
        </div>
      </section>

      <section className="border-t border-border bg-surface py-10 sm:py-12">
        <div className="container-premium flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold text-hhp-navy">
              Looking for a Property Manager?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-hhp-charcoal/70">
              We manage residential properties in the Oklahoma City metro — clear owner
              reporting and direct resident support.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact?inquiry=owner"
              className="btn-hero"
              onClick={() => {
                trackButtonClick('portfolio_cta_proposal', 'portfolio');
                trackLinkClick('Request a Proposal', '/contact?inquiry=owner');
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
