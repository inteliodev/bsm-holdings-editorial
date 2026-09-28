import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { PropertyCarousel } from '@/components/properties/PropertyCarousel';
import { listings } from '@/data/listings';
import { useTimeOfDay } from '@/hooks/useTimeOfDay';

const Home = () => {
  const timeOfDay = useTimeOfDay();

  return (
    <Layout>
      <LocalBusinessSchema />
      {/* Hero Section — fixed in viewport, content scrolls over it */}
      <section
        className="fixed inset-0 w-full h-screen min-h-[600px] z-0 overflow-hidden bg-black"
        aria-label="Hero"
      >
        {/* Video background — stays fixed */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
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
        {/*
          Layered scrim. A flat bg-black/40 dimmed the footage uniformly, which
          muddied the middle of the frame while still leaving the top and bottom
          edges too light for white type. This keeps the centre of the video open
          and weights the darkness where the text and the fold actually sit.
        */}
        <div className="absolute inset-0 z-10 scrim-hero" aria-hidden="true" />
        {/* Tint keyed to the real hour in Oklahoma, so the hero is lit the same
            way the Portfolio map's campus is at that moment. */}
        <div className={`absolute inset-0 z-10 scrim-tod scrim-tod-${timeOfDay}`} aria-hidden="true" />
        {/* Hero content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container-premium text-center px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center">
                {/*
                  Apparel White from the brand kit: a genuinely solid #FFFFFF mark on
                  a transparent, tight artboard. This is the variant the raster set
                  never had — its "white" PNG was a hollow outline padded inside a
                  1024² canvas, which is why it read small and washed over the video.
                */}
                <img
                  src="/brand/vector/BSM_Logo.png"
                  alt="BSM Holdings"
                  width={509}
                  height={177}
                  className="h-18 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]" loading="eager" decoding="async" fetchPriority="high" />
              </div>
              {/*
                The page previously had no <h1> at all — the logo image and this
                tagline were the whole hero, and the first heading in the document was
                the <h2> "Our approach" further down. The tagline alone also never
                said what BSM Holdings does or who for.
              */}
              {/*
                The brand line is the <h1>. The page previously had no h1 at all —
                the logo image and this line were the whole hero — which left the
                most important page in the site with no top-level heading.
              */}
              {/*
                Asset management is the umbrella the rest of the firm sits
                under, so it is what the hero leads with.
              */}
              <span className="eyebrow mb-5 text-white/85 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
                Property Management
              </span>
              <h1 className="normal-case font-display font-semibold text-display-lg text-white mb-5 sm:mb-6 px-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
                Residential Property Management in Oklahoma City
              </h1>
              <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-white/90 sm:mb-8 sm:text-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">
                We handle leasing, rent collection, maintenance, and financial reporting for rental property owners throughout the Oklahoma City metro.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[52px] w-auto items-center justify-center rounded-none bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy shadow-elegant transition-all duration-300 hover:bg-hhp-gold hover:text-hhp-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hhp-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                  onClick={() => {
                    trackButtonClick('request_a_proposal', 'home_hero');
                    trackLinkClick('Request a Proposal', '/contact');
                  }}
                >
                  Request a Proposal
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex min-h-[52px] w-auto items-center justify-center rounded-none border border-white/70 px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-hhp-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                  onClick={() => {
                    trackButtonClick('view_available_rentals', 'home_hero');
                    trackLinkClick('View Available Rentals', '/portfolio');
                  }}
                >
                  View Available Rentals
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue — the hero fills the viewport with no indication that
            anything follows it. */}
        <div
          className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
          aria-hidden="true"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Scroll
          </span>
          <span className="block h-12 w-px overflow-hidden bg-white/20">
            <span className="block h-4 w-px animate-[scrollCue_2.4s_ease-in-out_infinite] bg-hhp-gold" />
          </span>
        </div>
      </section>

      {/* Spacer so content starts below viewport — hero stays fixed behind.
          `pointer-events-none` is load-bearing, not tidying: the hero is
          `fixed inset-0 z-0` and this sits later in DOM order at the same
          z-index, so it painted on top of the hero and swallowed the clicks on
          all three hero CTAs. They looked and hovered like links and did
          nothing. The spacer only needs to occupy height. */}
      <div
        className="pointer-events-none relative z-0 h-screen min-h-[600px] w-full"
        aria-hidden="true"
      />

      {/* Content that scrolls up over the fixed hero */}
      <div className="relative z-30">

      {/* Who We Are + Our Approach — combined for a cleaner post-hero section. */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="container-premium">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="section-title text-hhp-navy">
                Who We Are
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  BSM Holdings manages single-family homes, duplexes, townhomes, and apartments throughout the Oklahoma City metro. Our team handles daily operations, supports residents, and keeps owners informed — with a direct point of contact for questions and updates.
                </p>
              </div>

              <Link
                to="/about"
                className="tap group mt-8 inline-flex items-center gap-2 font-display font-semibold text-hhp-navy transition-colors hover:text-hhp-gold"
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
        </div>
      </section>

      {/* Property Management focus — four service summaries */}
      <section className="bg-white pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <div className="container-premium">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow mb-5">Property Management</span>
            <h2 className="section-title text-hhp-navy mb-5">
              What We Handle
            </h2>
            <p className="text-lg leading-relaxed text-hhp-charcoal">
              Day-to-day responsibilities of owning rental property in the Oklahoma City metro.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Leasing',
                body: 'Property marketing, applicant screening, lease preparation, and renewals.',
              },
              {
                title: 'Rent Collection',
                body: 'Rent collection, payment tracking, and follow-up on outstanding balances.',
              },
              {
                title: 'Maintenance',
                body: 'Coordination of resident requests, repairs, and preparation between tenants.',
              },
              {
                title: 'Financial Reporting',
                body: 'Monthly statements showing property income and expenses.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-border bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-hhp-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-hhp-charcoal">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-hero"
              onClick={() => {
                trackButtonClick('pm_focus_cta', 'home_pm');
                trackLinkClick('Request a Proposal', '/contact');
              }}
            >
              Request a Proposal
            </Link>
            <Link
              to="/services/property-management"
              className="btn-secondary"
              onClick={() => {
                trackButtonClick('pm_focus_how', 'home_pm');
                trackLinkClick('How we manage', '/services/property-management');
              }}
            >
              How we manage
            </Link>
          </div>
        </div>
      </section>

      {/* Featured listings — same card layout as Available Rentals */}
      <section className="bg-surface pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16">
        <div className="container-premium">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow mb-4">Featured</span>
              <h2 className="section-title text-hhp-navy">Available Rentals</h2>
            </div>
            <Link
              to="/portfolio"
              className="tap group inline-flex items-center gap-2 font-display font-semibold text-hhp-navy transition-colors hover:text-hhp-gold"
              onClick={() => {
                trackButtonClick('home_all_properties', 'home_featured');
                trackLinkClick('All rentals', '/portfolio');
              }}
            >
              All rentals
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <PropertyCarousel
            listings={listings.filter((l) => l.featured).slice(0, 6)}
          />
        </div>
      </section>

            <ServiceAreaSection
              intro="We manage residential properties in Oklahoma City, Edmond, Norman, Moore, Yukon, and surrounding communities."
            />

      {/* Closing CTA */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title text-hhp-navy">
              Looking for Property Management?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
              Contact BSM Holdings to discuss your rental property, management needs, and fees.
            </p>
            <Link
              to="/contact"
              className="btn-hero mt-8 inline-flex"
              onClick={() => {
                trackButtonClick('request_a_proposal', 'home_closing');
                trackLinkClick('Request a Proposal', '/contact');
              }}
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>

      </div>
    </Layout>
  );
};

export default Home;