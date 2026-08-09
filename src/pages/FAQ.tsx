import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick } from '@/utils/analytics';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    trackButtonClick(`faq_accordion_${index}`, 'faq_page');
  };

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
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] flex items-center justify-center">
        <img 
          src="/images/investment-sales-capital-markets-hero.webp" 
          alt="FAQ"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-5xl sm:text-6xl font-bold text-white text-center">
          FAQ
        </h1>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-300 mb-4 last:mb-0"
              >
                <button 
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-left text-hhp-navy pr-4">
                    {item.question}
                  </h3>
                  <span 
                    className={`text-2xl text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 bg-gray-50 border-t border-gray-300">
                    <p className="text-gray-700 leading-relaxed pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;

