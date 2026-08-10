import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const AdvisorySiteSelection = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/advisory-site-selection-image.webp)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Advisory & Site Selection
            </h1>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Our Advisory Role */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Our Advisory Role</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Real estate decisions often involve competing objectives, incomplete information, and meaningful capital commitments.
                </p>
                <p>
                  HHP serves as an independent advisor, helping clients frame decisions clearly, evaluate options objectively, and understand the operational and financial implications before capital is committed.
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
                  src="/images/site-selection-chart.webp" 
                  alt="Our Vertically Integrated Approach"
                  className="w-full max-w-5xl h-auto" loading="lazy" decoding="async" width={2141} height={646} />
              </div>
            </div>

            {/* Core Advisory & Site Selection Functions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Core Advisory & Site Selection Functions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {/* 1. Site Selection & Relocation Analysis */}
                <AccordionItem value="site-selection" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Site Selection & Relocation Analysis
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We assist tenants, owner-users, and organizations in evaluating location options based on operational, financial, and strategic considerations.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Needs assessment and criteria development</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Market and submarket evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Comparative site analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Financial impact assessment</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Support through selection and execution</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Market & Feasibility Studies */}
                <AccordionItem value="feasibility" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Market & Feasibility Studies
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We evaluate market conditions and project feasibility to support informed decision-making.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Market demand and supply analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Competitive landscape evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Use and positioning analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Preliminary financial feasibility</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Risk identification and mitigation</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Portfolio Review & Optimization */}
                <AccordionItem value="portfolio" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Portfolio Review & Optimization
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We work with owners to assess portfolio performance and identify opportunities for improvement.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Asset-level performance review</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Portfolio-wide analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Capital allocation insight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Identification of underperforming assets</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Strategic prioritization</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Hold vs. Sell Evaluations */}
                <AccordionItem value="hold-sell" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Hold vs. Sell Evaluations
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We provide structured analysis to support ownership decisions around disposition timing.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Performance trend analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Market timing considerations</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Operational and leasing risk assessment</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Scenario modeling</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Objective recommendation support</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Strategic Planning Support */}
                <AccordionItem value="strategic" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Strategic Planning Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We support owners and boards with structured planning around real estate strategy.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Long-term real estate planning</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Alignment with business objectives</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Capital planning considerations</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Integration with brokerage and management insight</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Third-Party Validation & Board Support */}
                <AccordionItem value="validation" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Third-Party Validation & Board Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We provide independent analysis to support governance and stakeholder decision-making.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Board-ready presentations</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Third-party review and validation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Independent perspective for complex decisions</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Support during critical review processes</span>
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
            alt="Advisory & Site Selection"
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
                  trackButtonClick('contact_us_cta', 'advisory_site_selection_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When Clients Engage Us & Who We Work With */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* When Clients Engage Us */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">When Clients Engage Us</h2>
              <div className="space-y-2 text-lg leading-relaxed text-gray-600">
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Prior to committing capital</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>During portfolio transitions</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>When internal consensus is unclear</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>When third-party validation is required</span>
                </div>
              </div>
            </div>

            {/* Value We Bring */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Value We Bring</h2>
              <div className="space-y-2 text-lg leading-relaxed text-gray-600">
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Objective, independent analysis</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Market-grounded assumptions</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Awareness of execution and operational realities</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Clear, disciplined communication</span>
                </div>
              </div>
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
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Owners navigating operational or organizational transitions</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Boards seeking independent, third-party perspective</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Stakeholders managing complex operational challenges</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Firms requiring specialized interim support</span>
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
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Advisory-first mindset</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>No transactional pressure</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Integration with brokerage, management, and financial insight</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Focus on clarity and decision quality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Closing Line */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-lg leading-relaxed text-gray-600 italic">
                High-impact real estate decisions benefit from independent perspective, disciplined analysis, and clear communication.
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
                trackButtonClick('view_opportunities_cta', 'advisory_site_selection_careers');
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
                  trackButtonClick('visit_faq_cta', 'advisory_site_selection_faq');
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

export default AdvisorySiteSelection;
