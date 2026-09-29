import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const OWNER_FAQS = [
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
    question: 'How do fees work?',
    answer:
      'We provide a written fee schedule for your property before you sign. Ask what is included in the monthly management fee and what is billed separately (such as leasing or renewal). Contact us to discuss your property and we will send the schedule in writing.',
  },
];

const RESIDENT_FAQS = [
  {
    question: 'How are maintenance requests handled?',
    answer:
      'Residents submit non-emergency requests through the resident portal so we can track them. Work is prioritized by urgency, coordinated under your approval rules, and documented through completion. Our management team coordinates repairs and keeps owners informed about costs and progress.',
  },
  {
    question: 'Do you offer emergency maintenance response?',
    answer:
      'Yes. Urgent issues that affect safety or habitability are handled as emergencies. Residents should use the emergency contact listed in their lease materials for lockouts, utility shutoffs, active leaks, and similar situations.',
  },
  {
    question: 'I am a resident — how do I pay rent or request maintenance?',
    answer:
      'Use the resident portal for rent payments, maintenance requests, and lease documents. For emergencies, use the contact information in your lease or welcome materials rather than waiting on a non-urgent portal request.',
  },
];

const FAQ = () => {
  const allItems = [...OWNER_FAQS, ...RESIDENT_FAQS];

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
            mainEntity: allItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          })}
        </script>
      </Helmet>

      <section className="border-b border-border bg-background py-10 sm:py-12">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Questions</span>
            <h1 className="section-title mt-3 text-hhp-navy">Frequently asked questions</h1>
            <p className="mt-3 text-lg leading-relaxed text-hhp-charcoal">
              How we manage rentals, what owners can expect, and how residents get help.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl space-y-12">
            <div>
              <h2 className="font-display text-lg font-semibold text-hhp-navy">
                For Property Owners
              </h2>
              <Accordion
                type="single"
                collapsible
                className="mt-4 w-full border-t border-border"
                onValueChange={(value) => {
                  if (value) trackButtonClick(`faq_owner_${value}`, 'faq_page');
                }}
              >
                {OWNER_FAQS.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`owner-${index}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="py-4 text-left text-base font-medium text-hhp-navy hover:no-underline data-[state=open]:text-brand">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pt-0">
                      <p className="text-base leading-relaxed text-hhp-charcoal/85">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-hhp-navy">
                For Residents
              </h2>
              <Accordion
                type="single"
                collapsible
                className="mt-4 w-full border-t border-border"
                onValueChange={(value) => {
                  if (value) trackButtonClick(`faq_resident_${value}`, 'faq_page');
                }}
              >
                {RESIDENT_FAQS.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`resident-${index}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="py-4 text-left text-base font-medium text-hhp-navy hover:no-underline data-[state=open]:text-brand">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pt-0">
                      <p className="text-base leading-relaxed text-hhp-charcoal/85">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-10 sm:py-12">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-base text-hhp-charcoal">
              Still have a question?{' '}
              <Link
                to="/contact"
                className="font-semibold text-hhp-navy underline-offset-4 hover:underline"
                onClick={() => {
                  trackButtonClick('faq_cta_contact', 'faq_page');
                  trackLinkClick('Contact our team - FAQ', '/contact');
                }}
              >
                Contact our team
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
