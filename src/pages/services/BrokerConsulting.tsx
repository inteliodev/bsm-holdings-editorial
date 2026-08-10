import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BrokerConsulting = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/broker-record-hero.webp)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Consulting & Strategic Advisory
            </h1>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Consulting Services */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Consulting Services</h2>
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                HHP provides consulting services for owners, boards, and stakeholders facing operational, governance, or transition-related challenges.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                Our consulting engagements are targeted, defined in scope, and designed to deliver clarity in complex situations.
              </p>

              <Accordion type="single" collapsible className="w-full mb-8">
                {/* 1. Management Transitions */}
                <AccordionItem value="transitions" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Management Transitions
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We support ownership and boards during management changes and organizational transitions.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Transition planning and oversight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Interim operational support</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Risk identification and mitigation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Stakeholder coordination</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Operational & Financial Reviews */}
                <AccordionItem value="reviews" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Operational & Financial Reviews
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We provide independent reviews to assess performance and identify improvement opportunities.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Operational assessments</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Financial performance review</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Process and structure evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Objective findings and recommendations</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Board & Ownership Advisory */}
                <AccordionItem value="board" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Board & Ownership Advisory
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We support boards and ownership groups requiring independent perspective.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Board-ready analysis and reporting</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Third-party validation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Strategic input for high-impact decisions</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Special Situations & Interim Support */}
                <AccordionItem value="special" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Special Situations & Interim Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We provide targeted support during complex or time-sensitive situations.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Special projects</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Interim leadership or advisory support</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Short-term, high-impact engagements</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Engagement Style</h3>
                  <div className="space-y-2 text-lg leading-relaxed text-gray-600">
                    <div className="flex items-start">
                      <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span>Defined scope and objectives</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span>Clear deliverables</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span>Independent, objective perspective</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span>Professional discretion and accountability</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Who Consulting Services Are For</h3>
                  <div className="space-y-2 text-lg leading-relaxed text-gray-600">
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
            alt="Consulting & Strategic Advisory"
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
                  trackButtonClick('contact_us_cta', 'broker_consulting_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Content Continued */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Broker of Record Services */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Broker of Record Services</h2>
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                HHP provides Broker of Record services in Oklahoma for independent commercial brokerages and teams seeking licensed supervision, compliance oversight, and operational support.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                Our role is to provide regulatory coverage and professional governance while allowing firms to maintain autonomy and focus on their core business.
              </p>

              <Accordion type="single" collapsible className="w-full mb-8">
                {/* 1. Broker Supervision & Oversight */}
                <AccordionItem value="supervision" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Broker Supervision & Oversight
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We provide licensed supervision consistent with state requirements and industry best practices.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Ongoing broker supervision</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Associate oversight and guidance</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Transaction review protocols</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Regulatory compliance monitoring</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Transaction Review & Risk Management */}
                <AccordionItem value="transaction" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Transaction Review & Risk Management
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We review transactions to ensure compliance, documentation integrity, and risk mitigation.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Contract and transaction review</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Compliance verification</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Risk identification and issue escalation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Guidance on complex or non-standard transactions</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. License & Regulatory Compliance Support */}
                <AccordionItem value="license" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    License & Regulatory Compliance Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We support brokerages in maintaining licensing and regulatory standing.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>License compliance oversight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Regulatory guidance and interpretation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Support during audits or inquiries</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Ongoing compliance monitoring</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Policy & Procedure Frameworks */}
                <AccordionItem value="policy" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Policy & Procedure Frameworks
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We help establish clear, defensible operational frameworks.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Brokerage policies and procedures</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Compliance documentation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Governance structure support</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Ongoing refinement as regulations evolve</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Strategic Support for Brokerage Operations */}
                <AccordionItem value="strategic" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Strategic Support for Brokerage Operations
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-4">
                      We provide perspective informed by real brokerage operations.
                    </p>
                    <div className="space-y-2 text-base leading-relaxed text-gray-600">
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Support during platform transitions</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Guidance on operational structure</span>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>Advisory input as needed</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Who Broker of Record Services Are For</h3>
                  <div className="space-y-2 text-lg leading-relaxed text-gray-600">
                    <div className="flex items-start">
                      <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span>Independent commercial brokerages</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span>Specialty firms and niche practices</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span>Teams exiting national platforms</span>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                      <span>Brokerages seeking continuity and long-term stability</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Why HHP for Broker of Record Services</h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    We understand brokerage operations from the inside. Our approach provides oversight without micromanagement, allowing firms to operate efficiently while remaining compliant and protected.
                  </p>
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
                    <span>Independent commercial brokerages</span>
                  </div>
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
                    <span>Brokerages seeking continuity and long-term stability</span>
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
                    <span>Regulatory-first mindset</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Disciplined, non-intrusive oversight</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Integration with brokerage, advisory, and financial insight</span>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-4 h-px bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>Focus on stability, continuity, and long-term outcomes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Closing Line */}
            <div className="bg-gray-50 border-l-4 border-hhp-navy p-6 rounded">
              <p className="text-lg leading-relaxed text-gray-600 italic">
                Effective governance and advisory support require clarity, discipline, and experienced perspective — particularly during periods of change.
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
                trackButtonClick('view_opportunities_cta', 'broker_consulting_careers');
                trackLinkClick('View Opportunities', '/opportunities');
              }}
            >
              View Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-premium text-center">
          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-2 bg-hhp-navy text-white px-8 py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-hhp-navy/90 transition-all duration-200 shadow-lg w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            onClick={() => {
              trackButtonClick('explore_services_consulting', 'broker_consulting_cta');
              trackLinkClick('Explore Services or Request Consulting Support', '/contact');
            }}
          >
            Explore Services or Request Consulting Support
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BrokerConsulting;
