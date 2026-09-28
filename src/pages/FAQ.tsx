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

const FAQ = () => {
  const faqItems = [
    {
      question: 'What types of properties does BSM Holdings manage?',
      answer:
        'BSM Holdings manages residential rentals in the Oklahoma City metro — single-family homes, duplexes, townhomes, and apartments. We focus on day-to-day property management for owners who want leasing, maintenance, rent collection, and clear reporting handled locally.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Use the contact form or email ty@bsmholdings.com with the property address, current rent or vacancy status, and what you need help with. We will review the property and explain how management would work — including reporting and next steps.',
    },
    {
      question: 'What does day-to-day management include?',
      answer:
        'Marketing and leasing vacant homes, screening applicants, collecting rent, coordinating maintenance, documenting move-in and move-out, and sending regular owner reports on occupancy, collections, expenses, and open items.',
    },
    {
      question: 'How do owners receive reporting?',
      answer:
        'Owners receive regular financial and operational updates — occupancy and leasing status, collections, expenses, and open maintenance — with plain notes on what changed and what is next. Ask us about the reporting cadence that fits your property.',
    },
    {
      question: 'How are maintenance requests handled?',
      answer:
        'Residents submit non-emergency requests through the resident portal so we can track them. Work is prioritized by urgency, coordinated under your approval rules, and documented through completion. When the work fits, repairs can run through BSM Holdings Facility Services, LLC.',
    },
    {
      question: 'Do you offer emergency maintenance response?',
      answer:
        'Yes. Urgent issues that affect safety or habitability are handled as emergencies. Residents should use the emergency contact listed in their lease materials for lockouts, utility shutoffs, active leaks, and similar situations.',
    },
    {
      question: 'How involved will I be as an owner?',
      answer:
        'That is up to you. Some owners want frequent updates; others prefer periodic reports and approval only above agreed thresholds. We adapt communication and decision points to how hands-on you want to be.',
    },
    {
      question: 'What geographic areas do you serve?',
      answer:
        'We manage residential properties in the Oklahoma City metro — including Oklahoma City, Edmond, Norman, Moore, Yukon, and surrounding communities. If your property is nearby, contact us with the address and we will confirm coverage.',
    },
    {
      question: 'I am a resident — how do I pay rent or request maintenance?',
      answer:
        'Use the resident portal for rent payments, maintenance requests, and lease documents. For emergencies, use the contact information in your lease or welcome materials rather than waiting on a non-urgent portal request.',
    },
    {
      question: 'How do fees work?',
      answer:
        'We provide a written fee schedule for your property before you sign. Ask what is included in the monthly management fee and what is billed separately (such as leasing or renewal). We do not invent fee numbers on the website — discuss your property and we will send the schedule in writing.',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Frequently Asked Questions — BSM Holdings</title>
        <meta
          name="description"
          content="Answers on residential property management, owner reporting, maintenance, and working with BSM Holdings in the Oklahoma City metro."
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
              How we manage rentals, what owners can expect, and how residents get help.
            </p>
          </div>
        </div>
      </section>

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

      <section className="section-spacing bg-brand text-white">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5 justify-center text-hhp-gold">Still deciding?</span>
            <h2 className="section-title text-white">Ask us directly</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              If your question isn&apos;t answered here, tell us about the property and we&apos;ll give you a straight answer.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy transition-colors hover:bg-hhp-gold hover:text-hhp-navy-deep"
                onClick={() => {
                  trackButtonClick('faq_cta_contact', 'faq_page');
                  trackLinkClick('Discuss Your Property - FAQ', '/contact');
                }}
              >
                Discuss Your Property
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services/property-management"
                className="tap text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                onClick={() => trackLinkClick('Property Management - FAQ', '/services/property-management')}
              >
                Property management
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
