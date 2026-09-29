import Layout from '@/components/Layout/Layout';
import {
  ArrowRight,
  Building2,
  FileText,
  Home,
  KeyRound,
  Shield,
  Users,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { OwnerInquiryForm } from '@/components/OwnerInquiryForm';
import { RESIDENT_PORTAL_URL } from '@/lib/site';

const HOW_WE_MANAGE = [
  {
    step: '01',
    title: 'Getting Started',
    description:
      'We review your property, leases, and goals, then agree on rent targets, make-ready needs, and how you want updates.',
  },
  {
    step: '02',
    title: 'Daily Management',
    description:
      'Leasing, rent collection, resident communication, and maintenance coordination run day to day with one team.',
  },
  {
    step: '03',
    title: 'Owner Reporting',
    description:
      'Clear updates on occupancy, collections, expenses, and open maintenance — with notes on what changed next.',
  },
  {
    step: '04',
    title: 'Ongoing Planning',
    description:
      'Renewals, make-ready, and repair priorities are planned ahead so vacancies are less likely to surprise you.',
  },
];

const WHATS_INCLUDED = [
  {
    value: 'leasing',
    icon: KeyRound,
    title: 'Leasing',
    lead: 'Fill vacancies with qualified residents and keep lease terms clear.',
    items: [
      'Marketing and showing coordination',
      'Application screening and lease prep',
      'Renewals and move-in / move-out support',
      'Critical date tracking',
    ],
  },
  {
    value: 'resident',
    icon: Users,
    title: 'Resident care',
    lead: 'Direct communication so issues get resolved without friction.',
    items: [
      'Resident communication and issue resolution',
      'Service-request coordination',
      'Lease compliance monitoring',
      'Portal access for payments and requests',
    ],
  },
  {
    value: 'maintenance',
    icon: Wrench,
    title: 'Maintenance',
    lead: 'Our management team coordinates repairs and keeps owners informed about costs and progress.',
    items: [
      'Preventative maintenance planning',
      'Work-order intake and completion',
      'Emergency response coordination',
      'Unit turns and make-ready',
    ],
  },
  {
    value: 'compliance',
    icon: Shield,
    title: 'Compliance',
    lead: 'Fair housing, lease, and basic regulatory follow-through as part of day-to-day management.',
    items: [
      'Insurance coordination and compliance tracking',
      'Safety and condition monitoring',
      'Lease and regulatory oversight',
      'Documentation for audits and ownership',
    ],
  },
  {
    value: 'accounting',
    icon: FileText,
    title: 'Accounting',
    lead: 'Rent collection and monthly owner statements showing income and expenses.',
    items: [
      'Rent collection and receivables monitoring',
      'Monthly owner financial reporting',
      'Budget prep and variance analysis',
      'Expense review and cost control',
    ],
  },
];

/** Illustrative sample figures — labeled as example only. */
const SAMPLE_REPORT = {
  period: 'March 2026',
  rows: [
    { label: 'Occupancy', value: '94%' },
    { label: 'Rent collected', value: '$12,450' },
    { label: 'Operating expenses', value: '$3,210' },
    { label: 'Net to owner', value: '$9,240' },
    { label: 'Open work orders', value: '2' },
  ],
};

const PropertyManagement = () => {
  return (
    <Layout>
      {/* Intro — split headline + property image; light overlay */}
      <section className="bg-background">
        <div className="container-premium py-12 sm:py-14 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <span className="eyebrow">Services</span>
              <h1 className="hero-title mt-4 text-hhp-navy">Property Management</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-hhp-charcoal">
                Day-to-day management for residential rentals in the Oklahoma City
                metro: leasing, resident communication, maintenance, and financial
                reporting. You receive monthly statements and updates from a direct
                point of contact.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="btn-hero"
                  onClick={() => {
                    trackButtonClick('request_a_proposal', 'pm_hero');
                    trackLinkClick('Request a Proposal', '/contact');
                  }}
                >
                  Request a Proposal
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <img
                src="/images/properties/grounds-oak-tree.webp"
                alt="Oklahoma residential rental exterior"
                className="aspect-[4/3] w-full border border-border object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services — list beside large photo; first item open */}
      <section className="border-t border-border bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow">Scope</span>
              <h2 className="section-title mt-4 text-hhp-navy">What&apos;s included</h2>
              <p className="mt-4 text-lg leading-relaxed text-hhp-charcoal">
                Leasing, resident care, maintenance, compliance, and accounting —
                the day-to-day work of owning a rental.
              </p>
              <img
                src="/images/properties/office-mail-porch.webp"
                alt="On-site property office and mail area"
                className="mt-8 hidden aspect-[4/3] w-full border border-border object-cover lg:block"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="lg:col-span-7">
              <Accordion
                type="single"
                collapsible
                defaultValue="leasing"
                className="w-full"
              >
                {WHATS_INCLUDED.map((section) => {
                  const Icon = section.icon;
                  return (
                    <AccordionItem
                      key={section.value}
                      value={section.value}
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="py-5 text-left hover:no-underline data-[state=open]:text-brand">
                        <span className="flex items-center gap-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-surface-sunken text-brand">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="font-display text-lg font-semibold text-hhp-navy">
                            {section.title}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 pt-0">
                        <p className="mb-3 text-base font-medium leading-relaxed text-hhp-charcoal">
                          {section.lead}
                        </p>
                        <ul className="space-y-1.5 text-base leading-relaxed text-hhp-charcoal">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start">
                              <span className="mt-[0.65rem] mr-3 inline-block h-px w-4 shrink-0 bg-brand" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Reporting — illustrative sample panel */}
      <section className="bg-surface py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5">
              <span className="eyebrow">Owners</span>
              <h2 className="section-title mt-4 text-hhp-navy">Owner Reporting</h2>
              <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
                Financial reports and updates on leasing, collections, and
                maintenance — occupancy, delinquencies, budget vs. actual, and
                open items with plain notes on what is next.
              </p>
              <Link
                to="/contact"
                className="tap group mt-8 inline-flex items-center gap-2 font-display font-semibold text-hhp-navy transition-colors hover:text-brand"
                onClick={() => {
                  trackButtonClick('request_proposal_reporting', 'pm_reporting');
                  trackLinkClick('Request a Proposal', '/contact');
                }}
              >
                Request a Proposal
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="border border-border bg-white">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-surface-sunken px-5 py-3 sm:px-6">
                  <p className="font-display text-sm font-semibold text-hhp-navy">
                    Owner statement · {SAMPLE_REPORT.period}
                  </p>
                  <span className="rounded border border-border bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-listing-muted">
                    Example report — illustrative
                  </span>
                </div>
                <ul>
                  {SAMPLE_REPORT.rows.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5 last:border-b-0 sm:px-6"
                    >
                      <span className="text-base text-hhp-charcoal">{row.label}</span>
                      <span className="font-display text-base font-semibold tabular-nums text-hhp-navy">
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-border px-5 py-3 text-xs leading-relaxed text-listing-muted sm:px-6">
                  Sample figures for layout only — not a real owner statement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting started — compact numbered sequence */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto mb-10 max-w-3xl">
            <span className="eyebrow">Process</span>
            <h2 className="section-title mt-4 text-hhp-navy">Getting started</h2>
            <p className="mt-4 text-lg leading-relaxed text-hhp-charcoal">
              From the first conversation through ongoing planning.
            </p>
          </div>
          <ol className="mx-auto max-w-4xl border-t border-border">
            {HOW_WE_MANAGE.map((item) => (
              <li
                key={item.step}
                className="grid grid-cols-1 gap-2 border-b border-border py-6 sm:grid-cols-12 sm:gap-6 sm:py-7"
              >
                <div className="flex items-baseline gap-3 sm:col-span-4">
                  <span className="font-display text-sm font-semibold tracking-[0.12em] text-brand">
                    {item.step}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-hhp-navy">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-hhp-charcoal sm:col-span-8">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Maintenance — photo + text (not bright blue banner) */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="container-premium">
          <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <img
                src="/images/properties/back-lawn.webp"
                alt="Residential property grounds"
                className="aspect-[4/3] w-full border border-border object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="lg:col-span-7">
              <span className="eyebrow">Maintenance</span>
              <h2 className="section-title mt-4 text-hhp-navy">
                Coordinated repairs and clear updates
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
                Our management team coordinates repairs and keeps owners informed
                about costs and progress — from routine work orders to emergency
                response and unit turns between residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner questions — compact support strip */}
      <section className="border-y border-border bg-white py-8 sm:py-10">
        <div className="container-premium">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-hhp-navy">Owners</p>
                  <p className="text-sm text-hhp-charcoal">
                    Direct contact for proposals and reporting questions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Home className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-hhp-navy">Residents</p>
                  <p className="text-sm text-hhp-charcoal">
                    Pay rent and submit requests in the resident portal.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="tap text-sm font-semibold text-hhp-navy underline-offset-4 hover:underline"
                onClick={() => {
                  trackButtonClick('owner_support_strip', 'pm_support');
                  trackLinkClick('Owner Support', '/contact');
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
                  trackButtonClick('resident_login_strip', 'pm_support');
                  trackLinkClick('Resident Login', RESIDENT_PORTAL_URL);
                }}
              >
                Resident Login
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing — substantial navy + proposal form */}
      <section className="bg-brand-deep py-14 text-white sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5">
              <span className="eyebrow eyebrow-bare text-hhp-gold-soft">Next step</span>
              <h2 className="section-title mt-4 text-white">Request a Proposal</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                Tell us about your property. We will explain how we would manage it,
                what reporting looks like, and next steps.
              </p>
            </div>
            <div className="rounded border border-white/15 bg-white p-6 sm:p-8 lg:col-span-7">
              <OwnerInquiryForm source="pm_closing" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyManagement;
