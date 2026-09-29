import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { Mail } from 'lucide-react';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const tyImage = '/brand/ty-headshot.png';
/** Local residential exterior — not claimed as BSM-managed inventory. */
const ABOUT_HERO = '/images/properties/grounds-oak-tree.webp';

const PRINCIPAL = {
  name: 'Ty McClellan',
  title: 'Principal',
  email: 'ty@bsmholdings.com',
  image: tyImage,
  bio: [
    'Ty McClellan is Principal of BSM Holdings, a residential property management firm serving the Oklahoma City metro.',
    'Ty works directly with owners and residents — clear reporting, responsive maintenance coordination, and straightforward communication.',
  ],
};

/**
 * Three operating principles drawn from existing accurate copy.
 */
const OPERATING_PRINCIPLES = [
  {
    title: 'Clear Communication',
    lead: 'Owners and residents hear from a direct point of contact.',
    body: 'Questions get straight answers. Updates cover what changed and what happens next.',
  },
  {
    title: 'Hands-On Management',
    lead: 'Leasing, rent collection, maintenance, and reporting stay with the same team.',
    body: 'Day-to-day work is handled locally in the Oklahoma City metro.',
  },
  {
    title: 'Readable Reporting',
    lead: 'Monthly statements and notes owners can act on.',
    body: 'Occupancy, collections, expenses, and open items are easy to follow.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Intro — compact split; local property imagery (not NY skyline) */}
      <section className="flex flex-col md:min-h-[420px] md:flex-row">
        <div className="flex w-full items-center justify-start bg-brand-deep px-6 py-12 sm:px-8 md:w-[42%] md:py-16 lg:px-12">
          <div className="max-w-md">
            <span className="eyebrow eyebrow-bare text-hhp-gold-soft">About</span>
            <h1 className="hero-title mb-4 mt-4 text-white">About Us</h1>
            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              Residential property management in the Oklahoma City metro — clear owner
              reporting and direct resident support.
            </p>
          </div>
        </div>
        <div
          className="relative min-h-[240px] w-full flex-1 bg-cover bg-center bg-no-repeat sm:min-h-[300px] md:min-h-0 md:w-[58%]"
          style={{ backgroundImage: `url(${ABOUT_HERO})` }}
          role="img"
          aria-label="Oklahoma residential property exterior"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/25 to-transparent" />
        </div>
      </section>

      {/* Principal + bio (shown immediately — no toggle) */}
      <section className="bg-background py-14 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <img
                src={PRINCIPAL.image}
                alt={`${PRINCIPAL.name}, ${PRINCIPAL.title}`}
                className="aspect-[4/5] w-full max-w-md border border-border object-cover object-top bg-surface"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <span className="eyebrow">Leadership</span>
              <h2 className="mt-4 font-display text-display-md font-semibold text-hhp-navy">
                {PRINCIPAL.name}
              </h2>
              <p className="mt-1 text-base font-medium italic text-hhp-navy/80">
                {PRINCIPAL.title}
              </p>
              <a
                href={`mailto:${PRINCIPAL.email}`}
                className="tap mt-4 inline-flex items-center gap-2 text-sm font-medium text-hhp-navy transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {PRINCIPAL.email}
              </a>
              <div className="mt-8 space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                {PRINCIPAL.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company story — existing accurate copy only */}
      <section className="border-t border-border bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Our story</span>
            <h2 className="section-title mt-4 text-hhp-navy">Why BSM Holdings</h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-hhp-charcoal">
              <p>
                BSM Holdings manages single-family homes, duplexes, townhomes,
                and apartments throughout the Oklahoma City metro. Our team
                handles daily operations, supports residents, and keeps owners
                informed about their properties.
              </p>
              <p>
                We focus on the work that keeps rental properties running:
                finding tenants, collecting rent, coordinating repairs, and
                maintaining accurate financial records. Our management team
                coordinates repairs and keeps owners informed about costs and
                progress.
              </p>
              <p>
                Owners have a direct point of contact for clear reporting and
                resident support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="bg-surface py-14 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow eyebrow-bare justify-center">Operating principles</span>
            <h2 className="section-title mt-4 text-hhp-navy">How we operate</h2>
            <p className="mt-5 text-lg leading-relaxed text-hhp-charcoal">
              Leasing, operations, maintenance, and accounting are handled by
              the same team. Owners see occupancy, collections, budget
              variances, and open items as they change.
            </p>
          </div>

          <ol className="mx-auto mt-12 max-w-4xl border-t border-border">
            {OPERATING_PRINCIPLES.map((principle, index) => (
              <li
                key={principle.title}
                className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-border py-8 md:grid-cols-12 md:py-9"
              >
                <div className="flex items-start gap-4 md:col-span-4">
                  <span
                    aria-hidden="true"
                    className="font-display text-3xl font-semibold leading-none tracking-tight text-brand/35"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="pt-1 font-display text-xl font-semibold text-hhp-navy">
                    {principle.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg font-medium leading-relaxed text-hhp-navy">
                    {principle.lead}
                  </p>
                  <p className="mt-2 leading-relaxed text-hhp-charcoal/80">
                    {principle.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Modest recruiting close + contact CTA */}
      <section className="border-t border-border bg-background py-12 sm:py-14">
        <div className="container-premium">
          <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-semibold text-hhp-navy sm:text-2xl">
                Talk with our team
              </h2>
              <p className="mt-2 text-base leading-relaxed text-hhp-charcoal">
                Request a proposal for property management, or see openings if you
                are interested in joining the team.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-hero"
                onClick={() => {
                  trackButtonClick('request_a_proposal', 'about_close');
                  trackLinkClick('Request a Proposal', '/contact');
                }}
              >
                Request a Proposal
              </Link>
              <Link
                to="/opportunities"
                className="tap text-sm font-medium text-hhp-navy underline-offset-4 hover:underline"
                onClick={() => {
                  trackButtonClick('view_opportunities', 'about_close');
                  trackLinkClick('Careers', '/opportunities');
                }}
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
