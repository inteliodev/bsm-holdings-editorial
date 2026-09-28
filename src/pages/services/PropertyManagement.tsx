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
    title: 'Onboard',
    description:
      'Intake the asset, confirm lease and financial baselines, and set owner reporting preferences.',
  },
  {
    step: '02',
    title: 'Operate',
    description:
      'Leasing, resident care, maintenance, and compliance run day to day under one accountable team.',
  },
  {
    step: '03',
    title: 'Report',
    description:
      'Owners see occupancy, collections, budget variances, and open items as they change — with clear notes.',
  },
  {
    step: '04',
    title: 'Improve',
    description:
      'We close the loop: what moved, what is next, and where cost or response time can get better.',
  },
];

const WHATS_INCLUDED = [
  {
    value: 'leasing',
    icon: KeyRound,
    title: 'Leasing',
    lead: 'Fill vacancies with qualified residents and keep lease terms enforceable.',
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
    lead: 'Direct communication — not a call center — so issues get resolved without friction.',
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
    title: 'Maintenance & facility trades',
    lead: 'Work performed in-house through BSM Holdings Facility Services, LLC where it improves cost or speed.',
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
    lead: 'Operational and regulatory risk handled before it becomes an owner problem.',
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
    lead: 'Cost visible at the line item, with reporting owners can act on.',
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
  'Clear notes on what moved and what is next',
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
              Residential property management across the Oklahoma City metro —
              leasing, operations, maintenance, compliance, and accounting under
              one firm.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-[52px] items-center justify-center bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy transition-all duration-300 hover:bg-hhp-gold hover:text-hhp-navy-deep"
                onClick={() => {
                  trackButtonClick('discuss_with_us', 'pm_hero');
                  trackLinkClick('Discuss with us', '/contact');
                }}
              >
                Discuss with us
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
              Management built the way we run our own assets
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-hhp-charcoal">
              <p>
                Effective property management is consistency and accountability
                over time — not volume for its own sake. We manage with an
                owner&apos;s mindset: resident needs, expense control, capital
                preservation, and risk, weighed against long-term performance.
              </p>
              <p>
                Property management, facility trades, and accounting stay
                in-house. Trades run through BSM Holdings Facility Services,
                LLC. One firm answers for the result.
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
              Onboard → operate → report → improve. The same loop on every asset.
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
              Leasing, resident care, maintenance and facility trades,
              compliance, and accounting — under one firm and one reporting
              system.
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

      {/* Reporting owners get */}
      <section className="bg-surface py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-5">Owners</span>
              <h2 className="section-title text-hhp-navy">
                Reporting owners get
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
                Current information, not a month-old packet. Numbers and notes
                in one place so you can see what changed and what we are doing
                about it.
              </p>
              <Link
                to="/contact"
                className="tap group mt-8 inline-flex items-center gap-2 font-display font-semibold text-hhp-navy transition-colors hover:text-brand"
                onClick={() => {
                  trackButtonClick('discuss_reporting', 'pm_reporting');
                  trackLinkClick('Discuss with us', '/contact');
                }}
              >
                Discuss with us
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

      {/* Facility Services callout */}
      <section className="bg-brand py-12 text-white sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-8">
              <span className="eyebrow mb-5 text-white/80">In-house trades</span>
              <h2 className="section-title text-white">
                BSM Holdings Facility Services, LLC
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/90">
                Facility trades stay inside the firm. That means faster
                response, cost visible at the line item, and one team
                accountable for the work — not a stack of outside vendors.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/services/facility-services"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy transition-all duration-300 hover:bg-hhp-gold"
                onClick={() => {
                  trackButtonClick('facility_services', 'pm_facility_callout');
                  trackLinkClick('Facility Services', '/services/facility-services');
                }}
              >
                Facility Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Owners vs Residents */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="eyebrow mb-5 justify-center">Who you are</span>
            <h2 className="section-title text-hhp-navy">Owners and residents</h2>
            <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
              Different needs, clear paths. Owners work with us directly;
              residents use the portal for day-to-day access.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {/* Owners */}
            <div className="flex flex-col border border-border bg-surface p-7 sm:p-9">
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-brand/10 text-brand">
                <Building2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-hhp-navy">
                Owners
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-hhp-charcoal">
                Reporting, leasing strategy, maintenance oversight, and
                accounting under one accountable team. Talk with us about how we
                would manage your asset.
              </p>
              <Link
                to="/contact"
                className="btn-hero mt-8 inline-flex w-fit"
                onClick={() => {
                  trackButtonClick('discuss_owners', 'pm_owners_residents');
                  trackLinkClick('Discuss with us', '/contact');
                }}
              >
                Discuss with us
              </Link>
            </div>

            {/* Residents */}
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
                  'Private owners',
                  'Partnerships and boards',
                  'Owner-users with investment components',
                  'Assets that need hands-on oversight',
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
                  'Selective portfolio size',
                  'Direct accountability',
                  'No call-center model',
                  'In-house facility trades and accounting',
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

      {/* Bottom CTA */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-premium">
          <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 border border-border p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="font-display text-2xl font-semibold text-hhp-navy sm:text-3xl">
                Ready to talk about your asset?
              </h3>
              <p className="mt-2 text-base leading-relaxed text-hhp-charcoal">
                No pitch deck theater — a direct conversation about how we would
                manage the property.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-hero shrink-0"
              onClick={() => {
                trackButtonClick('discuss_bottom', 'pm_bottom_cta');
                trackLinkClick('Discuss with us', '/contact');
              }}
            >
              Discuss with us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyManagement;
