import Layout from '@/components/Layout/Layout';
import {
  ArrowRight,
  Building2,
  ClipboardList,
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
import { RESIDENT_PORTAL_URL } from '@/lib/site';

const HOW_WE_MANAGE = [
  {
    step: '01',
    title: 'Getting Started',
    description:
      'We review your property, current leases, and goals. Then we agree on rent targets, make-ready needs, and how you want to stay informed.',
  },
  {
    step: '02',
    title: 'Daily Management',
    description:
      'Leasing, rent collection, resident communication, and maintenance coordination run day to day. Our team handles daily operations and resident communication.',
  },
  {
    step: '03',
    title: 'Owner Reporting',
    description:
      'You receive clear updates on occupancy, collections, expenses, and open maintenance — with notes on what changed and what is next.',
  },
  {
    step: '04',
    title: 'Ongoing Planning',
    description:
      'Renewals, make-ready, and repair priorities are planned ahead so vacancies and surprises are less likely to catch you off guard.',
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
    lead: 'Fair housing, lease, and basic regulatory follow-through handled as part of day-to-day management.',
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

const OWNER_REPORTING = [
  'Occupancy and leasing status',
  'Collections and delinquencies',
  'Budget vs. actual with variances',
  'Open maintenance and compliance items',
  'Updates on outstanding items and planned work',
];

const PropertyManagement = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative flex min-h-[480px] items-center justify-center bg-cover bg-center bg-no-repeat sm:min-h-[520px]"
        style={{ backgroundImage: 'url(/images/property-management-picture.webp)' }}
      >
        <div className="absolute inset-0 bg-brand/60" />
        <div className="container-premium relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5 text-white/85">Services</span>
            <h1 className="hero-title mb-5 text-white drop-shadow-lg">
              Property Management
            </h1>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Day-to-day management for residential rentals in the Oklahoma City
              metro: leasing, resident communication, maintenance, and financial reporting.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-[52px] items-center justify-center bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy transition-all duration-300 hover:bg-hhp-gold hover:text-hhp-navy-deep"
                onClick={() => {
                  trackButtonClick('request_a_proposal', 'pm_hero');
                  trackLinkClick('Request a Proposal', '/contact');
                }}
              >
                Request a Proposal
              </Link>
              <a
                href={RESIDENT_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center border border-white/70 px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-hhp-navy"
                onClick={() => {
                  trackButtonClick('resident_login', 'pm_hero');
                  trackLinkClick('Resident login', RESIDENT_PORTAL_URL);
                }}
              >
                Resident login
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-title mb-6 text-hhp-navy">
              Day-to-Day Management. Clear Owner Reporting.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-hhp-charcoal">
              <p>
                If you own rental property in the Oklahoma City metro, BSM Holdings
                can handle the work that comes with it: marketing and leasing,
                resident screening and communication, rent collection, maintenance
                coordination, and monthly owner reporting.
              </p>
              <p>
                You receive monthly financial statements and updates from a direct
                point of contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we manage */}
      <section className="bg-surface py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="eyebrow mb-5 justify-center">Process</span>
            <h2 className="section-title text-hhp-navy">How we manage</h2>
            <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
              Getting started, daily management, owner reporting, and ongoing
              planning.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_WE_MANAGE.map((item) => (
              <div
                key={item.step}
                className="border border-border bg-white p-6 sm:p-7"
              >
                <span className="font-display text-sm font-semibold tracking-[0.12em] text-brand">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-hhp-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-hhp-charcoal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto mb-10 max-w-3xl">
            <span className="eyebrow mb-5">Scope</span>
            <h2 className="section-title text-hhp-navy">What&apos;s included</h2>
            <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
              Leasing, resident care, maintenance, compliance, and accounting —
              the day-to-day work of owning a rental.
            </p>
          </div>

          <Accordion type="single" collapsible className="mx-auto w-full max-w-4xl">
            {WHATS_INCLUDED.map((section) => {
              const Icon = section.icon;
              return (
                <AccordionItem
                  key={section.value}
                  value={section.value}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline [&[data-state=open]]:text-brand">
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand/10 text-brand">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-display text-lg font-semibold text-hhp-navy sm:text-xl">
                        {section.title}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pt-0">
                    <p className="mb-4 text-base font-medium leading-relaxed text-hhp-charcoal">
                      {section.lead}
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal">
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
      </section>

      {/* Owner Reporting */}
      <section className="bg-surface py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-5">Owners</span>
              <h2 className="section-title text-hhp-navy">
                Owner Reporting
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
                Financial reports and updates on leasing, collections, and
                maintenance.
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
              <ul className="border border-border bg-white">
                {OWNER_REPORTING.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-border px-5 py-4 last:border-b-0 sm:px-6 sm:py-5"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 font-display text-sm font-semibold text-brand"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base leading-relaxed text-hhp-navy sm:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance coordination */}
      <section className="bg-brand py-12 text-white sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5 justify-center text-white/80">Maintenance</span>
            <h2 className="section-title text-white">
              Coordinated repairs and clear updates
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              Our management team coordinates repairs and keeps owners informed
              about costs and progress.
            </p>
          </div>
        </div>
      </section>

      {/* For Owners and Residents */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="section-title text-hhp-navy">For Owners and Residents</h2>
            <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
              Owners work with us directly; residents use the portal for day-to-day access.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="flex flex-col border border-border bg-surface p-7 sm:p-9">
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-brand/10 text-brand">
                <Building2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-hhp-navy">
                Owners
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-hhp-charcoal">
                Tell us about your property and the management services you need.
                We will explain how we would manage it and what reporting looks like.
              </p>
              <Link
                to="/contact"
                className="btn-hero mt-8 inline-flex w-fit"
                onClick={() => {
                  trackButtonClick('request_proposal_owners', 'pm_owners_residents');
                  trackLinkClick('Request a Proposal', '/contact');
                }}
              >
                Request a Proposal
              </Link>
            </div>

            <div className="flex flex-col border border-border bg-surface p-7 sm:p-9">
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-brand/10 text-brand">
                <Home className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-hhp-navy">
                Residents
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-hhp-charcoal">
                Pay rent, submit maintenance requests, and access documents in
                the resident portal.
              </p>
              <a
                href={RESIDENT_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero mt-8 inline-flex w-fit"
                onClick={() => {
                  trackButtonClick('resident_portal', 'pm_owners_residents');
                  trackLinkClick('Resident login', RESIDENT_PORTAL_URL);
                }}
              >
                Resident login
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="container-premium">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <ClipboardList className="h-5 w-5 text-brand" aria-hidden="true" />
                <h2 className="font-display text-xl font-semibold text-hhp-navy sm:text-2xl">
                  Who we work with
                </h2>
              </div>
              <ul className="space-y-3 text-hhp-charcoal">
                {[
                  'Private owners of single-family homes and small multifamily',
                  'Out-of-town owners who need local day-to-day coverage',
                  'Owners transitioning from self-management',
                  'Partnerships that want hands-on oversight',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mt-[0.65rem] mr-3 inline-block h-px w-4 shrink-0 bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Shield className="h-5 w-5 text-brand" aria-hidden="true" />
                <h2 className="font-display text-xl font-semibold text-hhp-navy sm:text-2xl">
                  How we differ
                </h2>
              </div>
              <ul className="space-y-3 text-hhp-charcoal">
                {[
                  'Direct point of contact for owners and residents',
                  'Coordinated maintenance with clear cost updates',
                  'Plain-language owner reporting',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mt-[0.65rem] mr-3 inline-block h-px w-4 shrink-0 bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for a Property Manager? */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-premium">
          <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 border border-border p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="font-display text-2xl font-semibold text-hhp-navy sm:text-3xl">
                Looking for a Property Manager?
              </h3>
              <p className="mt-2 text-base leading-relaxed text-hhp-charcoal">
                Contact us to discuss your property, our services, and management fees.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-hero shrink-0"
              onClick={() => {
                trackButtonClick('request_proposal_bottom', 'pm_bottom_cta');
                trackLinkClick('Request a Proposal', '/contact');
              }}
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyManagement;
