import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import PlatformSection from '@/components/PlatformSection';
import CapabilityStack from '@/components/CapabilityStack';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
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
                  src="/brand/vector/HHP_Logo_Apparel_White.svg"
                  alt="HHP Asset Management"
                  width={509}
                  height={177}
                  className="h-18 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]" loading="eager" decoding="async" fetchPriority="high" />
              </div>
              {/*
                The page previously had no <h1> at all — the logo image and this
                tagline were the whole hero, and the first heading in the document was
                the <h2> "Our approach" further down. The tagline alone also never
                said what HHP does or who for.
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
              <h1 className="normal-case font-display font-semibold text-display-lg text-white mb-7 sm:mb-8 px-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
                Vertically Integrated. Data Driven. Forward Thinking.
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

      {/* Spacer so content starts below viewport — hero stays fixed behind */}
      <div className="relative z-0 h-screen min-h-[600px] w-full" aria-hidden="true" />

      {/* Content that scrolls up over the fixed hero */}
      <div className="relative z-30">
      {/* Our Approach Section */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
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
                HHP manages the asset, not simply the building. Strategy, leasing,
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

      {/* Core Services Section */}
      <section className="bg-white pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <div className="container-premium">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            {/* Framed as capabilities beneath the asset management umbrella rather
                than as separate business lines. */}
            <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">What Asset Management Includes</h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto px-4">
              Three capabilities under one accountable firm. Each is staffed and operated by HHP, not contracted out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 -mx-4 sm:mx-0">
            <Link
              to="/services/property-management"
              className="platform-card-hover group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/property-management-picture.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('property_management', 'core_services');
                trackLinkClick('Property Management', '/services/property-management');
              }}
            >
              <div className="absolute inset-0 scrim-bottom transition-opacity duration-500 group-hover:opacity-85" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Property Management
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link
              to="/services/financial-services"
              className="platform-card-hover group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/financial-services-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('financial_services', 'core_services');
                trackLinkClick('Financial Services', '/services/financial-services');
              }}
            >
              <div className="absolute inset-0 scrim-bottom transition-opacity duration-500 group-hover:opacity-85" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Financial Services
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link
              to="/services/facility-services"
              className="platform-card-hover group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/facilities-management-hero-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('facility_services', 'core_services');
                trackLinkClick('Facility Services', '/services/facility-services');
              }}
            >
              <div className="absolute inset-0 scrim-bottom transition-opacity duration-500 group-hover:opacity-85" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Facility Services
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="bg-gray-50 pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <div className="container-premium">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">Asset Types We Serve</h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-hhp-navy max-w-3xl mx-auto px-4">
              Specialized management across housing asset classes where disciplined, data-driven operations make the biggest impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 -mx-4 sm:mx-0">
            <Link 
              to="/asset-types/multifamily" 
              className="platform-card-hover group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/multifamily-image-trendy.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('multifamily', 'asset_types');
                trackLinkClick('Multifamily', '/asset-types/multifamily');
              }}
            >
              <div className="absolute inset-0 scrim-bottom transition-opacity duration-500 group-hover:opacity-85" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Multifamily
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/hud-affordable" 
              className="platform-card-hover group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/affordable-housing-image.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('hud_affordable', 'asset_types');
                trackLinkClick('Affordable Housing', '/asset-types/hud-affordable');
              }}
            >
              <div className="absolute inset-0 scrim-bottom transition-opacity duration-500 group-hover:opacity-85" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Affordable Housing
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/senior-housing" 
              className="platform-card-hover group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/senior-housing-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('senior_housing', 'asset_types');
                trackLinkClick('Senior Housing', '/asset-types/senior-housing');
              }}
            >
              <div className="absolute inset-0 scrim-bottom transition-opacity duration-500 group-hover:opacity-85" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Senior Housing
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* The disciplines, as a stack. Sits before PlatformSection so the
          narrative runs: here is the firm, then here is the system that runs it. */}
      <CapabilityStack />

      <PlatformSection />

      <ServiceAreaSection />

      </div>
    </Layout>
  );
};

export default Home;