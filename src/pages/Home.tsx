import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { ListingCard } from '@/components/properties/ListingCard';
import { OwnerInquiryForm } from '@/components/OwnerInquiryForm';
import { listings } from '@/data/listings';
import { AnimatedCard } from '@/components/AnimatedCard';

const SERVICES = [
  {
    n: '01',
    title: 'Leasing',
    body: 'Property marketing, applicant screening, lease preparation, and renewals.',
  },
  {
    n: '02',
    title: 'Rent Collection',
    body: 'Rent collection, payment tracking, and follow-up on outstanding balances.',
  },
  {
    n: '03',
    title: 'Maintenance',
    body: 'Coordination of resident requests, repairs, and preparation between tenants.',
  },
  {
    n: '04',
    title: 'Financial Reporting',
    body: 'Monthly statements showing property income and expenses.',
  },
];

const Home = () => {
  const featured = listings.filter((l) => l.featured).slice(0, 3);

  return (
    <Layout>
      <LocalBusinessSchema />
      {/* Hero — video as atmosphere; copy left-aligned over navy panel */}
      <section
        className="fixed inset-0 z-0 h-[78vh] min-h-[520px] max-h-[820px] w-full overflow-hidden bg-brand-deep"
        aria-label="Hero"
      >
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-55"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/multifamily-image-trendy.jpg"
          onLoadedMetadata={(e) => {
            e.currentTarget.play().catch(() => {});
          }}
        >
          <source src="/images/HeroHomePageHHP.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 scrim-hero-editorial" aria-hidden="true" />

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-premium w-full">
            <div className="max-w-xl lg:max-w-2xl">
              <h1 className="hero-title normal-case text-white">
                Residential Property Management
                <br className="hidden sm:block" />
                <span className="sm:block"> in Oklahoma City</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
                We handle leasing, rent collection, maintenance, and financial reporting
                for rental property owners throughout the Oklahoma City metro.
              </p>
              <div className="mt-7 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:items-center">
                <Link
                  to="/contact?inquiry=owner"
                  className="btn-hero"
                  onClick={() => {
                    trackButtonClick('request_a_proposal', 'home_hero');
                    trackLinkClick('Request a Proposal', '/contact?inquiry=owner');
                  }}
                >
                  Request a Proposal
                </Link>
                <Link
                  to="/portfolio"
                  className="tap group inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
                  onClick={() => {
                    trackButtonClick('view_available_rentals', 'home_hero');
                    trackLinkClick('View Available Rentals', '/portfolio');
                  }}
                >
                  View Available Rentals
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="pointer-events-none relative z-0 h-[78vh] min-h-[520px] max-h-[820px] w-full"
        aria-hidden="true"
      />

      <div className="relative z-30 bg-background">
        {/* Who We Are + What We Handle — tighter relationship */}
        <section className="bg-background pb-8 pt-12 sm:pb-10 sm:pt-16 lg:pt-20">
          <div className="container-premium">
            <AnimatedCard distance={16}>
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                  <h2 className="section-title text-hhp-navy">Who We Are</h2>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg leading-relaxed text-hhp-charcoal">
                    BSM Holdings manages single-family homes, duplexes, townhomes, and
                    apartments throughout the Oklahoma City metro. Our team handles daily
                    operations, supports residents, and keeps owners informed — with a
                    direct point of contact for questions and updates.
                  </p>
                  <Link
                    to="/about"
                    className="tap group mt-6 inline-flex items-center gap-2 font-display font-semibold text-brand transition-colors hover:text-brand-deep"
                    onClick={() => {
                      trackButtonClick('about_bsm', 'who_we_are');
                      trackLinkClick('About BSM Holdings', '/about');
                    }}
                  >
                    About BSM Holdings
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Services — split layout */}
        <section className="bg-background pb-12 pt-4 sm:pb-16 sm:pt-6 lg:pb-20">
          <div className="container-premium">
            <AnimatedCard distance={16}>
              <div className="mb-8 max-w-2xl sm:mb-10">
                <h2 className="section-title text-hhp-navy">What We Handle</h2>
                <p className="mt-3 text-lg leading-relaxed text-hhp-charcoal">
                  Day-to-day responsibilities of owning rental property in the Oklahoma
                  City metro.
                </p>
              </div>

              <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                  <div className="card-media relative h-full min-h-[280px] overflow-hidden rounded border border-border bg-surface-sunken sm:min-h-[360px]">
                    <img
                      src="/images/property-management-picture.webp"
                      alt="Residential property managed with care"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:col-span-7">
                  <ul className="divide-y divide-border border-y border-border">
                    {SERVICES.map((item) => (
                      <li key={item.title} className="flex gap-4 py-5 sm:gap-5 sm:py-6">
                        <span className="mt-0.5 font-display text-sm font-semibold tabular-nums text-brand">
                          {item.n}
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold text-hhp-navy">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-base leading-relaxed text-hhp-charcoal">
                            {item.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services/property-management"
                    className="tap group mt-6 inline-flex items-center gap-2 font-display font-semibold text-brand transition-colors hover:text-brand-deep"
                    onClick={() => {
                      trackButtonClick('explore_services', 'home_pm');
                      trackLinkClick('Explore Our Services', '/services/property-management');
                    }}
                  >
                    Explore Our Services
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Featured rentals — stable 3-column grid, no autoplay carousel */}
        <section className="bg-surface-sunken py-12 sm:py-16 lg:py-20">
          <div className="container-premium">
            <AnimatedCard distance={16}>
              <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="section-title text-hhp-navy">Available Rentals</h2>
                  <p className="mt-2 text-base text-hhp-charcoal/80">
                    A few homes currently featured in the Oklahoma City metro.
                  </p>
                </div>
                <Link
                  to="/portfolio"
                  className="tap group inline-flex items-center gap-2 font-display font-semibold text-brand transition-colors hover:text-brand-deep"
                  onClick={() => {
                    trackButtonClick('home_all_properties', 'home_featured');
                    trackLinkClick('View All Rentals', '/portfolio');
                  }}
                >
                  View All Rentals
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    className="h-full max-w-none"
                  />
                ))}
              </div>
            </AnimatedCard>
          </div>
        </section>

        <ServiceAreaSection
          background="white"
          intro="We manage residential properties in Oklahoma City, Edmond, Norman, Moore, Yukon, and surrounding communities."
        />

        {/* Who owners work with — real Ty headshot already in repo */}
        <section className="bg-surface-sunken py-12 sm:py-16 lg:py-20">
          <div className="container-premium">
            <AnimatedCard distance={16}>
              <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <div className="mx-auto aspect-square max-w-[280px] overflow-hidden rounded border border-border bg-white lg:mx-0 lg:max-w-none">
                    <img
                      src="/brand/ty-headshot.png"
                      alt="Ty McClellan, Principal of BSM Holdings"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <h2 className="section-title text-hhp-navy">Who owners work with</h2>
                  <p className="mt-2 font-display text-lg font-semibold text-hhp-navy">
                    Ty McClellan
                  </p>
                  <p className="text-sm font-medium text-brand">Principal</p>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-hhp-charcoal">
                    Ty works directly with owners and residents — clear reporting,
                    responsive maintenance coordination, and straightforward communication
                    across the Oklahoma City metro.
                  </p>
                  <Link
                    to="/about"
                    className="tap group mt-6 inline-flex items-center gap-2 font-display font-semibold text-brand transition-colors hover:text-brand-deep"
                    onClick={() => {
                      trackButtonClick('meet_the_team', 'home_people');
                      trackLinkClick('About BSM Holdings', '/about');
                    }}
                  >
                    About BSM Holdings
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Pre-footer owner inquiry */}
        <section className="bg-background py-12 sm:py-16 lg:py-20">
          <div className="container-premium">
            <AnimatedCard distance={16}>
              <div className="mx-auto grid max-w-5xl gap-8 rounded border border-border bg-white p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
                <div className="lg:col-span-5">
                  <h2 className="section-title text-hhp-navy">
                    Looking for Property Management?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-hhp-charcoal sm:text-lg">
                    Tell us about your rental property. We will follow up with a clear
                    proposal for management in the Oklahoma City metro.
                  </p>
                  <p className="mt-4 text-sm text-hhp-charcoal/70">
                    Prefer email?{' '}
                    <a
                      href="mailto:ty@bsmholdings.com"
                      className="font-medium text-brand hover:text-brand-deep"
                    >
                      ty@bsmholdings.com
                    </a>
                  </p>
                </div>
                <div className="relative lg:col-span-7">
                  <OwnerInquiryForm />
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
