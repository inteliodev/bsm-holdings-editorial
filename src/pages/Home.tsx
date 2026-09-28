import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import CapabilityStack from '@/components/CapabilityStack';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { ASSET_CLASSES } from '@/data/assetTypes';
import { SERVICES } from '@/data/capabilities';
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
                Asset Management
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
                    trackButtonClick('explore_services', 'home_hero');
                    trackLinkClick('Explore Services', '/services/property-management');
                  }}
                >
                  Explore Services
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
                  to="/technology"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white/85 transition-colors duration-300 hover:text-hhp-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
                  onClick={() => {
                    trackButtonClick('explore_technology', 'home_hero');
                    trackLinkClick('Explore Technology', '/technology');
                  }}
                >
                  Explore Technology
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

          Every claim is sourced from /about (the operator-first origin, the
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
                An operator before a service provider
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl font-heading leading-snug text-hhp-navy">
                BSM Holdings is a vertically integrated real estate
                operating company in Oklahoma, working across the Tulsa and
                Oklahoma City metros.
              </p>

              <div className="mt-7 space-y-5 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  We began by managing our own portfolio, before managing anyone
                  else&apos;s. The firm is still built that way. Property
                  management, every facility trade and the accounting are
                  performed by our own personnel — the trades through BSM Holdings
                  Facility Services, LLC — and the operating and reporting
                  systems are built and maintained in house rather than licensed.
                </p>
                <p>
                  The conventional model divides management, maintenance,
                  accounting and advisory across separate firms. Each answers to
                  someone else, and the owner is left holding the coordination
                  risk and the only complete view of the asset. Holding those
                  functions ourselves is what lets one firm answer for the
                  result — and what makes cost visible at the line item rather
                  than inside a vendor invoice.
                </p>
              </div>

              <blockquote className="mt-8 border-l-2 border-hhp-gold pl-6 sm:pl-8">
                <p className="font-heading text-lg sm:text-xl leading-snug text-hhp-navy">
                  Every service operates under a single standard: treat every
                  asset as if we own it.
                </p>
              </blockquote>

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

            {/* Lead statement, then the consequence for the owner. Replaces the
                single 100-word block this used to be, which buried the argument. */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-heading leading-snug text-hhp-navy text-center mb-8 sm:mb-10">
              One firm accountable for how the asset performs.
            </p>

            <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl leading-relaxed text-hhp-charcoal">
              <p>
                BSM Holdings manages the asset, not simply the building. Strategy, leasing,
                operations, maintenance, compliance, and accounting are directed by one
                firm and reported through one system — so responsibility for performance
                sits in a single place rather than across four vendors.
              </p>
              <p>
                Decisions are made on current information. Owners see occupancy,
                collections, budget variances, and open items as they change, with
                written commentary explaining what moved and what is being done about it.
                Where performing the work ourselves improves cost or response time, we do.
              </p>
              <p className="text-hhp-navy font-medium">
                One firm. One system. One set of numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section

          All six, in the same order as the header's Services menu, mapped from
          src/data/capabilities.ts. This was three hand-written cards — Property
          Management, Financial Services and Facility Services — so the homepage
          named half the services menu and left asset management, brokerage and
          technology with no presence at all.

          Deliberately the same card grammar as the asset classes band below, so
          the two read as a pair: what we do, then what we do it to. */}
      <section className="bg-white pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <div className="container-premium">
          <div className="text-center mb-8 sm:mb-12 lg:mb-14">
            <span className="eyebrow mb-5 justify-center">Services</span>
            <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">
              What asset management includes
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto px-4">
              Six capabilities under one accountable firm. Each is staffed and
              operated by BSM Holdings, not contracted out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-5 lg:gap-6 -mx-4 sm:mx-0">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={service.href}
                className="platform-card-hover group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[420px] sm:min-h-[440px] lg:min-h-[460px] flex flex-col p-0 w-full"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                onClick={() => {
                  trackButtonClick(service.id, 'core_services');
                  trackLinkClick(service.name, service.href);
                }}
              >
                <div className="absolute inset-0 scrim-bottom transition-opacity duration-500 group-hover:opacity-85" />
                <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-5 h-full">
                  <h3 className="text-white font-semibold text-xl sm:text-2xl mb-2 text-left">
                    {service.name}
                  </h3>
                  <p className="text-white/85 text-sm leading-relaxed mb-3 text-left">
                    {service.hook}
                  </p>
                  <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base text-left">
                    <span>Explore Service</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Classes Section

          One listing of all six, mapped from src/data/assetTypes.ts. This was
          three image cards subtitled "across housing asset classes", which read
          as the whole offer — office, retail and industrial had no path from
          Home at all. It was then briefly two blocks, a management set above a
          brokerage set, which said the six classes twice on one screen.

          The two tracks now live in the intro sentence rather than in the
          structure. Keep it that way: splitting the grid puts retail and
          industrial visibly outside a set, which reads as an exclusion. They
          have full management pages behind these links like every other class.
          /asset-types is where the tracks get room to be explained. */}
      <section className="bg-surface pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <div className="container-premium">
          <div className="text-center mb-8 sm:mb-12 lg:mb-14">
            <span className="eyebrow mb-5 justify-center">Asset Classes</span>
            <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">
              The classes we work in
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto px-4">
              Our operation is built around multifamily, affordable housing, senior
              housing and office. Brokerage and advisory run across all six.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-5 lg:gap-6 -mx-4 sm:mx-0">
            {ASSET_CLASSES.map((assetClass) => (
              <Link
                key={assetClass.slug}
                to={assetClass.href}
                className="platform-card-hover group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[420px] sm:min-h-[440px] lg:min-h-[460px] flex flex-col p-0 w-full"
                style={{
                  backgroundImage: `url(${assetClass.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                onClick={() => {
                  trackButtonClick(assetClass.slug.replace(/-/g, '_'), 'asset_types');
                  trackLinkClick(assetClass.label, assetClass.href);
                }}
              >
                <div className="absolute inset-0 scrim-bottom transition-opacity duration-500 group-hover:opacity-85" />
                <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-5 h-full">
                  <h3 className="text-white font-semibold text-xl sm:text-2xl mb-2 text-left">
                    {assetClass.label}
                  </h3>
                  {/* Rendered at rest. The previous index hid this copy behind a
                      hover overlay, so it did not exist on any touch device. */}
                  <p className="text-white/85 text-sm leading-relaxed mb-3 text-left">
                    {assetClass.hook}
                  </p>
                  <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base text-left">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Centred to sit under the centred heading, now that the section is
              one grid rather than two left-aligned track blocks. */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <Link
              to="/asset-types"
              className="tap group inline-flex items-center gap-2 font-display font-semibold text-hhp-navy transition-colors hover:text-hhp-gold"
              onClick={() => {
                trackButtonClick('all_asset_types', 'asset_types');
                trackLinkClick('See all asset classes', '/asset-types');
              }}
            >
              See all asset classes
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/brokerage"
              className="tap group inline-flex items-center gap-2 font-display font-semibold text-hhp-navy transition-colors hover:text-hhp-gold"
              onClick={() => {
                trackButtonClick('brokerage', 'asset_types');
                trackLinkClick('Brokerage and advisory', '/brokerage');
              }}
            >
              Brokerage and advisory
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* The disciplines, as a stack. The six platform layers that used to sit
          below this moved to /technology as SystemStack, where they belong —
          Home now makes the firm's argument and hands off to that page. */}
      <CapabilityStack />

      <ServiceAreaSection />

      </div>
    </Layout>
  );
};

export default Home;