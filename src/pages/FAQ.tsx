import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

/**
 * This page hand-rolled its own accordion — open/closed state, a literal "+"
 * glyph rotated 45deg, and a `max-h-[1000px] -> max-h-0` height transition.
 * That hack animates to a fixed cap regardless of content, so short answers
 * pause before opening and anything taller than 1000px is clipped. The site
 * already ships a tested Radix accordion which Technology uses correctly, so
 * the same component now behaves the same way on both pages.
 */
const FAQ = () => {

  const faqItems = [
    {
      question: "What types of properties does HHP specialize in?",
      answer: "HHP provides comprehensive real estate services across commercial property types, including multifamily, senior housing, retail, industrial, office, and HUD/affordable housing. Our vertically integrated approach allows us to serve owners across asset classes with consistent operational discipline and strategic insight."
    },
    {
      question: "How do I request a proposal?",
      answer: "You can request a proposal by contacting us through our contact page or by reaching out directly to our team. We'll schedule an initial consultation to understand your property needs, portfolio objectives, and operational requirements. Following our assessment, we'll provide a detailed proposal outlining our services, approach, and fee structure tailored to your specific situation."
    },
    {
      question: "How do I get started with HHP?",
      answer: "Getting started with HHP begins with an initial consultation where we discuss your property portfolio, ownership objectives, and operational needs. We'll conduct a property assessment, review your current operations, and develop a tailored service plan. Our onboarding process includes transition planning, system integration, and team alignment to ensure a smooth handoff and immediate operational continuity."
    },
    {
      question: "Do you handle regulatory and compliance requirements?",
      answer: "Yes, regulatory and compliance management is a core component of our services. We maintain compliance with local, state, and federal regulations, including building codes, fair housing requirements, HUD standards, and environmental regulations. Our compliance oversight includes documentation, audit preparation, and proactive risk mitigation to protect owners from regulatory exposure."
    },
    {
      question: "How do you manage transitions and timelines?",
      answer: "We approach transitions with structured planning and disciplined execution. Our transition process includes detailed timeline development, stakeholder coordination, system integration, and phased implementation. We prioritize operational continuity and minimize disruption while ensuring all critical functions are properly transferred and documented."
    },
    {
      question: "How involved will ownership be?",
      answer: "Ownership involvement is tailored to your preferences and needs. We provide regular reporting, strategic input, and decision-ready information, but the level of day-to-day involvement is determined by you. Some owners prefer hands-on oversight, while others rely on our disciplined execution with periodic strategic reviews. We adapt our communication and reporting cadence to match your management style."
    },
    {
      question: "Can HHP work with existing architects, contractors, or consultants?",
      answer: "Absolutely. We regularly coordinate with existing professional relationships, including architects, contractors, legal counsel, accounting firms, and other consultants. Our role is to integrate seamlessly with your current team, providing coordination, oversight, and strategic input while respecting established relationships and maintaining clear communication channels."
    },
    {
      question: "How do you control operating costs and budgets?",
      answer: "We maintain disciplined cost control through proactive budget management, vendor oversight, expense review, and strategic procurement. Our approach includes regular budget variance analysis, cost benchmarking, and capital planning to optimize operating expenses while preserving asset condition and tenant satisfaction. We provide transparent reporting so owners understand where costs are allocated and why."
    },
    {
      question: "What services does HHP provide?",
      answer: "HHP provides a vertically integrated suite of commercial real estate services, including property management, leasing and tenant representation, investment sales and capital markets advisory, development advisory, site selection, financial analysis, facilities management, and strategic consulting. Our services are designed to support the full lifecycle of commercial real estate ownership, from acquisition through disposition."
    },
    {
      question: "What sets HHP apart from other property management firms?",
      answer: "HHP differentiates itself through vertical integration, operational discipline, and technology-enabled decision-making. Unlike traditional firms that silo services, we combine brokerage, management, and advisory under a single fiduciary mindset. We maintain selective portfolio sizes to ensure accountability, provide direct oversight without call-center models, and integrate proprietary data platforms that enhance—not replace—human judgment and execution."
    },
    {
      question: "Do you offer property management for HUD and affordable housing?",
      answer: "Yes, HHP provides specialized property management services for HUD and affordable housing properties. Our HUD management services include compliance oversight, certification management, REAC inspection preparation, HAP voucher administration, and audit-ready reporting. We use technology to automate complex compliance requirements and ensure subsidy revenue flows without interruption."
    },
    {
      question: "Do you provide emergency response services?",
      answer: "Yes, emergency response is a critical component of our property management services. We maintain 24/7 emergency response protocols, coordinate with vendors and contractors for urgent repairs, and ensure rapid resolution of life-safety and critical system issues. Our emergency response procedures are documented, tested, and integrated with our vendor network to minimize downtime and protect tenants and assets."
    },
    {
      question: "How do you handle property maintenance and safety?",
      answer: "We approach maintenance and safety through proactive planning, scheduled inspections, and disciplined execution. Our maintenance programs include preventive maintenance schedules, regular building inspections, life-safety system testing, and vendor oversight. We prioritize safety compliance, risk mitigation, and asset preservation while maintaining cost efficiency and operational reliability."
    },
    {
      question: "What lease administration services do you provide?",
      answer: "Our lease administration services include lease abstraction, critical date tracking, rent escalation management, expense reconciliation, lease compliance monitoring, and coordination with legal and brokerage teams. We manage leases as legal and financial instruments, ensuring terms are properly executed, tracked, and enforced to protect owner interests and support long-term asset performance."
    },
    {
      question: "Do owners receive financial reporting?",
      answer: "Yes, owners receive comprehensive financial reporting on a monthly basis, including income statements, balance sheets, budget variance analysis, rent roll summaries, and cash flow statements. Our reporting is designed to be decision-ready, transparent, and aligned with ownership accounting systems. We also provide annual budget preparation, capital planning support, and performance trend analysis."
    },
    {
      question: "What is included in facilities management?",
      answer: "Our facilities management services include engineering and building systems oversight, preventive maintenance programs, vendor and contractor management, safety and regulatory compliance, landscaping and exterior maintenance, parking and common area management, and commercial cleaning and janitorial services. We focus on maintaining physical integrity, operational reliability, and cleanliness standards while controlling long-term costs."
    },
    {
      question: "How are maintenance requests handled?",
      answer: "Maintenance requests are handled through structured work order management systems that track requests from initiation through completion. We prioritize requests based on urgency, coordinate with vendors or in-house teams, and provide status updates to tenants. Our goal is timely resolution, quality control, and clear communication throughout the maintenance process."
    },
    {
      question: "Can HHP manage properties after a sale or acquisition?",
      answer: "Yes, HHP provides transition management services for properties following sales or acquisitions. We coordinate property handoffs, integrate new assets into our management platform, conduct due diligence reviews, and ensure operational continuity during ownership transitions. Our experience with acquisitions and dispositions allows us to manage both sides of transactions effectively."
    },
    {
      question: "Do you assist with property acquisitions?",
      answer: "Yes, HHP provides acquisition advisory services, including market analysis, property evaluation, underwriting, due diligence coordination, and transaction structuring. We advise buyers on commercial real estate acquisitions with an understanding of how assets perform beyond the closing table, integrating market insight, underwriting discipline, and operational awareness to support informed decisions."
    },
    {
      question: "What geographic areas do you serve?",
      answer: "HHP serves commercial property owners across multiple markets, with a focus on strategic geographic coverage that allows us to maintain operational discipline and direct oversight. While our primary operations are concentrated in specific regions, we evaluate service opportunities based on portfolio fit, operational capability, and alignment with our selective management approach. Contact us to discuss your specific market needs."
    },
    {
      question: "How do you determine value and performance for commercial assets?",
      answer: "We determine value and performance through comprehensive financial analysis, including income and expense analysis, market comparables, capitalization rate evaluation, and forward-looking projections. Our valuation approach integrates operational insight, market context, and realistic assumptions to provide owners with decision-ready information for strategic planning, capital allocation, and transaction decisions."
    },
    {
      question: "What types of properties does your brokerage team support?",
      answer: "Our brokerage team supports transactions across commercial property types, including office, retail, industrial, multifamily, and mixed-use properties. We provide investment sales representation, acquisition advisory, owner-user transaction support, and strategic transaction guidance. Our brokerage services are informed by operational experience, allowing us to evaluate assets with an understanding of how they perform after closing."
    },
    {
      question: "What brokerage services do you offer?",
      answer: "HHP provides comprehensive brokerage services, including investment sales representation, acquisition advisory, owner-user transactions, pricing and valuation guidance, deal structuring and negotiation, and transaction management and execution. Our brokerage approach is strategy-driven rather than volume-driven, with a focus on long-term decision-making and alignment with ownership objectives."
    }
  ];

  return (
    <Layout>
      {/*
        FAQPage structured data. This is the one page where a search engine
        expects it, and it was the only schema the site was missing on a page
        that plainly qualifies.
      */}
      <Helmet>
        <title>Frequently Asked Questions — HHP Asset Management</title>
        <meta
          name="description"
          content="Answers on property management, Facility Services, financial reporting, brokerage and working with HHP Asset Management in Oklahoma."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero. Was off-system: a bg-black/40 overlay where every other hero uses
          the navy scrim, a raw text-5xl h1 in the body font, and alt="FAQ" on a
          decorative background image. */}
      <section className="relative flex min-h-[420px] items-center justify-center sm:min-h-[500px]">
        <img
          src="/images/investment-sales-capital-markets-hero.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          decoding="async"
          width={1600}
          height={442}
        />
        <div className="absolute inset-0 scrim-hero" />
        <div className="container-premium relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5 text-white/85">Questions</span>
            <h1 className="hero-title mb-5 text-white">Frequently asked questions</h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              How we work, what we self-perform, and what owners can expect.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-spacing bg-white">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <Accordion
              type="single"
              collapsible
              className="w-full border-t border-border"
              onValueChange={(value) => {
                if (value) trackButtonClick(`faq_accordion_${value}`, 'faq_page');
              }}
            >
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold text-hhp-navy hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pt-0">
                    <p className="border-l-2 border-hhp-gold pl-5 leading-relaxed text-hhp-charcoal/85">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Closing CTA. The page previously ended when the last answer collapsed —
          no CTA, no related links, nothing. */}
      <section className="section-spacing bg-hhp-navy text-white">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5 justify-center text-hhp-gold">Still deciding?</span>
            <h2 className="section-title text-white">Ask us directly</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              If your question isn't answered here, tell us about the asset and we'll give you a
              straight answer.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy transition-colors hover:bg-hhp-gold hover:text-hhp-navy-deep"
                onClick={() => {
                  trackButtonClick('faq_cta_contact', 'faq_page');
                  trackLinkClick('Contact us - FAQ', '/contact');
                }}
              >
                Contact us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services/property-management"
                className="tap text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                onClick={() => trackLinkClick('Services - FAQ', '/services/property-management')}
              >
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;

