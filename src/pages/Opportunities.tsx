import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const OPPORTUNITIES = [
  {
    id: 1,
    title: 'Property Management - Operations',
    department: 'Operations',
    location: 'Oklahoma City, OK / Multiple Oklahoma locations',
    description:
      'Lead day-to-day operations for commercial properties. Direct accountability for financial performance, tenant relations, and asset preservation.',
  },
  {
    id: 2,
    title: 'Leasing & Representation - Brokerage',
    department: 'Brokerage',
    location: 'Oklahoma City, OK',
    description:
      'Represent owners and tenants in commercial leasing transactions. Focus on long-term asset value, not just deal volume.',
  },
  {
    id: 3,
    title: 'Financial Services - Analysis',
    department: 'Financial Services',
    location: 'Oklahoma City, OK / Remote',
    description:
      'Provide real estate financial analysis and reporting for owners and boards. Bridge operations, brokerage, and financial planning.',
  },
  {
    id: 4,
    title: 'Technology Implementation - Systems',
    department: 'Technology',
    location: 'Oklahoma City, OK / Remote',
    description:
      'Deploy and maintain proprietary data platforms and systems. Work directly with operations and brokerage teams to solve real problems.',
  },
  {
    id: 5,
    title: 'Advisory Services - Consulting',
    department: 'Advisory',
    location: 'Oklahoma City, OK',
    description:
      'Advise owners and boards on complex real estate decisions. Site selection, portfolio optimization, and strategic planning.',
  },
  {
    id: 6,
    title: 'Broker Support - Compliance',
    department: 'Operations',
    location: 'Oklahoma City, OK',
    description:
      'Provide Broker of Record services and compliance oversight for independent brokerages. Regulatory excellence and operational support.',
  },
];

const Opportunities = () => {
  // `department` was structured on every record but had no UI at all.
  const [department, setDepartment] = useState<string>('All');

  const departments = useMemo(
    () => ['All', ...Array.from(new Set(OPPORTUNITIES.map((o) => o.department)))],
    [],
  );

  const visible = useMemo(
    () =>
      department === 'All'
        ? OPPORTUNITIES
        : OPPORTUNITIES.filter((o) => o.department === department),
    [department],
  );

  return (
    <Layout>
      {/* Hero. Was a flat navy block with no imagery anywhere on the page, and
          a drop-shadow on the h1 that had nothing to cast against. */}
      <section
        className="relative flex min-h-[420px] items-center justify-center bg-cover bg-center bg-no-repeat sm:min-h-[500px]"
        style={{ backgroundImage: 'url(/images/consulting-image.webp)' }}
      >
        <div className="absolute inset-0 scrim-hero" />
        <div className="container-premium relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5 text-white/85">Careers</span>
            <h1 className="hero-title mb-5 text-white">Opportunities</h1>
            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
              Join BSM Holdings
            </p>
          </div>
        </div>
      </section>

      {/* Why Join BSM Holdings */}
      <section className="section-spacing bg-white">
        <div className="container-premium">
          <div className="mx-auto max-w-5xl">
            <span className="eyebrow">Why Join BSM Holdings</span>
            <h2 className="section-title mt-5 text-hhp-navy">An operator-led firm</h2>

            {/* Two columns rather than one long stack — the copy is unchanged,
                it simply no longer reads as a single wall. */}
            <div className="mt-10 gap-x-14 border-t border-border pt-10 text-lg leading-relaxed text-hhp-charcoal md:columns-2 [&>p]:mb-6 [&>p]:break-inside-avoid">
              <p>
                BSM Holdings is an operator-led firm. Our leadership team has managed assets, closed
                transactions, and solved real problems in commercial real estate. We don't just
                talk about execution — we build it into everything we do.
              </p>
              <p>
                You'll get range rather than a narrow lane. Because asset management, property
                management, Facility Services and accounting all sit under one roof, you'll see
                how a decision on one side lands on the other — not siloed into one function.
              </p>
              <p>
                Direct accountability and ownership mentality define how we operate. There's no
                call-center model or bureaucratic layers. You'll see how your work directly
                impacts asset performance, client relationships, and firm growth.
              </p>
              <p>
                This is an opportunity to build something meaningful in real estate. We're not a
                legacy firm coasting on reputation. We're building the tools, processes, and
                culture that will define how commercial real estate services work in the next
                decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="section-spacing bg-surface">
        <div className="container-premium">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow">Open Roles</span>
                <h2 className="section-title mt-5 text-hhp-navy">Current opportunities</h2>
              </div>
              <p className="text-sm text-hhp-charcoal/60">
                {visible.length} {visible.length === 1 ? 'role' : 'roles'}
              </p>
            </div>

            {/* Filter by department */}
            <div className="mt-8 flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setDepartment(dept)}
                  aria-pressed={department === dept}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    department === dept
                      ? 'border-brand bg-brand text-white'
                      : 'border-border bg-white text-hhp-charcoal hover:border-hhp-gold hover:text-hhp-navy'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <ul className="mt-10 border-t border-border">
              {visible.map((opportunity) => (
                <li key={opportunity.id}>
                  <div className="group border-b border-border border-l-2 border-l-transparent py-8 pl-6 pr-2 transition-colors hover:border-l-hhp-gold hover:bg-white">
                    <h3 className="font-display text-xl font-semibold text-hhp-navy sm:text-2xl">
                      {opportunity.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-hhp-charcoal/70">
                      <span className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-hhp-gold" />
                        {opportunity.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-hhp-gold" />
                        {opportunity.location}
                      </span>
                    </div>

                    <p className="mt-4 max-w-3xl leading-relaxed text-hhp-charcoal">
                      {opportunity.description}
                    </p>

                    {/* Was labelled "View Details" but went to /contact, and no
                        detail pages exist. The analytics event already called it
                        an application, so the label now matches both. */}
                    <Link
                      to="/contact"
                      className="tap mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy transition-colors hover:text-hhp-gold"
                      onClick={() => {
                        trackButtonClick(`apply_${opportunity.id}`, 'opportunities_listing');
                        trackLinkClick(`Apply - ${opportunity.title}`, '/contact');
                      }}
                    >
                      Apply for this role
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA. Every other page closes on navy; this one closed on white
          and simply faded out. */}
      <section className="section-spacing bg-brand text-white">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5 justify-center text-hhp-gold">Ready to apply?</span>
            <h2 className="section-title text-white">Don't see your role?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              If you don't see a position that matches your background, we still want to hear from
              you. We're always looking for talented operators, analysts, and builders who share
              our approach to real estate.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy transition-colors hover:bg-hhp-gold hover:text-hhp-navy-deep"
                onClick={() => {
                  trackButtonClick('submit_application', 'opportunities_cta');
                  trackLinkClick('Submit Application', '/contact');
                }}
              >
                Submit application
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:careers@bsmholdings.com"
                className="tap text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                onClick={() => trackLinkClick('Email Careers', 'mailto:careers@bsmholdings.com')}
              >
                careers@bsmholdings.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Opportunities;
