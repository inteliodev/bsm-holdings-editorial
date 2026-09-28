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
              {/*
                The brand line is the <h1>. It was previously set in the body
                font at a maximum of 30px, which left the largest thing in the
                hero as an image and gave the page no typographic voice at all.
              */}
              {/* Two lines, and "Data Driven." dropped — three sentences wrapped
                  unpredictably across breakpoints and diluted the claim. */}
              <h1 className="normal-case font-display font-semibold text-display-lg text-white mb-7 sm:mb-8 px-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
                Vertically Integrated.
                <br />
                Forward Thinking.
              </h1>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
                <Link
                  to="/services/property-management"
                  className="inline-flex min-h-[52px] w-auto items-center justify-center rounded-none bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy shadow-elegant transition-all duration-300 hover:bg-hhp-gold hover:text-hhp-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hhp-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                  onClick={() => {
                    trackButtonClick('explore_property_management', 'home_hero');
                    trackLinkClick('Property Management', '/services/property-management');
                  }}
                >
                  Property Management
                </Link>
                {/*
                  Secondary treatment. All three CTAs were previously identical solid
                  white buttons, so nothing indicated a primary action. "Explore
                  Services" above stays solid; these two are outlined.
                */}
                <Link
                  to="/contact"
                  className="inline-flex min-h-[52px] w-auto items-center justify-center rounded-none border border-white/70 px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-hhp-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                  onClick={() => {
                    trackButtonClick('contact_us', 'home_hero');
                    trackLinkClick('Contact Us', '/contact');
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  to="/portfolio"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white/85 transition-colors duration-300 hover:text-hhp-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                  onClick={() => {
                    trackButtonClick('browse_properties', 'home_hero');
                    trackLinkClick('Browse Properties', '/portfolio');
                  }}
                >
                  Browse Properties
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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

      {/* Who We Are Section

          The first thing after the hero. Home previously opened straight into
          "Our approach" — how the firm operates — without ever saying what the
          firm is, so a visitor met the argument before the subject.

          This is identity; the section below is method. Keep them distinct: what
          we are and where we came from here, how we run an asset there.

          Every claim is sourced from /about (what is held in house, the
          fragmented-model problem, the fiduciary standard) or from
          src/data/serviceArea.ts. Do not add figures here without a real source —
          firm-level statistics are exactly what this site has had to strip out
          before. */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="container-premium">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-5">Who We Are</span>
              <h2 className="section-title text-hhp-navy">
                Operations, trades, and accounting under one roof
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  BSM Holdings is a real estate operating company in the Oklahoma
                  City metro. Property management, facility trades, and accounting
                  stay in-house — trades through BSM Holdings Facility Services,
                  LLC — with systems we build and maintain ourselves.
                </p>
                <p>
                  That keeps cost visible at the line item and gives owners a
                  single team for the full operating result.
                </p>
              </div>

              <Link
                to="/about"
                className="tap group mt-8 inline-flex items-center gap-2 font-display font-semibold text-hhp-navy transition-colors hover:text-hhp-gold"
                onClick={() => {
                  trackButtonClick('about_hhp', 'who_we_are');
                  trackLinkClick('More about the firm', '/about');
                }}
              >
                More about the firm
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section — grounds alternate from here down:
          white (who we are) → surface → white (services) → surface (classes). */}
      <section className="bg-surface py-14 sm:py-20 lg:py-24">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-hhp-navy mb-8 sm:mb-10 text-center">
              Our approach
            </h2>

            {/* Lead statement, then the consequence for the owner. */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-heading leading-snug text-hhp-navy text-center mb-8 sm:mb-10">
              Strategy through accounting under one reporting system
            </p>

            <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl leading-relaxed text-hhp-charcoal">
              <p>
                Strategy, leasing, operations, maintenance, compliance, and
                accounting sit under one firm and one reporting system. Owners see
                occupancy, collections, budget variances, and open items as they
                change, with clear notes on what moved and what&apos;s next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Management focus — single section, not a multi-service menu */}
      <section className="bg-white pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <div className="container-premium">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-5">Property Management</span>
              <h2 className="section-title text-hhp-navy mb-5">
                Residential property management across Oklahoma
              </h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                Day-to-day operations, leasing, maintenance coordination, and owner
                reporting. One accountable team for the homes we manage.
              </p>
              <p className="text-base leading-relaxed text-hhp-charcoal/80 mb-8">
                Single-family, duplexes, triplexes, townhomes, and apartments across
                the Oklahoma City metro and surrounding communities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/services/property-management"
                  className="btn-hero"
                  onClick={() => {
                    trackButtonClick('pm_focus_cta', 'home_pm');
                    trackLinkClick('How we manage', '/services/property-management');
                  }}
                >
                  How we manage
                </Link>
                <Link
                  to="/portfolio"
                  className="btn-secondary"
                  onClick={() => {
                    trackButtonClick('pm_focus_properties', 'home_pm');
                    trackLinkClick('View properties', '/portfolio');
                  }}
                >
                  View properties
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden border border-border bg-surface">
                <img
                  src="/images/property-management-picture.webp"
                  alt="BSM Holdings property management"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured listings — same card layout as Properties */}
      <section className="bg-surface pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16">
        <div className="container-premium">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow mb-4">Featured</span>
              <h2 className="section-title text-hhp-navy">Available and featured homes</h2>
            </div>
            <Link
              to="/portfolio"
              className="tap group inline-flex items-center gap-2 font-display font-semibold text-hhp-navy transition-colors hover:text-hhp-gold"
              onClick={() => {
                trackButtonClick('home_all_properties', 'home_featured');
                trackLinkClick('All properties', '/portfolio');
              }}
            >
              All properties
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <PropertyCarousel
            listings={listings.filter((l) => l.featured).slice(0, 6)}
          />
        </div>
      </section>

            <ServiceAreaSection />

      </div>
    </Layout>
  );
};

export default Home;