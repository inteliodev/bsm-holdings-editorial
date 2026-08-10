import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

const AssetTypes = () => {
  // `proofPoint` previously held six invented performance figures ("8% NOI growth
  // portfolio-wide", "Average sales per SF increased 18% post-remerchandising", etc.)
  // for asset classes HHP does not currently operate. Replaced with what we actually
  // bring to each class. Restore numbers only when they are sourced to a real property.
  const assetTypes = [
    {
      title: "Multifamily",
      proofPoint: "Occupancy, renewals, and turn time managed against a leasing plan, with unit-level cost reported line by line.",
      image: "/images/multifamily-image-trendy.jpg",
      href: "/asset-types/multifamily"
    },
    {
      title: "Affordable Housing",
      proofPoint: "Hands-on HUD Section 202 and PRAC experience, including 50059 and EIV file discipline.",
      image: "/images/affordable-housing-image.jpeg",
      href: "/asset-types/hud-affordable"
    },
    {
      title: "Office",
      proofPoint: "Building systems and operating expense managed against budget, with tenant service handled by our own Facility Services teams.",
      image: "/images/office-image.jpg",
      href: "/asset-types/office"
    },
    {
      title: "Retail",
      proofPoint: "Leasing, CAM reconciliation, and site upkeep handled by one accountable team.",
      image: "/images/retail-image.jpg",
      href: "/asset-types/retail"
    },
    {
      title: "Industrial & Logistics",
      proofPoint: "Capital planning and preventive maintenance scheduled against the asset’s life cycle, not deferred until failure.",
      image: "/images/industrial-image.webp",
      href: "/asset-types/industrial"
    },
    {
      title: "Senior Housing & Healthcare",
      proofPoint: "Hands-on Section 202 and PRAC operations, including the three senior communities on our Pryor campus.",
      image: "/images/senior-housing-image.jpg",
      href: "/asset-types/senior-housing"
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>HHP Asset Management | Asset Types We Serve</title>
        <meta 
          name="description" 
          content="How HHP approaches Multifamily, HUD & Affordable, Office, Retail, Industrial, and Senior Housing — in-house Facility Services, proprietary systems, and line-item cost visibility." 
        />
        <meta 
          name="keywords" 
          content="asset types, multifamily, office, retail, industrial, senior housing, HUD affordable housing, property management, real estate services" 
        />
        <meta property="og:title" content="HHP Asset Management | Asset Types We Serve" />
        <meta property="og:description" content="How HHP approaches Multifamily, HUD & Affordable, Office, Retail, Industrial, and Senior Housing — in-house Facility Services, proprietary systems, and line-item cost visibility." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hhpasset.com/asset-types" />
        <meta property="og:image" content="https://hhpasset.com/images/hhp-social-share.png" />
        <link rel="canonical" href="https://hhpasset.com/asset-types" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HHP Asset Management | Asset Types We Serve" />
        <meta name="twitter:description" content="Explore HHP's expertise across Multifamily, HUD & Affordable, Office, Retail, Industrial, and Senior Housing." />
        <meta name="twitter:image" content="https://hhpasset.com/images/hhp-social-share.png" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section 
          className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/asset-types-image.webp)' }}
        >
          <div className="absolute inset-0 bg-hhp-navy/60"></div>
          <div className="relative z-10 container-premium text-center px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="hero-title text-white mb-4 drop-shadow-lg">
                Asset Types
              </h1>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container-premium">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-hhp-navy mb-6 tracking-[0.06em] uppercase">
                Every Asset Class, One Integrated Platform
              </h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-8">
                HHP Asset Management operates across every major property type—from multifamily and affordable housing to office, retail, industrial, and senior living. Our integrated services, technology, and analytics deliver performance, compliance, and value no matter the asset class.
              </p>
              {/* A plain anchor, not <Link>. React Router resolves `to="#x"` to
                  `<currentPath>#x` and updates the URL without scrolling, and
                  ScrollToTop only fires on pathname change — so this button
                  moved nothing. Native fragment navigation scrolls and honours
                  the target's scroll-margin-top. */}
              <a
                href="#asset-types"
                className="btn-hero"
                onClick={() => {
                  trackButtonClick('explore_asset_types_cta', 'asset_types_intro');
                  trackLinkClick('Explore Asset Types', '#asset-types');
                }}
              >
                Explore Asset Types
              </a>
            </div>
          </div>
        </section>

        {/* Asset Types Grid */}
        <section
          id="asset-types"
          className="bg-white section-spacing scroll-mt-[calc(var(--header-h)+1.5rem)]"
        >
          <div className="container-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-8 -mx-4 sm:mx-0">
              {assetTypes.map((assetType, index) => {
                return (
                  <Link
                    key={index}
                    to={assetType.href}
                    className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
                    style={{ backgroundImage: `url(${assetType.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                    onClick={() => {
                      trackButtonClick(`asset_type_${assetType.title.toLowerCase().replace(/\s+/g, '_')}`, 'asset_types_grid');
                      trackLinkClick(assetType.title, assetType.href);
                    }}
                  >
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
                    
                    {/* Content at Bottom-Left */}
                    <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                      <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                        {assetType.title}
                      </h3>
                      <div className="flex items-center text-white font-heading font-semibold tracking-[0.06em] uppercase group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </div>
                    </div>
                    
                    {/* Proof Point on Hover */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 sm:p-6 z-20">
                      <p className="text-white text-center text-sm sm:text-base leading-relaxed">
                        <span className="font-semibold">Proof Point:</span> {assetType.proofPoint}
                      </p>
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
              Ready to Optimize Your Portfolio?
            </h2>
            <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
              Whether you're managing multifamily, office, retail, industrial, or specialized assets — our integrated platform delivers the discipline of a large shop with the accountability of a small one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
                onClick={() => {
                  trackButtonClick('consultation_cta', 'asset_types_banner');
                  trackLinkClick('Schedule Consultation', '/contact');
                }}
              >
                Schedule Consultation
                <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-flex items-center justify-center w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
                onClick={() => {
                  trackButtonClick('explore_services_cta', 'asset_types_banner');
                  trackLinkClick('Explore Our Services', '/services');
                }}
              >
                Explore Our Services
                <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AssetTypes;
