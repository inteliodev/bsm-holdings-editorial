import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const InvestmentCapitalMarkets = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/investment-sales-capital-markets-hero.webp)' }}
      >
        <div className="absolute inset-0 bg-brand/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Investment & Capital Markets
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
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  We serve as both broker and advisor, providing structured guidance throughout the transaction lifecycle.
                </p>
                <p>
                  Our role is to help clients evaluate opportunities clearly, structure transactions thoughtfully, and execute with discipline — while remaining aligned with long-term ownership objectives.
                </p>
              </div>
            </div>

            {/* Service Approach Chart */}
            <div className="mb-8">
              <h2 className="section-title text-hhp-navy mb-6">
                HOW WE WORK
              </h2>
              <div className="flex justify-center">
                <img 
                  src="/images/investment-capital-markets-chart.webp" 
                  alt="How we work"
                  className="w-full max-w-5xl h-auto" loading="lazy" decoding="async" width={1289} height={369} />
              </div>
            </div>

            {/* Core Investment & Capital Markets Functions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Core Investment & Capital Markets Functions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {/* 1. Investment Sales Representation */}
                <AccordionItem value="sales" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Investment Sales Representation
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We represent owners in the disposition of commercial assets with a focus on pricing discipline, positioning, and execution.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Asset valuation and pricing strategy</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Market positioning and buyer targeting</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Marketing and exposure coordination</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Offer evaluation and negotiation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination through closing</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Acquisition Advisory */}
                <AccordionItem value="acquisition" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Acquisition Advisory
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We advise buyers on the evaluation and acquisition of commercial real estate.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Market and submarket analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Financial review and assumption validation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Risk identification and mitigation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Support through due diligence</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Transaction structuring and execution</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Owner-User Transactions */}
                <AccordionItem value="owner-user" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Owner-User Transactions
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We support owner-users acquiring or disposing of real estate with both operational and investment considerations.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Site and asset evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Financial comparison of alternatives</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Transaction structuring</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Lease and occupancy considerations</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination through closing and occupancy</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Pricing, Valuation & Underwriting */}
                <AccordionItem value="pricing" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Pricing, Valuation & Underwriting
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We provide valuation guidance grounded in realistic assumptions and market context.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Income and expense analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Comparable sales review</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Sensitivity and scenario analysis</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Consideration of leasing and operational risk</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Deal Structuring & Negotiation */}
                <AccordionItem value="structuring" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Deal Structuring & Negotiation
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We focus on structuring transactions to align risk, economics, and flexibility.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Deal structure evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Negotiation strategy</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Coordination with legal and financial advisors</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Alignment with ownership objectives</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Transaction Management & Execution */}
                <AccordionItem value="execution" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-hhp-charcoal uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Transaction Management & Execution
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We manage the transaction process from initial strategy through closing.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Timeline and process coordination</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Due diligence oversight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Communication management</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                        <span>Closing support</span>
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
            alt="Investment & Capital Markets"
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
              advisory—through an operating approach designed to manage, not just 
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
                  trackButtonClick('contact_us_cta', 'investment_capital_markets_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Approach Transactions & Who We Work With */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* How We Approach Transactions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Approach Transactions</h2>
              <div className="space-y-2 text-lg leading-relaxed text-hhp-charcoal mb-4">
                <div className="flex items-start">
                  <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                  <span>Clear underwriting assumptions</span>
                </div>
                <div className="flex items-start">
                  <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                  <span>Realistic view of income, expenses, and capital requirements</span>
                </div>
                <div className="flex items-start">
                  <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                  <span>Consideration of operational and leasing risk</span>
                </div>
                <div className="flex items-start">
                  <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                  <span>Objective analysis without pressure or forced outcomes</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-hhp-charcoal">
                We are aligned with long-term decision-making, not transaction volume.
              </p>
            </div>

            {/* Why Our Approach Matters */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Why Our Approach Matters</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal">
                Transactions that ignore operational realities often underperform after closing.
              </p>
              <p className="text-lg leading-relaxed text-hhp-charcoal mt-4">
                Our approach integrates brokerage execution with management and advisory insight, allowing clients to make informed decisions with a clear view of both risk and opportunity.
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
                <div className="space-y-3 text-hhp-charcoal">
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Private capital</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Small and mid-sized investors</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Owner-users</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Long-term holders</span>
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
                    <span>Strategy-driven, not volume-driven</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Operationally informed underwriting</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Clear communication and disciplined execution</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mt-[0.6rem] mr-3 inline-block h-px w-4 flex-shrink-0 bg-hhp-gold"></span>
                    <span>Alignment with ownership and portfolio goals</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Closing Line */}
            <div className="pt-8 border-t border-border">
              <p className="text-lg leading-relaxed text-hhp-charcoal italic">
                Sound transaction decisions are built on clear assumptions, disciplined execution, and an understanding of how assets perform over time.
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
                trackButtonClick('view_opportunities_cta', 'investment_capital_markets_careers');
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
                  trackButtonClick('visit_faq_cta', 'investment_capital_markets_faq');
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

export default InvestmentCapitalMarkets;
