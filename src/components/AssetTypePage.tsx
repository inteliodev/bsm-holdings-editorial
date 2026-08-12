import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import AssetMark, { type AssetMarkName } from '@/components/AssetMark';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

/**
 * Shared template for the six asset-type pages.
 *
 * The previous version put the substance of the page — six service blocks with
 * their descriptions and bullets — inside a collapsed accordion, so a visitor
 * saw six uppercase labels and nothing else. It also carried six hand-copied
 * JSX blocks, one per service, which was a third of the file.
 *
 * Now the services are laid out open, from an array. Two sections were added
 * because nothing on the page was specific to the asset class: `metrics` (the
 * numbers that actually differ by class) and `proof` (what HHP operates or
 * underwrites in that class). The old "Insights" band was three fabricated
 * article teasers per page — 18 in total, all dated late 2024, every one
 * linking to /insights regardless of its title — and is gone.
 */

type ServiceEntry = string | { description: string; services: string[] };

/** Rendering order, and the default label for each slot. */
const SERVICE_ORDER = [
  ['propertyManagement', 'Property Management'],
  ['advisorySiteSelection', 'Advisory & Site Selection'],
  ['investmentSales', 'Investment Sales'],
  ['landlordRepresentation', 'Landlord Representation'],
  ['tenantRepresentation', 'Tenant Representation'],
  ['acquisitionsDevelopment', 'Acquisitions & Development'],
] as const;

type ServiceKey = (typeof SERVICE_ORDER)[number][0];

interface AssetTypePageProps {
  // Hero
  heroImage: string;
  title: string;
  tagline: string;
  /** Short label above the h1, e.g. "Asset Class". */
  eyebrow?: string;
  heroButtonText?: string;

  /** Line mark for this class, shown beside the market context. */
  mark: AssetMarkName;

  // Market context
  marketText: string;
  marketTitle?: string;
  valueProposition: string;
  valuePropositionTitle?: string;

  /**
   * The numbers that actually differ by asset class. This is what makes each
   * page specific rather than the same template with one word swapped.
   */
  metrics?: Array<{ label: string; detail: string }>;
  metricsTitle?: string;
  metricsIntro?: string;

  // Services
  services: Record<ServiceKey, ServiceEntry>;
  servicesTitle?: string;
  servicesSubtitle?: string;
  serviceTitles?: Partial<Record<ServiceKey, string>>;

  // Advantage
  technologyAdvantages?: Array<{
    icon?: ReactNode;
    title: string;
    description: string;
  }>;
  technologyTitle?: string;
  technologySubtitle?: string;

  /**
   * What HHP actually operates or underwrites in this class. Honest by
   * construction: `operating` states a real portfolio, `seeking` states the
   * criteria instead. Never claim an asset the firm does not hold.
   */
  proof?: {
    kind: 'operating' | 'seeking';
    image: string;
    imageAlt: string;
    title: string;
    body: string;
    points?: string[];
    stats?: Array<{ value: string; label: string }>;
    href?: string;
    hrefLabel?: string;
  };

  /** Closing band. */
  ctaTitle?: string;
  ctaBody?: string;
}

const AssetTypePage = ({
  heroImage,
  title,
  tagline,
  eyebrow,
  heroButtonText,
  mark,
  marketText,
  marketTitle,
  valueProposition,
  valuePropositionTitle,
  metrics,
  metricsTitle,
  metricsIntro,
  services,
  servicesTitle,
  servicesSubtitle,
  serviceTitles,
  technologyAdvantages,
  technologyTitle,
  technologySubtitle,
  proof,
  ctaTitle,
  ctaBody,
}: AssetTypePageProps) => {
  const navigate = useNavigate();
  const slug = title.toLowerCase().replace(/\s+/g, '_');

  /**
   * The in-page contact band was conditional on props no page ever supplied, so
   * scrolling alone would have been another button that goes nowhere. The
   * closing band is unconditional now, but keep the fallback: scroll if the
   * target is really there, otherwise go to the contact page.
   */
  const goToContact = () => {
    const section = document.getElementById('asset-contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    trackButtonClick('asset_type_hero_cta', `${slug}_hero`);
    navigate('/contact');
  };

  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[560px] items-center justify-center bg-cover bg-center bg-no-repeat py-24"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient scrim rather than a flat navy wash, which muted the photo. */}
        <div className="scrim-hero absolute inset-0" aria-hidden="true" />
        <div className="container-premium relative z-10 text-center text-white">
          <span className="eyebrow mb-6 justify-center text-hhp-gold">
            {eyebrow || 'Asset Class'}
          </span>
          <h1 className="hero-title text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            {title}
          </h1>
          {tagline && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              {tagline}
            </p>
          )}
          <button
            type="button"
            onClick={goToContact}
            className="mt-9 inline-flex min-h-[52px] items-center justify-center gap-2 bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy shadow-elegant transition-all duration-300 hover:bg-hhp-gold hover:text-hhp-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hhp-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
          >
            {heroButtonText || 'Talk to Our Experts'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* ── Market context ───────────────────────────────────────────────── */}
      <section className="section-spacing bg-white">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-5">{marketTitle || 'Market Context'}</span>
              <h2 className="section-title text-hhp-navy">
                What this class actually demands
              </h2>
              {marketText && (
                <p className="mt-7 text-lg leading-relaxed text-hhp-charcoal">{marketText}</p>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="border-l-2 border-hhp-gold pl-6 sm:pl-8">
                <div className="mb-6 text-hhp-navy/70">
                  <AssetMark mark={mark} />
                </div>
                <h3 className="font-display text-xl font-semibold text-hhp-navy">
                  {valuePropositionTitle || 'Where HHP fits'}
                </h3>
                <p className="mt-4 leading-relaxed text-hhp-charcoal">{valueProposition}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we watch ────────────────────────────────────────────────── */}
      {metrics && metrics.length > 0 && (
        <section className="section-spacing bg-hhp-navy-deep text-white">
          <div className="container-premium">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="eyebrow mb-5 justify-center text-hhp-gold">
                {metricsTitle || 'What We Watch'}
              </span>
              <h2 className="section-title text-white">
                The numbers that decide performance here
              </h2>
              {metricsIntro && (
                <p className="mt-6 text-lg leading-relaxed text-white/70">{metricsIntro}</p>
              )}
            </div>

            <ol className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {metrics.map((metric, index) => (
                <li key={metric.label} className="border-t border-white/15 pt-6">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-semibold text-hhp-gold"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">
                    {metric.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{metric.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="section-spacing bg-surface">
        <div className="container-premium">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="eyebrow mb-5 justify-center">What We Do Here</span>
            <h2 className="section-title text-hhp-navy">
              {servicesTitle || `Integrated services for ${title}`}
            </h2>
            {servicesSubtitle && (
              <p className="mt-6 text-lg leading-relaxed text-hhp-charcoal">{servicesSubtitle}</p>
            )}
          </div>

          {/* Open, not an accordion. The descriptions and bullets are the
              substance of the page; hiding all six behind closed rows left a
              column of uppercase labels and nothing to read. */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {SERVICE_ORDER.map(([key, defaultLabel]) => {
              const entry = services[key];
              if (!entry) return null;
              const description = typeof entry === 'string' ? entry : entry.description;
              const bullets = typeof entry === 'string' ? [] : entry.services;

              return (
                <div
                  key={key}
                  className="platform-card-hover flex flex-col border border-border bg-white p-7 sm:p-8"
                >
                  <h3 className="font-display text-lg font-semibold text-hhp-navy">
                    {serviceTitles?.[key] || defaultLabel}
                  </h3>
                  <p className="mt-3 leading-relaxed text-hhp-charcoal">{description}</p>
                  {bullets.length > 0 && (
                    <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                      {bullets.map((service) => (
                        <li
                          key={service}
                          className="flex items-start gap-3 text-sm leading-relaxed text-hhp-charcoal"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] h-px w-3.5 flex-shrink-0 bg-hhp-gold"
                          />
                          {service}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The HHP advantage ────────────────────────────────────────────── */}
      {technologyAdvantages && technologyAdvantages.length > 0 && (
        <section className="section-spacing bg-white">
          <div className="container-premium">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="eyebrow mb-5 justify-center">Why HHP</span>
              <h2 className="section-title text-hhp-navy">
                {technologyTitle || `The HHP advantage for ${title}`}
              </h2>
              {technologySubtitle && (
                <p className="mt-6 text-lg leading-relaxed text-hhp-charcoal">
                  {technologySubtitle}
                </p>
              )}
            </div>

            <ol className="mx-auto max-w-5xl">
              {technologyAdvantages.map((advantage, index) => (
                <li
                  key={advantage.title}
                  className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-8 md:py-10"
                >
                  <div className="md:col-span-4">
                    <span
                      aria-hidden="true"
                      className="font-display text-3xl font-semibold leading-none text-hhp-gold"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-hhp-navy">
                      {advantage.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-hhp-charcoal md:col-span-8 md:pt-1">
                    {advantage.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ── Proof ────────────────────────────────────────────────────────── */}
      {proof && (
        <section className="section-spacing bg-surface">
          <div className="container-premium">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <img
                src={proof.image}
                alt={proof.imageAlt}
                className="aspect-[4/3] w-full bg-surface-sunken object-cover"
                loading="lazy"
                decoding="async"
              />

              <div>
                <span className="eyebrow mb-5">
                  {proof.kind === 'operating' ? 'What We Operate' : 'What We Underwrite For'}
                </span>
                <h2 className="section-title text-hhp-navy">{proof.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-hhp-charcoal">{proof.body}</p>

                {proof.points && proof.points.length > 0 && (
                  <ul className="mt-7 space-y-3">
                    {proof.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 leading-relaxed text-hhp-charcoal"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6rem] h-1 w-1 flex-shrink-0 rounded-full bg-hhp-gold"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {proof.stats && proof.stats.length > 0 && (
                  <div className="mt-9 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-7">
                    {proof.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="font-display text-3xl font-semibold leading-none text-hhp-navy">
                          {stat.value}
                        </div>
                        <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-hhp-charcoal/55">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {proof.href && (
                  <Link
                    to={proof.href}
                    className="tap mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy transition-colors hover:text-hhp-gold"
                    onClick={() => {
                      trackButtonClick(`asset_type_proof_${slug}`, `${slug}_proof`);
                      trackLinkClick(proof.hrefLabel || 'View', proof.href!);
                    }}
                  >
                    {proof.hrefLabel || 'See the portfolio'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Closing band ─────────────────────────────────────────────────── */}
      <section id="asset-contact" className="section-spacing bg-hhp-navy text-white">
        <div className="container-premium text-center">
          <h2 className="section-title mx-auto max-w-3xl text-white">
            {ctaTitle || `Talk to us about your ${title.toLowerCase()} asset`}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {ctaBody ||
              'Property management, every facility trade and the accounting sit under one roof, so one firm answers for the result.'}
          </p>

          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center gap-2 bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy shadow-elegant transition-all duration-300 hover:bg-hhp-gold hover:text-hhp-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hhp-gold focus-visible:ring-offset-2 focus-visible:ring-offset-hhp-navy sm:w-auto"
              onClick={() => {
                trackButtonClick(`asset_type_cta_contact_${slug}`, `${slug}_cta`);
                trackLinkClick('Start a conversation', '/contact');
              }}
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services/property-management"
              className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center gap-2 border border-white/70 px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-hhp-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hhp-navy sm:w-auto"
              onClick={() => {
                trackButtonClick(`asset_type_cta_services_${slug}`, `${slug}_cta`);
                trackLinkClick('How we operate', '/services/property-management');
              }}
            >
              How we operate
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AssetTypePage;
