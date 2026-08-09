import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { ArrowRight, Building, TrendingUp, Shield, Users, Target, BarChart3 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

interface AssetTypePageProps {
  // Hero Section
  heroImage: string;
  title: string;
  tagline: string;
  
  // Market Context
  marketText: string;
  valueProposition: string;
  valuePropositionTitle?: string; // Optional: defaults to "HHP's Value Proposition"
  
  // Services Context (descriptions for each service relevant to this asset type)
  services: {
    propertyManagement: string | { description: string; services: string[] };
    advisorySiteSelection: string | { description: string; services: string[] };
    investmentSales: string | { description: string; services: string[] };
    landlordRepresentation: string | { description: string; services: string[] };
    tenantRepresentation: string | { description: string; services: string[] };
    acquisitionsDevelopment: string | { description: string; services: string[] };
  };
  servicesTitle?: string; // Optional: defaults to "Our Integrated Services for {title}"
  servicesSubtitle?: string; // Optional: defaults to "Comprehensive solutions tailored to..."
  serviceTitles?: {
    propertyManagement?: string;
    advisorySiteSelection?: string;
    investmentSales?: string;
    landlordRepresentation?: string;
    tenantRepresentation?: string;
    acquisitionsDevelopment?: string;
  }; // Optional: custom service card titles
  
  // Technology Advantages
  technologyAdvantages?: Array<{
    icon: ReactNode;
    title: string;
    description: string;
  }>;
  technologyTitle?: string; // Optional: defaults to "Data-Driven Advantage for {title}"
  technologySubtitle?: string; // Optional: defaults to "Our proprietary platforms..."
  useModernLayout?: boolean; // Optional: if true, uses list layout instead of cards
  
  // Insights
  insights: Array<{
    title: string;
    description: string;
    date: string;
  }>;
  insightsTitle?: string; // Optional: defaults to "Insights for {title}"
  insightsSubtitle?: string; // Optional: defaults to "Stay ahead with our latest..."
  
  // CTA Section
  ctaImage?: string;
  ctaTitle?: string;
  heroButtonText?: string; // Optional: defaults to "Talk to Our Experts"
  showAboutUs?: boolean; // Optional: show About Us section between services and technology
}

const AssetTypePage = ({
  heroImage,
  title,
  tagline,
  marketText,
  valueProposition,
  valuePropositionTitle,
  services,
  servicesTitle,
  servicesSubtitle,
  serviceTitles,
  technologyAdvantages,
  technologyTitle,
  technologySubtitle,
  useModernLayout,
  insights,
  insightsTitle,
  insightsSubtitle,
  ctaImage,
  ctaTitle,
  heroButtonText,
  showAboutUs
}: AssetTypePageProps) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('asset-contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hhp-navy/40"></div>
        <div className="relative z-10 container-premium text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">{title}</h1>
        </div>
      </section>

      {/* Market Context & Value Prop */}
      <section className="py-20 bg-white">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-hhp-navy">Market Context</h2>
              {marketText && (
                <p className="text-hhp-charcoal leading-relaxed">{marketText}</p>
              )}
            </div>
            <div className="border-l-4 border-hhp-accent pl-6">
              <h3 className="text-xl font-semibold text-hhp-navy mb-3">{valuePropositionTitle || "HHP's Value Proposition"}</h3>
              <p className="text-hhp-charcoal leading-relaxed">{valueProposition}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Integration */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center mb-8">
              <h2 className="section-title text-hhp-navy mb-6">
                {servicesTitle || `Our Integrated Services for ${title}`}
              </h2>
            </div>
            
            <div>
              <Accordion type="single" collapsible className="w-full">
                {/* Property Management */}
                <AccordionItem value="property-management" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.propertyManagement || "Property Management"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    {typeof services.propertyManagement === 'string' ? (
                      <p className="text-lg leading-relaxed text-gray-600">
                        {services.propertyManagement}
                      </p>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-600">
                          {services.propertyManagement.description}
                        </p>
                        <div>
                          <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                            Services include:
                          </p>
                          <div className="space-y-2 text-base leading-relaxed text-gray-600">
                            {services.propertyManagement.services.map((service, idx) => (
                              <div key={idx} className="flex items-start">
                                <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>

                {/* Advisory & Site Selection */}
                <AccordionItem value="advisory-site-selection" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.advisorySiteSelection || "Advisory & Site Selection"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    {typeof services.advisorySiteSelection === 'string' ? (
                      <p className="text-lg leading-relaxed text-gray-600">
                        {services.advisorySiteSelection}
                      </p>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-600">
                          {services.advisorySiteSelection.description}
                        </p>
                        <div>
                          <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                            Services include:
                          </p>
                          <div className="space-y-2 text-base leading-relaxed text-gray-600">
                            {services.advisorySiteSelection.services.map((service, idx) => (
                              <div key={idx} className="flex items-start">
                                <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>

                {/* Investment Sales */}
                <AccordionItem value="investment-sales" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.investmentSales || "Investment Sales"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    {typeof services.investmentSales === 'string' ? (
                      <p className="text-lg leading-relaxed text-gray-600">
                        {services.investmentSales}
                      </p>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-600">
                          {services.investmentSales.description}
                        </p>
                        <div>
                          <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                            Services include:
                          </p>
                          <div className="space-y-2 text-base leading-relaxed text-gray-600">
                            {services.investmentSales.services.map((service, idx) => (
                              <div key={idx} className="flex items-start">
                                <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>

                {/* Landlord Representation */}
                <AccordionItem value="landlord-representation" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.landlordRepresentation || "Landlord Representation"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    {typeof services.landlordRepresentation === 'string' ? (
                      <p className="text-lg leading-relaxed text-gray-600">
                        {services.landlordRepresentation}
                      </p>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-600">
                          {services.landlordRepresentation.description}
                        </p>
                        <div>
                          <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                            Services include:
                          </p>
                          <div className="space-y-2 text-base leading-relaxed text-gray-600">
                            {services.landlordRepresentation.services.map((service, idx) => (
                              <div key={idx} className="flex items-start">
                                <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>

                {/* Tenant Representation */}
                <AccordionItem value="tenant-representation" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.tenantRepresentation || "Tenant Representation"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    {typeof services.tenantRepresentation === 'string' ? (
                      <p className="text-lg leading-relaxed text-gray-600">
                        {services.tenantRepresentation}
                      </p>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-600">
                          {services.tenantRepresentation.description}
                        </p>
                        <div>
                          <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                            Services include:
                          </p>
                          <div className="space-y-2 text-base leading-relaxed text-gray-600">
                            {services.tenantRepresentation.services.map((service, idx) => (
                              <div key={idx} className="flex items-start">
                                <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>

                {/* Acquisitions & Development */}
                <AccordionItem value="acquisitions-development" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.acquisitionsDevelopment || "Acquisitions & Development"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    {typeof services.acquisitionsDevelopment === 'string' ? (
                      <p className="text-lg leading-relaxed text-gray-600">
                        {services.acquisitionsDevelopment}
                      </p>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-600">
                          {services.acquisitionsDevelopment.description}
                        </p>
                        <div>
                          <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                            Services include:
                          </p>
                          <div className="space-y-2 text-base leading-relaxed text-gray-600">
                            {services.acquisitionsDevelopment.services.map((service, idx) => (
                              <div key={idx} className="flex items-start">
                                <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      {showAboutUs && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[500px] md:min-h-[600px]">
          {/* LEFT: Large property/building image */}
          <div className="relative h-[400px] md:h-auto">
            <img 
              src="/images/about-us-image.jpg" 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* RIGHT: Dark overlay with text and CTA */}
          <div className="bg-gray-800 text-white flex items-center p-8 sm:p-12 lg:p-16">
            <div className="max-w-lg">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                ABOUT US
              </h2>
              <p className="text-lg text-white mb-10 leading-relaxed">
                HHP delivers the full lifecycle of commercial real estate services—from 
                acquisitions and development to management, leasing, sales, and strategic 
                advisory—through a vertically integrated platform designed to operate, not just 
                advise. Proprietary technology supports disciplined underwriting, consistent 
                execution, and long-term asset alignment across every engagement.
              </p>
              <div className="pt-8 border-t border-gray-500">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 tracking-widest text-white">
                  DISCOVER<br/>WHAT WE DO
                </h3>
                <Link 
                  to="/contact" 
                  className="inline-block bg-white text-gray-800 px-8 py-4 rounded font-heading font-semibold tracking-[0.06em] uppercase hover:bg-gray-100 transition"
                  onClick={() => {
                    trackButtonClick('contact_us_cta', `${title.toLowerCase().replace(/\s+/g, '_')}_split`);
                    trackLinkClick('Contact Us', '/contact');
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technology & Data Advantage / HHP Advantage */}
      {technologyAdvantages && technologyAdvantages.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-hhp-navy mb-6">
                {technologyTitle || `Data-Driven Advantage for ${title}`}
              </h2>
            </div>
            
            {useModernLayout ? (
              <div className="max-w-4xl mx-auto space-y-8">
                {technologyAdvantages.map((advantage, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-hhp-navy">
                    <h3 className="text-2xl font-heading font-bold text-hhp-navy mb-4 uppercase tracking-wide">
                      {advantage.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {technologyAdvantages.map((advantage, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mx-auto mb-6">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-hhp-navy mb-4">{advantage.title}</h3>
                    <p className="text-hhp-charcoal leading-relaxed">{advantage.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Insights & Thought Leadership */}
      <section className="py-20 bg-white">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hhp-navy mb-6">
              {insightsTitle || `Insights for ${title}`}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Link 
                key={index}
                to="/insights"
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-hhp-navy text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                  {insight.date}
                </div>
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">{insight.title}</h3>
                <p className="text-hhp-charcoal leading-relaxed mb-4">{insight.description}</p>
                <span className="text-hhp-navy font-medium">Read More →</span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/insights"
              className="bg-hhp-navy text-white px-8 py-4 rounded-2xl font-heading font-semibold tracking-[0.06em] uppercase text-lg hover:bg-hhp-navy/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore All Insights
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      {ctaImage && ctaTitle && (
        <section 
          id="asset-contact"
          className="relative py-20 flex items-center justify-center"
          style={{ backgroundImage: `url(${ctaImage})` }}
        >
          <div className="absolute inset-0 bg-hhp-navy/50"></div>
          <div className="relative z-10 container-premium text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{ctaTitle}</h2>
            <Link 
              to="/contact"
              className="bg-white text-hhp-navy px-8 py-4 rounded-2xl font-heading font-semibold tracking-[0.06em] uppercase text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            >
              Schedule a Consultation
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default AssetTypePage;
