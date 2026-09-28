import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout/Layout';
import AssetMark from '@/components/AssetMark';
import { ASSET_CLASSES, MANAGEMENT_CLASSES } from '@/data/assetTypes';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

/**
 * The asset classes index.
 *
 * Rebuilt around the two tracks. The previous version was on the retired design
 * system — a flat `bg-hhp-navy/60` hero wash, an uppercase letter-spaced <h2>,
 * and the headline "Every Asset Class, One Integrated Platform", which is the
 * SaaS-vendor voice the site does not use. Its per-class copy also sat inside a
 * `group-hover:opacity-100` overlay, so on any touch device the page was six
 * photographs and nothing else.
 *
 * Class names and copy come from src/data/assetTypes.ts. Do not hand-write them
 * here again — five surfaces had drifted into five different label sets.
 */

const AssetTypes = () => {
  return (
    <>
      <Helmet>
        <title>BSM Holdings | Asset Classes</title>
        <meta
          name="description"
          content="How BSM Holdings works across multifamily, affordable housing, senior housing, office, retail and industrial — self-performed facility trades, in-house systems, and line-item cost visibility."
        />
        <meta
          name="keywords"
          content="asset classes, multifamily, affordable housing, senior housing, office, retail, industrial, property management, commercial real estate Oklahoma"
        />
        <meta property="og:title" content="BSM Holdings | Asset Classes" />
        <meta
          property="og:description"
          content="How BSM Holdings works across multifamily, affordable housing, senior housing, office, retail and industrial — self-performed facility trades, in-house systems, and line-item cost visibility."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bsmholdings.com/asset-types" />
        <meta property="og:image" content="https://bsmholdings.com/brand/bsm-logo.png" />
        <link rel="canonical" href="https://bsmholdings.com/asset-types" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BSM Holdings | Asset Classes" />
        <meta
          name="twitter:description"
          content="Multifamily, affordable housing, senior housing, office, retail and industrial — how BSM Holdings works in each."
        />
        <meta name="twitter:image" content="https://bsmholdings.com/brand/bsm-logo.png" />
      </Helmet>

      <Layout>
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section
          className="relative flex min-h-[480px] items-center justify-center bg-cover bg-center bg-no-repeat py-24"
          style={{ backgroundImage: 'url(/images/asset-types-image.webp)' }}
        >
          {/* Gradient scrim rather than a flat navy wash, which muted the photo. */}
          <div className="scrim-hero absolute inset-0" aria-hidden="true" />
          <div className="container-premium relative z-10 text-center text-white">
            <span className="eyebrow mb-6 justify-center text-hhp-gold">Asset Classes</span>
            <h1 className="hero-title text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
              The classes we work in
            </h1>
          </div>
        </section>

        {/* ── Intro ──────────────────────────────────────────────────────── */}
        <section className="bg-white py-14 sm:py-20">
          <div className="container-premium">
            <div className="mx-auto max-w-3xl">
              <p className="text-xl leading-snug font-heading text-hhp-navy sm:text-2xl">
                Two tracks, six classes.
              </p>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  Our asset management operation is built around multifamily,
                  affordable housing, senior housing and office — the classes where
                  we run leasing, the facility trades and the accounting ourselves,
                  under one firm and one system of record.
                </p>
                <p>
                  Brokerage and advisory run wider, across all six. We underwrite
                  from the expense side because we operate buildings, which is what
                  holds up under a buyer&apos;s diligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Asset management ───────────────────────────────────────────── */}
        <section className="section-spacing bg-surface">
          <div className="container-premium">
            <span className="eyebrow mb-5">Asset Management</span>
            <h2 className="section-title text-hhp-navy">
              The classes our operation is built around
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hhp-charcoal">
              Property management, every facility trade and the accounting sit under
              one roof, so one firm answers for how the asset performs.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-0 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6 -mx-4 sm:mx-0">
              {MANAGEMENT_CLASSES.map((assetClass) => (
                <Link
                  key={assetClass.slug}
                  to={assetClass.href}
                  className="platform-card-hover group relative flex aspect-[3/4] w-full flex-col overflow-hidden p-0 sm:aspect-auto sm:min-h-[440px] lg:min-h-[460px]"
                  style={{
                    backgroundImage: `url(${assetClass.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  onClick={() => {
                    trackButtonClick(
                      `asset_class_${assetClass.slug.replace(/-/g, '_')}`,
                      'asset_types_management',
                    );
                    trackLinkClick(assetClass.label, assetClass.href);
                  }}
                >
                  <div className="scrim-bottom absolute inset-0 transition-opacity duration-500 group-hover:opacity-85" />
                  <div className="relative z-10 flex h-full flex-col items-start justify-end p-4 text-left sm:p-5">
                    <h3 className="mb-2 text-xl font-semibold text-white sm:text-2xl">
                      {assetClass.label}
                    </h3>
                    {/* At rest, not on hover — this copy previously did not exist
                        on any touch device. */}
                    <p className="mb-3 text-sm leading-relaxed text-white/85">
                      {assetClass.hook}
                    </p>
                    <div className="flex items-center font-medium text-white transition-transform duration-300 group-hover:translate-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Brokerage and advisory ─────────────────────────────────────── */}
        <section className="section-spacing bg-white">
          <div className="container-premium">
            <span className="eyebrow mb-5">Brokerage &amp; Advisory</span>
            <h2 className="section-title text-hhp-navy">All six classes</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hhp-charcoal">
              Sales, leasing and capital markets across every class on this page.
              Each one has a page setting out what we watch in it, what we do, and
              what we look for.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {ASSET_CLASSES.map((assetClass) => (
                <Link
                  key={assetClass.slug}
                  to={assetClass.href}
                  className="group flex min-h-[112px] flex-col justify-between border border-hhp-navy/10 bg-white p-5 transition-colors duration-300 hover:border-hhp-gold"
                  onClick={() => {
                    trackButtonClick(
                      `asset_class_${assetClass.slug.replace(/-/g, '_')}`,
                      'asset_types_advisory',
                    );
                    trackLinkClick(assetClass.label, assetClass.href);
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="shrink-0 text-hhp-navy/60 transition-colors duration-300 group-hover:text-hhp-gold">
                      <AssetMark mark={assetClass.mark} className="h-10 w-10" />
                    </span>
                    <span className="font-display text-lg font-semibold text-hhp-navy">
                      {assetClass.label}
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-hhp-navy/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-hhp-gold" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-hhp-charcoal">
                    {assetClass.hook}
                  </p>
                </Link>
              ))}
            </div>

            <Link
              to="/brokerage"
              className="tap group mt-10 inline-flex items-center gap-2 font-display font-semibold text-hhp-navy transition-colors hover:text-hhp-gold"
              onClick={() => {
                trackButtonClick('brokerage_overview', 'asset_types_advisory');
                trackLinkClick('How our brokerage works', '/brokerage');
              }}
            >
              How our brokerage works
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* ── Closing band ───────────────────────────────────────────────── */}
        <section className="section-spacing bg-hhp-navy text-white">
          <div className="container-premium text-center">
            <h2 className="section-title mx-auto max-w-3xl text-white">
              Tell us about the asset
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Send us the rent roll and the last twelve months of operating
              statements. We will tell you what we think it costs to run, and where
              we would expect the number to move.
            </p>

            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-[52px] w-full max-w-[320px] items-center justify-center gap-2 bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy shadow-elegant transition-all duration-300 hover:bg-hhp-gold hover:text-hhp-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hhp-gold focus-visible:ring-offset-2 focus-visible:ring-offset-hhp-navy sm:w-auto"
                onClick={() => {
                  trackButtonClick('asset_types_cta_contact', 'asset_types_cta');
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
                  trackButtonClick('asset_types_cta_services', 'asset_types_cta');
                  trackLinkClick('How we operate', '/services/property-management');
                }}
              >
                How we operate
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AssetTypes;
