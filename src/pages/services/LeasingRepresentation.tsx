import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const LeasingRepresentation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/leasing-representation-image.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Leasing & Representation
            </h1>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Our Leasing Philosophy */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Our Leasing Philosophy</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Leasing is not a marketing exercise. It is a capital decision.
                </p>
                <p>
                  We approach leasing with an owner's mindset, evaluating how tenant mix, lease structure, concessions, and flexibility impact cash flow, operations, and future exit options. Every recommendation is made with an understanding of how the asset will be managed after execution.
                </p>
              </div>
            </div>

            {/* Service Approach Chart */}
            <div className="mb-8">
              <h2 className="section-title text-hhp-navy mb-6">
                OUR VERTICALLY INTEGRATED APPROACH
              </h2>
              <div className="flex justify-center">
                <img 
                  src="/images/leasing-chart.webp" 
                  alt="Our Vertically Integrated Approach"
                  className="w-full max-w-5xl h-auto" loading="lazy" decoding="async" width={2118} height={623} />
              </div>
            </div>

            {/* Core Leasing & Representation Functions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Core Leasing & Representation Functions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {/* 1. Market & Asset Positioning */}
                <AccordionItem value="market" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Market & Asset Positioning
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We begin with a clear understanding of the asset's position within its competitive set.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Market and submarket analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Competitive property review</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Rent positioning and pricing strategy</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Concession and incentive evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Assessment of tenant demand and absorption</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Landlord Representation */}
                <AccordionItem value="landlord" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Landlord Representation
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We represent owners in the leasing of commercial space with a focus on protecting asset value and supporting long-term performance.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-3">Landlord representation services include:</p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Leasing strategy development</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Marketing coordination and exposure</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Tenant qualification and underwriting</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Lease negotiation and structuring</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination through execution and delivery</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Tenant Representation */}
                <AccordionItem value="tenant" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Tenant Representation
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We advise tenants on site selection and lease negotiation with an emphasis on operational fit, cost structure, and long-term flexibility.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-3">Tenant representation services include:</p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Needs assessment and market evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Site selection and tour coordination</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Financial comparison of alternatives</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Lease term negotiation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination through occupancy</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Lease Structuring & Risk Mitigation */}
                <AccordionItem value="lease" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Lease Structuring & Risk Mitigation
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We focus on the details that materially impact long-term outcomes.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Lease term and renewal structure</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Expense recovery and escalation analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Responsibility allocation and risk exposure</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Flexibility and exit considerations</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Alignment with ownership objectives</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Execution & Coordination */}
                <AccordionItem value="execution" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Execution & Coordination
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We manage the leasing process through execution to ensure consistency and accountability.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination with ownership and management</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Interface with legal counsel as needed</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Timeline management</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Documentation oversight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Transition support through occupancy</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Integration with Management & Advisory */}
                <AccordionItem value="integration" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Integration with Management & Advisory
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      Our leasing work is informed by real operational experience.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Alignment with property management strategy</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Consideration of maintenance and operational impact</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Integration with asset-level financial analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Support for broader ownership and portfolio goals</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
            alt="Leasing & Representation"
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
                  trackButtonClick('contact_us_cta', 'leasing_representation_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Approach Matters & Who We Work With */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Why Our Approach Matters */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Why Our Approach Matters</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Poorly structured leases often create hidden costs, operational friction, and long-term constraints.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mt-4">
                Our leasing work is informed by management, advisory, and financial insight — not just deal-making — allowing us to deliver outcomes that support both near-term stability and long-term value.
              </p>
            </div>

            {/* Who We Work With & How We Differ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Who We Work With */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <h2 className="section-title text-hhp-navy">Who We Work With</h2>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Commercial property owners</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Partnerships and ownership groups</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Owner-users</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Tenants seeking strategic representation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Assets requiring thoughtful stabilization</span>
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
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Strategy-first leasing approach</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Focus on lease quality, not just occupancy</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Integration with management and advisory services</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Clear communication and disciplined execution</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Closing Line */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-lg leading-relaxed text-gray-600 italic">
                Leasing decisions should support the asset long after the ink dries. Our approach is designed to do exactly that.
              </p>
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
                trackButtonClick('view_opportunities_cta', 'leasing_representation_careers');
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
                  trackButtonClick('visit_faq_cta', 'leasing_representation_faq');
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

export default LeasingRepresentation;
