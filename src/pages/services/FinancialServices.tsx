import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FinancialServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/financial-services-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Financial Services
            </h1>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Our Role */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Our Role</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Real estate financial performance is often obscured by fragmented reporting, incomplete assumptions, or backward-looking data.
                </p>
                <p>
                  HHP bridges the gap between operations, brokerage, and financial analysis, delivering practical insight that owners can rely on when allocating capital, evaluating risk, or planning next steps.
                </p>
                <p>
                  We do not offer banking, lending, tax preparation, or regulated investment advisory services. Our role is analytical, advisory, and execution-aware.
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
                  src="/images/financial-services-graph.webp" 
                  alt="Our Vertically Integrated Approach"
                  className="w-full max-w-5xl h-auto" loading="lazy" decoding="async" width={2114} height={626} />
              </div>
            </div>

            {/* Core Financial Services */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Core Financial Services</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {/* 1. Asset-Level Financial Analysis */}
                <AccordionItem value="asset-analysis" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Asset-Level Financial Analysis
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-3">
                      We evaluate individual assets to provide a clear picture of performance, risks, and opportunities.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-2">Includes:</p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Operating income and expense analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Cash flow evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Expense normalization and benchmarking</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Performance trend analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Identification of operational inefficiencies</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Budgeting & Forecasting */}
                <AccordionItem value="budgeting" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Budgeting & Forecasting
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-3">
                      We assist owners in building realistic budgets and forward-looking projections grounded in market conditions and operational realities.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-2">Includes:</p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Annual operating budgets</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Short- and mid-term forecasts</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Sensitivity analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Capital planning support</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Variance analysis and explanation</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Transaction Financial Support */}
                <AccordionItem value="transaction" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Transaction Financial Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-3">
                      We provide financial analysis to support acquisitions, dispositions, leasing decisions, and owner-user transactions.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-2">Includes:</p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Financial review of opportunities</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Assumption validation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Lease impact analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Hold vs. sell modeling</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Support during due diligence</span>
                      </div>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600 mt-3 italic">
                      This service is often integrated with our Investment & Capital Markets and Leasing & Representation work.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Owner & Board Reporting */}
                <AccordionItem value="reporting" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Owner & Board Reporting
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-3">
                      We help ownership groups and boards gain clarity through structured, understandable reporting.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-2">Includes:</p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Customized reporting formats</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Performance summaries for stakeholders</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Board-ready financial presentations</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Ongoing financial oversight support</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Portfolio-Level Insight */}
                <AccordionItem value="portfolio" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Portfolio-Level Insight
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-3">
                      For owners with multiple assets, we provide consolidated views to support portfolio strategy.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-2">Includes:</p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Portfolio performance reviews</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Asset comparison and prioritization</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Capital allocation insight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Long-term planning support</span>
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
            alt="Financial Services"
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
                  trackButtonClick('contact_us_cta', 'financial_services_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work & Who We Work With */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* How We Work */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Work</h2>
              <div className="space-y-2 text-lg leading-relaxed text-gray-600">
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Defined scope and objectives</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Transparent assumptions</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Clear, decision-ready outputs</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Coordination with CPAs, lenders, and legal advisors as appropriate</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 mt-4">
                Our goal is to support better decisions — not to replace existing professional advisors.
              </p>
            </div>

            {/* Who We Work With & How We Differ */}

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
                    <span>Commercial property owners</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Partnerships and ownership groups</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Boards and fiduciaries</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Owner-users with investment components</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Clients seeking clarity before major decisions</span>
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
                    <span>Real estate-focused analysis (not generic financial advice)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Integration with operations, brokerage, and advisory insight</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Clear, decision-ready outputs</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Support for better decisions without replacing existing advisors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Disclosure */}
            <div className="bg-gray-50 border-l-4 border-hhp-navy p-6 rounded">
              <h2 className="section-title text-hhp-navy mb-4">Important Disclosure</h2>
              <div className="space-y-3 text-lg leading-relaxed text-gray-600">
                <p>
                  HHP provides real estate financial analysis and advisory services only. We do not provide tax advice, legal advice, lending services, or regulated investment advisory services.
                </p>
                <p>
                  Clients should consult their independent tax, legal, and financial professionals for matters outside the scope of real estate analysis.
                </p>
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
                trackButtonClick('view_opportunities_cta', 'financial_services_careers');
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
                  trackButtonClick('visit_faq_cta', 'financial_services_faq');
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

export default FinancialServices;
