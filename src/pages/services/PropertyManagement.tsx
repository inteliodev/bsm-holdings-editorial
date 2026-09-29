import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { OwnerInquiryForm } from '@/components/OwnerInquiryForm';
import { RESIDENT_PORTAL_URL, site } from '@/lib/site';
import { cn } from '@/lib/utils';

const WHATS_INCLUDED = [
  {
    id: 'leasing',
    title: 'Leasing & Renewals',
    body: 'Rental pricing, marketing, applicant screening, and lease coordination.',
    details: [
      'Rent recommendations based on comparable local listings and property condition',
      'Marketing, showings, and application screening',
      'Lease preparation and renewals',
      'Move-in and move-out coordination',
    ],
  },
  {
    id: 'resident',
    title: 'Resident Support',
    body: 'A direct contact for questions, service requests, and lease matters.',
    details: [
      'Resident communication and issue resolution',
      'Service-request intake and follow-through',
      'Lease compliance monitoring',
      'Portal access for payments and requests',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Inspections',
    body: 'Repair coordination, condition documentation, and preparation between tenants—where included in your services.',
    details: [
      'Work-order intake, prioritization by urgency, and completion tracking',
      'Owner approval when required before non-routine work proceeds',
      'Condition documentation and unit turns between residents',
      'Preventative maintenance planning where it fits the property',
    ],
  },
  {
    id: 'accounting',
    title: 'Accounting & Reporting',
    body: 'Rent collection, expense tracking, and monthly owner statements.',
    details: [
      'Rent collection and receivables monitoring',
      'Monthly owner financial reporting',
      'Expense review and cost control',
      'Distribution information with each reporting cycle',
    ],
  },
];

const COMPLIANCE_POINTS = [
  'Fair housing, lease, and basic regulatory follow-through',
  'Insurance coordination and compliance tracking',
  'Safety and condition monitoring',
  'Documentation for audits and ownership records',
];

const MONTHLY_DELIVERABLES = [
  'Income and expense summary for the period',
  'Collections status and outstanding balances',
  'Leasing and occupancy updates',
  'Open and completed maintenance items',
  'Distribution information for the period',
];

const GETTING_STARTED = [
  {
    title: 'Property Review',
    description:
      'We review your property, current leases, and goals — then discuss rent targets, make-ready needs, and how you want to stay informed.',
  },
  {
    title: 'Management Setup',
    description:
      'Agreements, owner preferences, resident records, and accounting setup so day-to-day management can begin cleanly.',
  },
  {
    title: 'Ongoing Management',
    description:
      'Leasing, collections, resident communication, maintenance coordination, and monthly reporting — with a clear point of contact.',
  },
];

const MAINTENANCE_FLOW = [
  'Resident request',
  'Review urgency',
  'Owner approval when required',
  'Work scheduled',
  'Cost and completion documented',
];

/** Illustrative sample figures — labeled as example only. */
const SAMPLE_REPORT = {
  title: 'Owner statement',
  property: 'Sample residential property',
  period: 'March 2026',
  rows: [
    { label: 'Occupancy', value: '94%', emphasize: false },
    { label: 'Rent collected', value: '$12,450', emphasize: false },
    { label: 'Operating expenses', value: '$3,210', emphasize: false },
    { label: 'Net operating income', value: '$9,240', emphasize: true },
    { label: 'Open work orders', value: '2', emphasize: false },
  ],
};

const OWNER_FAQS = [
  {
    value: 'fees',
    question: 'How do management fees work?',
    answer:
      'Fees depend on the property and the scope of work. We discuss what is included in ongoing management and what may be billed separately (such as leasing or renewals), then provide a written schedule for your property before you sign. Request a proposal and we will walk through fees for your situation.',
  },
  {
    value: 'repairs',
    question: 'How are repair approvals handled?',
    answer:
      'Residents submit requests through the portal. We review urgency, coordinate the work, and seek owner approval when required under your management agreement. Costs and completion are documented so you can see what was done and why.',
  },
  {
    value: 'distributions',
    question: 'When do owners receive distributions?',
    answer:
      'Distributions follow the reporting cycle for your property. Each owner statement includes income, expenses, and distribution information for the period. Ask us about the cadence that fits how you want to receive funds and reports.',
  },
  {
    value: 'switching',
    question: 'What if I already have a property manager?',
    answer:
      'We can take over an existing portfolio. A typical handoff includes leases, financial records, keys, deposits, and resident information; residents are notified of the change; and we establish opening financials so the first reporting period starts cleanly. Timelines depend on the property and what is already in place.',
  },
];

function IncludedPanel({
  item,
}: {
  item: (typeof WHATS_INCLUDED)[number];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) trackButtonClick(`pm_included_${item.id}`, 'pm_whats_included');
      }}
      className="flex h-full flex-col border border-border bg-white p-6 sm:p-7"
    >
      <h3 className="font-display text-xl font-semibold tracking-tight text-hhp-navy sm:text-[1.35rem]">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-hhp-charcoal">
        {item.body}
      </p>
      <CollapsibleTrigger
        className="tap group mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-hhp-navy transition-colors hover:text-brand"
        aria-expanded={open}
      >
        View Details
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-300',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <ul className="mt-4 space-y-2 border-t border-border pt-4">
          {item.details.map((detail) => (
            <li
              key={detail}
              className="flex items-start gap-3 text-sm leading-relaxed text-hhp-charcoal"
            >
              <span
                aria-hidden="true"
                className="mt-[0.65rem] inline-block h-px w-3 shrink-0 bg-brand/70"
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

const PropertyManagement = () => {
  return (
    <Layout>
      <Helmet>
        <title>Property Management | BSM Holdings</title>
        <meta
          name="description"
          content="Residential property management in the Oklahoma City metro — leasing, maintenance, rent collection, and clear owner reporting from BSM Holdings."
        />
        <meta property="og:title" content="Property Management | BSM Holdings" />
        <meta
          property="og:description"
          content="Day-to-day management for residential rentals: leasing, resident care, maintenance coordination, and monthly owner reporting."
        />
        <link
          rel="canonical"
          href="https://bsm-holdings-editorial.vercel.app/services/property-management"
        />
      </Helmet>

      {/* 1. Opening — ~45% text / ~55% photo */}
      <section className="bg-background">
        <div className="container-premium py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="flex flex-col justify-center lg:col-span-5">
              <h1 className="hero-title text-hhp-navy">Property Management</h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-hhp-charcoal">
                Day-to-day management for residential rentals in the Oklahoma City
                metro — leasing, maintenance, and financial reporting.
              </p>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-hhp-charcoal">
                You work with our management team, with {site.principal.shortName} as
                principal, and receive clear monthly updates.
              </p>
              <div className="mt-8">
                <a
                  href="#request-proposal"
                  className="btn-hero"
                  onClick={() => {
                    trackButtonClick('request_a_proposal', 'pm_hero');
                    trackLinkClick('Request a Proposal', '#request-proposal');
                  }}
                >
                  Request a Proposal
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <img
                src="/images/multifamily-image-trendy.jpg"
                alt="Modern multifamily apartment building exterior"
                className="aspect-[5/4] w-full border border-border object-cover object-[center_40%] sm:aspect-[4/3]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. What's Included — 2×2 panels + compliance strip */}
      <section id="whats-included" className="border-t border-border bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy">What&apos;s included</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-hhp-charcoal">
            Leasing, resident support, maintenance, and accounting — the day-to-day
            work of owning a rental.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
            {WHATS_INCLUDED.map((item) => (
              <IncludedPanel key={item.id} item={item} />
            ))}
          </div>

          {/* Compact compliance strip */}
          <div className="mt-5 border border-border bg-surface px-5 py-5 sm:px-7 sm:py-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-10">
              <div className="shrink-0 lg:w-48">
                <h3 className="font-display text-base font-semibold tracking-tight text-hhp-navy sm:text-lg">
                  Compliance
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-hhp-charcoal/85">
                  Built into day-to-day management.
                </p>
              </div>
              <ul className="grid flex-1 gap-2 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2">
                {COMPLIANCE_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-hhp-charcoal"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-brand"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Owner Reporting — full-width deep navy centerpiece */}
      <section className="bg-brand-deep py-16 text-white sm:py-20 lg:py-24">
        <div className="container-premium">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="section-title text-white">
                A Clear View of Your Property.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Monthly reports cover income, expenses, collections, leasing, and
                maintenance — with plain notes on what changed.
              </p>
              <ul className="mt-8 space-y-3">
                {MONTHLY_DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#whats-included"
                className="tap group mt-10 inline-flex items-center gap-2 font-display font-semibold text-white transition-colors hover:text-hhp-gold-soft"
                onClick={() => {
                  trackButtonClick('explore_management_services', 'pm_reporting');
                  trackLinkClick('See what\'s included', '#whats-included');
                }}
              >
                See what&apos;s included
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-sm border border-white/10 bg-white text-hhp-navy shadow-lg shadow-black/20">
                <div className="border-b border-border px-6 py-5 sm:px-8">
                  <p className="font-display text-xs font-semibold tracking-[0.12em] text-brand">
                    {SAMPLE_REPORT.title}
                  </p>
                  <div className="mt-2 flex flex-wrap items-end justify-between gap-2">
                    <div>
                      <p className="font-display text-lg font-semibold text-hhp-navy">
                        {SAMPLE_REPORT.property}
                      </p>
                      <p className="mt-0.5 text-sm text-listing-muted">
                        Period: {SAMPLE_REPORT.period}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-listing-muted">
                      Sample preview
                    </span>
                  </div>
                </div>
                <ul>
                  {SAMPLE_REPORT.rows.map((row) => (
                    <li
                      key={row.label}
                      className={
                        row.emphasize
                          ? 'flex items-center justify-between gap-4 border-b border-border bg-brand/5 px-6 py-4 last:border-b-0 sm:px-8'
                          : 'flex items-center justify-between gap-4 border-b border-border px-6 py-3.5 last:border-b-0 sm:px-8'
                      }
                    >
                      <span
                        className={
                          row.emphasize
                            ? 'font-display text-base font-semibold text-hhp-navy'
                            : 'text-base text-hhp-charcoal'
                        }
                      >
                        {row.label}
                      </span>
                      <span
                        className={
                          row.emphasize
                            ? 'font-display text-lg font-semibold tabular-nums text-brand'
                            : 'font-display text-base font-semibold tabular-nums text-hhp-navy'
                        }
                      >
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-border px-6 py-3.5 text-xs leading-relaxed text-listing-muted sm:px-8">
                  Illustrative figures; actual reports vary by property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Maintenance — photo + compact vertical timeline */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-premium">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <img
                src="/images/properties/grounds-oak-tree.webp"
                alt="Well-kept residential building exterior"
                className="aspect-[4/3] w-full border border-border object-cover object-[72%_center]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="lg:col-span-7">
              <h2 className="section-title text-hhp-navy">
                Coordinated repairs and clear updates
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
                Our management team coordinates repairs and keeps owners informed about
                costs and progress — from routine work orders to unit turns between
                residents.
              </p>
              <ol className="relative mt-8 ml-1.5 space-y-0 border-l border-border pl-6">
                {MAINTENANCE_FLOW.map((step) => (
                  <li key={step} className="relative pb-6 last:pb-0">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.6875rem] top-1.5 h-2 w-2 rounded-full border-2 border-brand bg-white"
                    />
                    <span className="font-display text-base font-semibold text-hhp-navy sm:text-lg">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-base leading-relaxed text-hhp-charcoal">
                Approval rules are set in your management agreement. We follow what you
                and the team agree in writing for when owner approval is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transition — handoff + getting started combined */}
      <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-title text-hhp-navy">Getting started</h2>
            <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
              Whether you are new to management or switching from another manager, we
              start with a clear review of your property and goals.
            </p>
            <p className="mt-4 text-base leading-relaxed text-hhp-charcoal">
              Already have a property manager? Switching is a handoff, not a restart
              from zero. We work through leases, financial records, keys, deposits, and
              resident information; notify residents of the change; and establish opening
              financials so the first reporting period starts cleanly. Timing depends on
              the property — we outline the steps when you request a proposal.
            </p>
            <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-8">
              {GETTING_STARTED.map((item) => (
                <li key={item.title} className="group border-t border-border pt-5">
                  <h3 className="font-display text-lg font-semibold text-hhp-navy transition-colors duration-300 group-hover:text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-hhp-charcoal">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Point of contact */}
      <section className="bg-surface-sunken py-14 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto grid max-w-4xl items-center gap-8 sm:grid-cols-12 sm:gap-10">
            <div className="sm:col-span-3">
              <div className="mx-auto aspect-square max-w-[160px] overflow-hidden border border-border bg-white sm:mx-0 sm:max-w-none">
                <img
                  src="/brand/ty-headshot.png"
                  alt={`${site.principal.name}, ${site.principal.title} of BSM Holdings`}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="sm:col-span-9">
              <h2 className="font-display text-2xl font-semibold text-hhp-navy sm:text-3xl">
                Who owners work with
              </h2>
              <p className="mt-2 font-display text-base font-semibold text-hhp-navy">
                {site.principal.name}
                <span className="ml-2 text-sm font-medium text-brand">
                  {site.principal.title}
                </span>
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-hhp-charcoal sm:text-lg">
                Owners work with our management team, with {site.principal.shortName} as
                principal — clear reporting, coordinated maintenance, and straightforward
                communication across the Oklahoma City metro.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  to="/contact?inquiry=owner"
                  className="tap text-sm font-semibold text-hhp-navy underline-offset-4 hover:underline"
                  onClick={() => {
                    trackButtonClick('owner_support_poc', 'pm_poc');
                    trackLinkClick('Owner Support', '/contact?inquiry=owner');
                  }}
                >
                  Owner Support
                </Link>
                <a
                  href={RESIDENT_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap text-sm font-semibold text-hhp-navy underline-offset-4 hover:underline"
                  onClick={() => {
                    trackButtonClick('resident_login_poc', 'pm_poc');
                    trackLinkClick('Resident Login', RESIDENT_PORTAL_URL);
                  }}
                >
                  Resident Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner FAQs */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-title text-hhp-navy">Owner questions</h2>
            <p className="mt-4 text-lg leading-relaxed text-hhp-charcoal">
              Fees, repairs, distributions, and switching managers.
            </p>
            <Accordion
              type="single"
              collapsible
              className="mt-10 w-full border-t border-border"
              onValueChange={(value) => {
                if (value) trackButtonClick(`pm_faq_${value}`, 'pm_faq');
              }}
            >
              {OWNER_FAQS.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-hhp-navy hover:no-underline data-[state=open]:text-brand sm:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-hhp-charcoal">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 6. Proposal — navy/white form; fees invite; separation from footer */}
      <section
        id="request-proposal"
        className="bg-brand-deep py-16 text-white sm:py-20 lg:py-24 mb-0"
      >
        <div className="container-premium">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5">
              <h2 className="section-title text-white">Request a Proposal</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80">
                Tell us about your property. We will explain how we would manage it,
                what reporting looks like, and next steps.
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                Your proposal outlines management fees, included services, and any
                additional charges.
              </p>
              <p className="mt-6 text-sm text-white/60">
                Prefer email?{' '}
                <a
                  href={`mailto:${site.principal.email}`}
                  className="font-medium text-hhp-gold-soft underline-offset-4 hover:underline"
                >
                  {site.principal.email}
                </a>
              </p>
            </div>
            <div className="rounded-sm border border-white/15 bg-white p-6 sm:p-8 lg:col-span-7">
              <OwnerInquiryForm source="pm_closing" />
            </div>
          </div>
        </div>
      </section>

      {/* Extra separation before site footer */}
      <div className="h-10 bg-background sm:h-14" aria-hidden="true" />
    </Layout>
  );
};

export default PropertyManagement;
