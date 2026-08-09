import { Link } from 'react-router-dom';
import { CheckCircle, Users, Zap, TrendingUp, ArrowRight, Building2, BarChart3, HeadphonesIcon, Bot, Target, DollarSign, FileText, Globe, Shield, Home as HomeIcon, ShoppingBag, Factory, Heart, Settings, MapPin, Handshake } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import PlatformSection from '@/components/PlatformSection';
import commercialImage from '@/assets/commercial-building.webp';
import heroImage from '@/assets/hero-property.jpg';

const Home = () => {
  return (
    <Layout>
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
          poster="/images/multifamily-hero.jpg"
          onLoadedMetadata={(e) => {
            e.currentTarget.play().catch(() => {});
          }}
        >
          <source src="/images/HeroHomePageHHP.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />
        {/* Hero content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container-premium text-center px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center">
                <img
                  src="/images/hhp-logo-navy-letters.png"
                  alt="HHP Asset Group"
                  className="h-18 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain drop-shadow-lg"
                />
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed sm:leading-tight text-white mb-4 sm:mb-5 px-2 -mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Vertically Integrated. Data Driven. Forward Thinking.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/services/property-management"
                  className="bg-white text-hhp-navy px-4 py-2.5 sm:px-6 sm:py-3 rounded-none font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-all duration-300 shadow-elegant min-h-[40px] sm:min-h-[48px] flex items-center justify-center text-xs sm:text-sm w-auto max-w-[240px] sm:max-w-none mx-auto sm:mx-0"
                  onClick={() => {
                    trackButtonClick('explore_services', 'home_hero');
                    trackLinkClick('Explore Services', '/services/property-management');
                  }}
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-hhp-navy px-4 py-2.5 sm:px-6 sm:py-3 rounded-none font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-all duration-300 shadow-elegant min-h-[40px] sm:min-h-[48px] flex items-center justify-center text-xs sm:text-sm w-auto max-w-[240px] sm:max-w-none mx-auto sm:mx-0"
                  onClick={() => {
                    trackButtonClick('contact_us', 'home_hero');
                    trackLinkClick('Contact Us', '/contact');
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  to="/technology"
                  className="bg-white text-hhp-navy px-4 py-2.5 sm:px-6 sm:py-3 rounded-none font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-all duration-300 shadow-elegant min-h-[40px] sm:min-h-[48px] flex items-center justify-center text-xs sm:text-sm w-auto max-w-[240px] sm:max-w-none mx-auto sm:mx-0"
                  onClick={() => {
                    trackButtonClick('explore_technology', 'home_hero');
                    trackLinkClick('Explore Technology', '/technology');
                  }}
                >
                  Explore Technology
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer so content starts below viewport — hero stays fixed behind */}
      <div className="relative z-0 h-screen min-h-[600px] w-full" aria-hidden="true" />

      {/* Content that scrolls up over the fixed hero */}
      <div className="relative z-30">
      {/* Our Approach Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-hhp-navy mb-6 text-center tracking-[0.06em] uppercase">
              Our approach
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-hhp-charcoal text-center">
              HHP is fully vertically integrated. Brokerage, asset management, property management, and every facility service trade sit under one roof—and so does the technology that runs them. We build and maintain our own asset management and operating systems rather than licensing someone else's. Because the crews and the software are both ours, we see what work actually costs, line by line, and owners see the same numbers we do in real time. Properties run leaner, residents are served faster, and decisions get made on what the numbers actually say.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-white pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <div className="container-premium">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">Core Services</h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto px-4">
              Data-driven operations across property management, facility services, and financial services — built to perform, not just report.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 -mx-4 sm:mx-0">
            <Link
              to="/services/property-management"
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[4/5] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/property-management-picture.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('property_management', 'core_services');
                trackLinkClick('Property Management', '/services/property-management');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
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
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/financial-services-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('financial_services', 'core_services');
                trackLinkClick('Financial Services', '/services/financial-services');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
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
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/facilities-management-hero-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('facility_services', 'core_services');
                trackLinkClick('Facility Services', '/services/facility-services');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
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
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/multifamily-image-trendy.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('multifamily', 'asset_types');
                trackLinkClick('Multifamily', '/asset-types/multifamily');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
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
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/affordable-housing-image.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('hud_affordable', 'asset_types');
                trackLinkClick('Affordable Housing', '/asset-types/hud-affordable');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
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
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/senior-housing-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('senior_housing', 'asset_types');
                trackLinkClick('Senior Housing', '/asset-types/senior-housing');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
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

      <PlatformSection />

      </div>
    </Layout>
  );
};

export default Home;