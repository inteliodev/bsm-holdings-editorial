import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout/Layout';
import { REPORTING_CAPABILITIES } from '@/data/capabilities';
import { MANAGEMENT_CLASSES } from '@/data/assetTypes';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

/**
 * The umbrella capability.
 *
 * This page did not exist. Asset management is the firm's whole positioning —
 * it is the first layer of CapabilityStack, the subject of the Home hero, and
 * the reason the other capabilities are described as sitting beneath something —
 * and the only destination the site had for it was `/about`, a company page.
 * Every other capability had a page saying what it does.
 *
 * Built in the current design language (scrim-hero, eyebrow, section-title,
 * sections rendered open) rather than the older services-page pattern of a flat
 * navy wash and a collapsed accordion. The substance of a capability page should
 * not be behind a closed row.
 */

/** What the umbrella actually does, as distinct from the layers beneath it. */
const FUNCTIONS = [
  {
    title: 'A business plan per asset',
    body: 'Every asset gets a written plan: what it should earn, what it will cost to hold, what has to happen this year, and what decision the plan is building toward. Operations are then run against that document rather than against the last twelve months.',
  },
  {
    title: 'Underwriting from the expense side',
    body: 'We model what a building costs to run using what the work actually costs us, because our own personnel perform it. That is a different number from a broker’s expense assumption, and it is the one that survives a buyer’s diligence.',
  },
  {
    title: 'Capital planning against condition',
    body: 'Roof, mechanical systems, parking and envelope carried with their real remaining life, so replacement is scheduled and funded rather than discovered. The condition data comes from our own work orders, not a survey commissioned once.',
  },
  {
    title: 'Performance oversight',
    body: 'Occupancy, collections, expense variance and open items reviewed against the plan on a set cadence. Where the asset is off plan, the same firm that reports it is the firm that has to fix it.',
  },
  {
    title: 'Owner reporting with commentary',
    body: 'Numbers reach owners as they land, with written explanation of what moved and what is being done about it. A report that only shows variance leaves the owner to guess at the cause.',
  },
  {
    title: 'Hold, refinance or sell',
    body: 'Disposition and refinance analysis run on the same operating data as the business plan, so the recommendation is grounded in how the asset actually performs rather than in a pitch.',
  },
];

const AssetManagement = () => {
  return (
    <>
      <Helmet>
        <title>Asset Management | BSM Holdings</title>
        <meta
          name="description"
          content="Asset management is the umbrella at BSM Holdings: business plan, underwriting, capital planning and owner reporting, with property management, the facility trades and accounting reporting into it."
        />
        <meta property="og:title" content="Asset Management | BSM Holdings" />
        <meta
          property="og:description"
          content="Strategy, underwriting, capital planning and owner reporting — with property management, facility trades and accounting reporting into the same plan."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bsmholdings.com/services/asset-management" />
        <meta property="og:image" content="https://bsmholdings.com/brand/bsm-logo.png" />
        <link rel="canonical" href="https://bsmholdings.com/services/asset-management" />
      </Helmet>

      <Layout>
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section
          className="relative flex min-h-[520px] items-center justify-center bg-cover bg-center bg-no-repeat py-24"
          style={{ backgroundImage: 'url(/images/asset-management-image.jpg)' }}
        >
          <div className="scrim-hero absolute inset-0" aria-hidden="true" />
          <div className="container-premium relative z-10 text-center text-white">
            <span className="eyebrow mb-6 justify-center text-hhp-gold">Capability</span>
            <h1 className="hero-title text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
              Asset Management
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              Strategy, underwriting, capital planning, and owner reporting — with every operating layer reporting into it.
            </p>
          </div>
        </section>

        {/* ── What it means here ─────────────────────────────────────────── */}
        <section className="section-spacing bg-white">
          <div className="container-premium">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <span className="eyebrow mb-5">Our Role</span>
                <h2 className="section-title text-hhp-navy">
                  Managing the asset, not the building
                </h2>
                <div className="mt-7 space-y-5 text-lg leading-relaxed text-hhp-charcoal">
                  <p>
                    Most owners assemble asset management from parts. A manager
                    runs the property, a contractor handles the work, a bookkeeper
                    closes the month, and a broker appears when something is being
                    bought or sold. Each answers to someone else, and the owner is
                    left holding the only complete view of the asset.
                  </p>
                  <p>
                    BSM Holdings holds that view instead. Strategy, leasing, operations,
                    maintenance, compliance and accounting are directed by the same team
                    and reported through one system, so a question about
                    performance has one place to go and one answer waiting.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="border-l-2 border-hhp-gold pl-6 sm:pl-8">
                  <h3 className="font-display text-xl font-semibold text-hhp-navy">
                    Why it is the umbrella
                  </h3>
                  <p className="mt-4 leading-relaxed text-hhp-charcoal">
                    Property management, the facility trades and the accounting are
                    capabilities beneath asset management, not businesses beside it.
                    They report into the same plan and the same principal, which is
                    what makes a single set of numbers possible at all.
                  </p>
                  <p className="mt-4 leading-relaxed text-hhp-charcoal">
                    When a manager, a contractor and an accountant work for three
                    firms, reconciling their versions of the year is the owner’s
                    job. Here it is ours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What we do ─────────────────────────────────────────────────── */}
        <section className="section-spacing bg-hhp-navy-deep text-white">
          <div className="container-premium">
            <span className="eyebrow mb-5 text-hhp-gold">What We Do</span>
            <h2 className="section-title text-white">The work under the umbrella</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Distinct from the day-to-day operation, which is property
              management&apos;s job. This is the layer that decides what the
              day-to-day is aiming at.
            </p>

            <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {FUNCTIONS.map((fn, i) => (
                <li key={fn.title} className="border-t border-white/15 pt-6">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {fn.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/70">{fn.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── What reports into it ───────────────────────────────────────── */}
        <section className="section-spacing bg-surface">
          <div className="container-premium">
            <span className="eyebrow mb-5">Beneath the Umbrella</span>
            <h2 className="section-title text-hhp-navy">
              The layers that report into it
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hhp-charcoal">
              Each is staffed and operated by BSM Holdings. None of them is a vendor
              relationship we coordinate on an owner&apos;s behalf.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {REPORTING_CAPABILITIES.map((capability) => (
                <Link
                  key={capability.id}
                  to={capability.href}
                  className="platform-card-hover group flex flex-col border border-hhp-navy/10 bg-white p-6 sm:p-7"
                  onClick={() => {
                    trackButtonClick(`capability_${capability.id}`, 'asset_management_layers');
                    trackLinkClick(capability.name, capability.href);
                  }}
                >
                  <span className="eyebrow eyebrow-bare mb-3">{capability.role}</span>
                  <h3 className="font-display text-xl font-semibold text-hhp-navy">
                    {capability.name}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-hhp-charcoal">
                    {capability.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-hhp-navy transition-colors group-hover:text-hhp-gold">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── The payoff ─────────────────────────────────────────────────── */}
        <section className="section-spacing bg-white">
          <div className="container-premium">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="eyebrow mb-5">What It Changes</span>
                <h2 className="section-title text-hhp-navy">
                  Cost you can see at the line item
                </h2>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-5 text-lg leading-relaxed text-hhp-charcoal">
                  <p>
                    Because our own personnel perform the work, a repair resolves to
                    labour hours, materials and time on site rather than to a vendor
                    invoice with margin already priced into it. There is no
                    subcontractor markup on work we self-perform, and specialty
                    vendors are engaged only where licensing requires it.
                  </p>
                  <p>
                    Because the systems producing the data are built and maintained
                    by BSM Holdings, that cost reaches the owner as it lands rather than in a
                    month-end summary. Underwriting, the capital plan and the
                    quarterly report all draw on the same record.
                  </p>
                  <p>
                    It is the same argument in three places: the firm that does the
                    work is the firm that reports the cost, so the number is not a
                    reconstruction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Where it applies ───────────────────────────────────────────── */}
        <section className="section-spacing bg-surface">
          <div className="container-premium">
            <span className="eyebrow mb-5">Where It Applies</span>
            <h2 className="section-title text-hhp-navy">
              The classes our operation is built around
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hhp-charcoal">
              Each class is underwritten and held on different numbers. These pages
              set out what we watch in each one.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {MANAGEMENT_CLASSES.map((assetClass) => (
                <Link
                  key={assetClass.slug}
                  to={assetClass.href}
                  className="tap group inline-flex min-h-[48px] items-center gap-2 border border-hhp-navy/15 bg-white px-5 py-3 font-display font-semibold text-hhp-navy transition-colors duration-300 hover:border-hhp-gold hover:text-hhp-gold"
                  onClick={() => {
                    trackButtonClick(
                      `asset_class_${assetClass.slug.replace(/-/g, '_')}`,
                      'asset_management_classes',
                    );
                    trackLinkClick(assetClass.label, assetClass.href);
                  }}
                >
                  {assetClass.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>

            <Link
              to="/asset-types"
              className="tap group mt-8 inline-flex items-center gap-2 font-display font-semibold text-hhp-navy transition-colors hover:text-hhp-gold"
              onClick={() => {
                trackButtonClick('all_asset_classes', 'asset_management_classes');
                trackLinkClick('All asset classes', '/asset-types');
              }}
            >
              All asset classes, including brokerage coverage
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* ── Closing band ───────────────────────────────────────────────── */}
        <section className="section-spacing bg-brand text-white">
          <div className="container-premium text-center">
            <h2 className="section-title mx-auto max-w-3xl text-white">
              Tell us what the asset is meant to do
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Send us the rent roll and the last twelve months of operating
              statements. We will tell you what we think it costs to run, where the
              number should move, and what we would do first.
            </p>

            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center gap-2 bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy shadow-elegant transition-all duration-300 hover:bg-hhp-gold hover:text-hhp-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hhp-gold focus-visible:ring-offset-2 focus-visible:ring-offset-hhp-navy sm:w-auto"
                onClick={() => {
                  trackButtonClick('asset_management_cta_contact', 'asset_management_cta');
                  trackLinkClick('Start a conversation', '/contact');
                }}
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/technology"
                className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center gap-2 border border-white/70 px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-hhp-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hhp-navy sm:w-auto"
                onClick={() => {
                  trackButtonClick('asset_management_cta_technology', 'asset_management_cta');
                  trackLinkClick('See the reporting', '/technology');
                }}
              >
                See the reporting
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AssetManagement;
