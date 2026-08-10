import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PropertyManagement = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/property-management-picture.webp)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Property Management
            </h1>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="container-premium">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Our Management Philosophy */}
            <div>
              <h2 className="section-title text-hhp-navy mb-4">Our Management Philosophy</h2>
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  Effective property management is not about volume or speed. It is about consistency, accountability, and disciplined execution over time.
                </p>
                <p>
                  We manage assets with an owner's mindset — balancing tenant needs, expense control, capital preservation, and risk management. Daily decisions are evaluated based on their long-term impact on asset performance.
                </p>
              </div>
            </div>

            {/* Service Approach Chart */}
            <div className="mb-6">
              <h2 className="section-title text-hhp-navy mb-4">
                OUR VERTICALLY INTEGRATED APPROACH
              </h2>
              <div className="flex justify-center">
                <img 
                  src="/images/property-management-chart.webp" 
                  alt="Our Vertically Integrated Approach"
                  className="w-full max-w-5xl h-auto" loading="lazy" decoding="async" width={2118} height={614} />
              </div>
            </div>

            {/* Core Management Functions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-4">Core Management Functions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {/* 1. Financial Oversight & Reporting */}
                <AccordionItem value="financial" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Financial Oversight & Reporting
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We maintain tight financial controls to provide transparency, predictability, and decision-ready information.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Rent collection and receivables monitoring</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Monthly owner financial reporting</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Budget preparation and variance analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Expense review and cost control</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination with ownership accounting and tax advisors</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Physical Asset Management */}
                <AccordionItem value="asset" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Physical Asset Management
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We focus on proactive maintenance and disciplined oversight to preserve asset condition and control long-term costs.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Preventative maintenance planning</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Vendor sourcing, bidding, and oversight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Capital improvement coordination</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Emergency response protocols</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Regular site inspections and condition monitoring</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Lease Administration */}
                <AccordionItem value="lease" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Lease Administration
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We manage leases as legal and financial instruments, not just documents.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Lease abstraction and administration</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Critical date tracking</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Rent escalations and reconciliations</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Enforcement of lease terms</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination with legal and brokerage teams</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Tenant Relations & Issue Resolution */}
                <AccordionItem value="tenant" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Tenant Relations & Issue Resolution
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We prioritize professional, consistent tenant communication to support stability and reduce friction.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Tenant communication and issue resolution</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination of service requests</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Lease compliance monitoring</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Support for renewals and extensions</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Risk Management & Compliance */}
                <AccordionItem value="risk" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Risk Management & Compliance
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We identify and mitigate operational and regulatory risk before issues escalate.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Insurance coordination and compliance tracking</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Safety and risk assessments</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Regulatory and lease compliance oversight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Documentation and audit support</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Strategic Planning & Ownership Support */}
                <AccordionItem value="strategic" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Strategic Planning & Ownership Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We support ownership with forward-looking insight beyond day-to-day operations.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Operating and capital planning support</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Performance trend analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Hold / sell / reposition input</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination with advisory and brokerage services</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Optional Closing Line */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-lg leading-relaxed text-hhp-charcoal italic">
                  Our management platform is designed to support stable operations today while preserving flexibility and value for future ownership decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[500px] md:min-h-[600px]">
        {/* LEFT: Large property/building image */}
        <div className="relative h-[400px] md:h-auto">
          <img 
            src="/images/about-us-image.jpg" 
            alt="Property Management"
            className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" width={480} height={316} />
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
                  trackButtonClick('contact_us_cta', 'property_management_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With & How We Differ */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="container-premium">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Who We Work With */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <h2 className="section-title text-hhp-navy">Who We Work With</h2>
                </div>
                <div className="space-y-3 text-hhp-charcoal">
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Private owners</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Partnerships and boards</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Owner-users with investment components</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Assets requiring hands-on oversight</span>
                  </div>
                </div>
              </div>

              {/* How We Differ */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <h2 className="section-title text-hhp-navy">How We Differ</h2>
                </div>
                <div className="space-y-3 text-hhp-charcoal">
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Selective portfolio size</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Direct accountability</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>No call-center model</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Integrated brokerage and advisory insight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative min-h-[300px] sm:min-h-[350px] flex items-center bg-cover bg-center bg-no-repeat">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/consulting-image.webp)' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container-premium w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">
              INTERESTED IN WORKING<br/>FOR OUR TEAM?
            </h2>
            <Link 
              to="/opportunities" 
              className="bg-white text-hhp-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-all duration-300 flex-shrink-0"
              onClick={() => {
                trackButtonClick('view_opportunities_cta', 'property_management_careers');
                trackLinkClick('View Opportunities', '/opportunities');
              }}
            >
              View Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="bg-white py-8 sm:py-12">
        <div className="container-premium">
          <div className="border border-gray-300 rounded-lg my-4 sm:my-6 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-hhp-navy">
                HAVE MORE QUESTIONS?
              </h3>
              <Link 
                to="/faq" 
                className="bg-hhp-navy text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-hhp-navy/90 transition flex-shrink-0"
                onClick={() => {
                  trackButtonClick('visit_faq_cta', 'property_management_faq');
                  trackLinkClick('Visit our FAQ page', '/faq');
                }}
              >
                Visit our FAQ page
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default PropertyManagement;
