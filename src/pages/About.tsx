import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { Mail, UserRound } from 'lucide-react';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const tyImage = '/brand/ty-headshot.png';
/** Same strong multifamily exterior as PM — building-focused crop, not yard-dominant. */
const ABOUT_HERO = '/images/multifamily-image-trendy.jpg';

const PRINCIPAL = {
  name: 'Ty McClellan',
  title: 'Principal',
  email: 'ty@bsmholdings.com',
  image: tyImage,
  /**
   * Role-focused bio from verified site facts only.
   * No invented years, credentials, prior employers, founding dates, or market tenure.
   */
  bio: [
    'Ty McClellan is Principal of BSM Holdings, a residential property management firm serving the Oklahoma City metro. He works directly with property owners and with the management team that handles day-to-day operations for rental homes across the area.',
    'Owners work with Ty and the team on leasing, rent collection, maintenance coordination, and monthly reporting. Communication stays straightforward for both owners and residents — clear updates on occupancy, collections, expenses, and open items.',
    'BSM Holdings manages single-family homes, duplexes, townhomes, and apartments throughout the Oklahoma City metro. Ty stays involved in owner relationships so reporting and decisions stay connected to the work on each property.',
  ],
};

/**
 * Three operating principles — open columns, one-line descriptions from existing accurate copy.
 * No numbered markers, no cards.
 */
const OPERATING_PRINCIPLES = [
  {
    title: 'Direct Communication',
    description: 'Owners and residents hear from a direct point of contact.',
  },
  {
    title: 'Property Oversight',
    description:
      'Leasing, rent collection, maintenance, and reporting stay with the same team.',
  },
  {
    title: 'Clear Reporting',
    description: 'Monthly statements and notes owners can act on.',
  },
];

const TEAM_PLACEHOLDERS = [
  {
    name: 'Team member',
    role: 'Role forthcoming',
    description: 'This seat will be filled with a real roster entry.',
  },
  {
    name: 'Name forthcoming',
    role: 'Role forthcoming',
    description: 'Real team details will be added when the roster is ready.',
  },
  {
    name: 'Team member',
    role: 'Role forthcoming',
    description: 'This temporary placeholder will become a real team profile.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* 1. About BSM Holdings — navy + multifamily split */}
      <section className="flex flex-col md:min-h-[420px] md:flex-row">
        <div className="flex w-full items-center justify-start bg-brand-deep px-6 py-12 sm:px-8 md:w-[42%] md:py-16 lg:px-12">
          <div className="max-w-md">
            <span className="eyebrow eyebrow-bare text-hhp-gold-soft">About</span>
            <h1 className="hero-title mb-4 mt-4 text-white">About BSM Holdings</h1>
            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              Residential property management in the Oklahoma City metro — clear owner
              reporting and direct resident support.
            </p>
          </div>
        </div>
        <div
          className="relative min-h-[240px] w-full flex-1 bg-cover bg-no-repeat sm:min-h-[300px] md:min-h-0 md:w-[58%]"
          style={{
            backgroundImage: `url(${ABOUT_HERO})`,
            backgroundPosition: 'center 40%',
          }}
          role="img"
          aria-label="Modern multifamily residential building exterior"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/25 to-transparent" />
        </div>
      </section>

      {/* 2. Leadership — Ty featured on warm white. */}
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
              <p className="mt-1 text-base font-medium text-hhp-navy/80">
                {PRINCIPAL.title}
              </p>
              <div className="mt-8 space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                {PRINCIPAL.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <a
                href={`mailto:${PRINCIPAL.email}`}
                className="tap mt-8 inline-flex items-center gap-2 text-sm font-medium text-hhp-navy transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {PRINCIPAL.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Team — temporary roster slots, not invented staff. */}
      <section className="border-t border-border bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-premium">
          <span className="eyebrow">Our Team</span>
          <h2 className="mt-4 font-display text-display-md font-semibold text-hhp-navy">
            The people behind the work
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
            {TEAM_PLACEHOLDERS.map((member, index) => (
              <article key={`${member.name}-${index}`} className="text-left">
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-surface-sunken text-hhp-navy/55"
                  aria-hidden="true"
                >
                  <UserRound className="h-9 w-9 stroke-[1.5]" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-hhp-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-hhp-navy/60">{member.role}</p>
                <p className="mt-4 max-w-xs text-base leading-relaxed text-muted-foreground">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Operate — three open columns, no numbers, no intro paragraph */}
      <section className="border-t border-border bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy">How We Operate</h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
            {OPERATING_PRINCIPLES.map((principle, index) => (
              <div
                key={principle.title}
                className={`md:px-8 lg:px-10 ${
                  index > 0 ? 'md:border-l md:border-border' : 'md:pl-0'
                } ${index === OPERATING_PRINCIPLES.length - 1 ? 'md:pr-0' : ''}`}
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight text-hhp-navy sm:text-[1.65rem]">
                  {principle.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-hhp-charcoal">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact — Request a Proposal only (Careers stays footer-only) */}
      <section className="border-t border-border bg-background py-12 sm:py-14">
        <div className="container-premium">
          <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-semibold text-hhp-navy sm:text-2xl">
                Discuss Your Property With Our Team
              </h2>
              <p className="mt-2 text-base leading-relaxed text-hhp-charcoal">
                Tell us about your rental and we will follow up with a clear proposal.
              </p>
            </div>
            <div className="flex shrink-0">
              <Link
                to="/contact?inquiry=owner"
                className="btn-hero"
                onClick={() => {
                  trackButtonClick('request_a_proposal', 'about_close');
                  trackLinkClick('Request a Proposal', '/contact?inquiry=owner');
                }}
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
