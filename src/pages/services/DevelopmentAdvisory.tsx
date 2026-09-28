import Layout from '@/components/Layout/Layout';
import { ArrowRight, Building2, MapPin, Calculator, FileText, Wrench, Link as LinkIcon, CheckCircle, Target, Users, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DevelopmentAdvisory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/development-advisory-image.webp)' }}
      >
        <div className="absolute inset-0 bg-brand/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-8 drop-shadow-lg">
              Development Advisory
            </h1>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
              onClick={() => {
                trackButtonClick('discuss_development_project_cta', 'development_advisory_hero');
                trackLinkClick('Discuss a Project', '/contact');
              }}
            >
              Discuss a Project
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-hhp-navy mb-8 text-center">Our Advisory Role</h2>
            <div className="prose prose-lg mx-auto text-hhp-charcoal">
              <p className="text-lg leading-relaxed mb-6">
                Our role is to help clients evaluate risk, test assumptions, and make informed decisions before and during capital deployment.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Development projects carry layered risk — market, entitlement, financial, and execution-related.
              </p>
              <p className="text-lg leading-relaxed">
                BSM Holdings acts as an advisor and coordinator, helping clients understand feasibility, evaluate alternatives, and navigate complexity with discipline and clarity.
              </p>
              <p className="text-lg leading-relaxed mt-6 font-semibold text-hhp-navy">
                We advise and support — we do not speculate or self-develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Approach Chart */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-6">
            OUR VERTICALLY INTEGRATED APPROACH
          </h2>
          <div className="flex justify-center">
            <img 
              src="/images/development-advisory-chart.webp" 
              alt="Our Vertically Integrated Approach"
              className="w-full max-w-5xl h-auto" loading="lazy" decoding="async" width={2116} height={607} />
          </div>
        </div>
      </section>

      {/* Core Development Advisory Functions */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Core Development Advisory Functions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {/* 1. Market Feasibility Analysis */}
                <AccordionItem value="feasibility" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Market Feasibility Analysis
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We assess market conditions to determine whether proposed projects are supportable.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Market demand and absorption analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Competitive project review</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Use and positioning analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Preliminary risk assessment</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Site Evaluation & Positioning */}
                <AccordionItem value="site-evaluation" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Site Evaluation & Positioning
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We evaluate sites based on location, access, constraints, and long-term viability.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Site and location analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Access, visibility, and infrastructure considerations</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Zoning and use review</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Positioning recommendations</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Preliminary Financial Modeling */}
                <AccordionItem value="financial-modeling" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Preliminary Financial Modeling
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We support early-stage financial evaluation to test assumptions and identify sensitivities.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>High-level development modeling</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Cost and revenue assumptions</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Sensitivity and scenario analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Capital requirement evaluation</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Entitlement & Planning Coordination */}
                <AccordionItem value="entitlement" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Entitlement & Planning Coordination
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We coordinate with planning professionals and stakeholders during entitlement and pre-development phases.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination with planners, architects, and engineers</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Support during entitlement processes</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Timeline and process oversight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Risk identification during approvals</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Execution Advisory & Oversight */}
                <AccordionItem value="execution" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Execution Advisory & Oversight
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We provide advisory support during execution to help manage risk and maintain alignment.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Advisory support during construction and delivery</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination with consultants and third parties</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Issue identification and resolution support</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Alignment with leasing and operations strategy</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Integration with Leasing, Operations & Exit Strategy */}
                <AccordionItem value="integration" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Integration with Leasing, Operations & Exit Strategy
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We ensure development decisions support long-term performance and exit flexibility.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Leasing strategy alignment</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Operational readiness considerations</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Exit and hold strategy evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Integration with brokerage and advisory services</span>
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
            alt="Development Advisory"
            className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" width={480} height={316} />
        </div>
        
        {/* RIGHT: Dark overlay with text and CTA */}
        <div className="bg-gray-800 text-white flex items-center p-8 sm:p-12 lg:p-16">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              ABOUT US
            </h2>
            <p className="text-lg text-white mb-10 leading-relaxed">
              BSM Holdings delivers the full lifecycle of commercial real estate services—from 
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
                  trackButtonClick('contact_us_cta', 'development_advisory_split');
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
      <section className="bg-white section-spacing">
        <div className="container-premium">
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
                  <span>First-time developers</span>
                </div>
                <div className="flex items-start">
                  <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                  <span>Owner-users pursuing development</span>
                </div>
                <div className="flex items-start">
                  <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                  <span>Investors evaluating development risk</span>
                </div>
                <div className="flex items-start">
                  <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                  <span>Owners seeking third-party development insight</span>
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
                  <span>Advisory-only role — no speculative development</span>
                </div>
                <div className="flex items-start">
                  <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                  <span>Disciplined, assumption-driven analysis</span>
                </div>
                <div className="flex items-start">
                  <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                  <span>Integration with leasing, management, and capital markets insight</span>
                </div>
                <div className="flex items-start">
                  <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                  <span>Clear communication throughout complex processes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-surface section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-hhp-charcoal font-medium">
              Development success depends on disciplined planning, realistic assumptions, and informed execution.
            </p>
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
                trackButtonClick('view_opportunities_cta', 'development_advisory_careers');
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
                className="bg-brand text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-brand/90 transition flex-shrink-0"
                onClick={() => {
                  trackButtonClick('visit_faq_cta', 'development_advisory_faq');
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

export default DevelopmentAdvisory;
