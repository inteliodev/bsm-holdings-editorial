import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const Services = () => {
  const services = [
    {
      title: "Property Management",
      image: "/images/property-management-picture.webp",
      href: "/services/property-management"
    },
    {
      title: "Leasing & Representation",
      image: "/images/leasing-representation-image.jpg",
      href: "/services/leasing-representation"
    },
    {
      title: "Investment & Capital Markets",
      image: "/images/investment-sales-capital-markets-hero.webp",
      href: "/services/investment-capital-markets"
    },
    {
      title: "Advisory & Site Selection",
      image: "/images/advisory-site-selection-image.webp",
      href: "/services/advisory-site-selection"
    },
    {
      title: "Development Advisory",
      image: "/images/development-advisory-image.webp",
      href: "/services/development-advisory"
    },
    {
      title: "Consulting & Strategic Advisory",
      image: "/images/broker-record-hero.webp",
      href: "/services/broker-consulting"
    },
    {
      title: "Financial Services",
      image: "/images/financial-services-hero.jpg",
      href: "/services/financial-services"
    },
    {
      title: "Facility Services",
      image: "/images/facilities-management-hero-image.jpg",
      href: "/services/facility-services"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/asset-management-image.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Services
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-hhp-navy mb-6 tracking-[0.06em] uppercase">
              Comprehensive Real Estate Services, Reimagined
            </h2>
            <p className="text-xl leading-relaxed text-gray-600">
              HHP delivers the full lifecycle of commercial real estate services — from acquisitions and development to management, leasing, sales, and strategic advisory — all under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Vertically Integrated Approach Image */}
      <section className="bg-white py-8 sm:py-12">
        <div className="container-premium">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-center mb-8 sm:mb-12 text-hhp-navy tracking-[0.06em] uppercase">
            OUR VERTICALLY INTEGRATED APPROACH
          </h2>
          <div className="w-full">
            <img 
              src="/images/vertically-integrated-approach-chart.webp" 
              alt="Our Vertically Integrated Approach" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Core Services Heading */}
      <section className="bg-white py-12 sm:py-16 text-center">
        <div className="container-premium">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-hhp-navy tracking-[0.06em] uppercase">
            CORE SERVICES
          </h2>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-8 -mx-4 sm:mx-0">
            {services.map((service, index) => {
              return (
                <Link
                  key={index}
                  to={service.href}
                  className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
                  style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                  onClick={() => {
                    trackButtonClick(`service_${service.title.toLowerCase().replace(/\s+/g, '_')}`, 'services_grid');
                    trackLinkClick(service.title, service.href);
                  }}
                >
                  {/* Background Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
                  
                  {/* Content at Bottom-Left */}
                  <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                    <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-white font-heading font-semibold tracking-[0.06em] uppercase group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Experience the Future of Real Estate?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Whether you're looking to acquire, develop, manage, or sell — our comprehensive services and proprietary data platforms deliver institutional-grade results with boutique-level service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
              onClick={() => {
                trackButtonClick('consultation_cta', 'services_banner');
                trackLinkClick('Schedule Consultation', '/contact');
              }}
            >
              Schedule Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link 
              to="/technology" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-flex items-center justify-center w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
              onClick={() => {
                trackButtonClick('explore_platforms_cta', 'services_banner');
                trackLinkClick('Explore Our Platforms', '/technology');
              }}
            >
              Explore Our Platforms
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;