/**
 * Owner command centre mockup.
 *
 * The sales copy and CTA buttons that sat beside this were removed — the page
 * around it already makes that argument, and the mockup carries itself.
 *
 * It was also `hidden lg:block`, which meant a phone got the copy and no image.
 * With the copy gone that would have left an empty band, so the mockup is now
 * visible at every width: the metric row stacks, and the floating cards (which
 * hang on negative offsets and would clip against the section's overflow-hidden)
 * only appear once there is room for them.
 *
 * Note the figures here are illustrative and not wired to live data.
 */
const DashboardShowcase = () => {
  return (
    <section className="relative z-30 overflow-hidden bg-hhp-navy-deep py-16 sm:py-20 lg:py-24">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--hhp-gold) / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--hhp-gold) / 0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }}
      />
      <div className="container-premium relative z-10">
        <div className="relative mx-auto max-w-3xl">
          {/* Main dashboard card */}
          <div
            className="overflow-hidden rounded-xl"
            style={{
              backgroundColor: 'hsl(var(--hhp-navy) / 0.6)',
              border: '1px solid hsl(var(--hhp-gold) / 0.12)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Dashboard header */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: '1px solid hsl(var(--hhp-gold) / 0.08)' }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Owner Command Center
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Live
              </span>
            </div>

            {/* Metrics */}
            <div className="p-5">
              <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: 'hsl(var(--hhp-navy) / 0.4)',
                    border: '1px solid hsl(var(--hhp-gold) / 0.06)',
                  }}
                >
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Occupancy
                  </div>
                  <div className="text-2xl font-bold text-hhp-gold">97.6%</div>
                  <div className="mt-1 text-xs font-medium text-emerald-400">↑ 2.1% vs prior</div>
                </div>
                <div
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: 'hsl(var(--hhp-navy) / 0.4)',
                    border: '1px solid hsl(var(--hhp-gold) / 0.06)',
                  }}
                >
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Units Managed
                  </div>
                  <div className="text-2xl font-bold text-white">85</div>
                  <div className="mt-1 text-xs font-medium text-gray-400">3 properties</div>
                </div>
                <div
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: 'hsl(var(--hhp-navy) / 0.4)',
                    border: '1px solid hsl(var(--hhp-gold) / 0.06)',
                  }}
                >
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    HAP Status
                  </div>
                  <div className="text-lg font-bold text-emerald-400">Current</div>
                  <div className="mt-1 text-xs font-medium text-gray-400">Tracked in real-time</div>
                </div>
              </div>

              {/* Chart area */}
              <div
                className="relative rounded-lg p-3"
                style={{
                  backgroundColor: 'hsl(var(--hhp-navy) / 0.3)',
                  border: '1px solid hsl(var(--hhp-gold) / 0.06)',
                  height: '120px',
                }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Monthly Collections — 12mo Trend
                </span>
                <svg viewBox="0 0 480 80" className="mt-2 h-16 w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="dashChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(40 63% 48% / 0.3)" />
                      <stop offset="100%" stopColor="hsl(40 63% 48% / 0)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,65 Q40,60 80,55 T160,45 T240,35 T320,28 T400,20 T480,12 L480,80 L0,80 Z"
                    fill="url(#dashChartGrad)"
                  />
                  <path
                    d="M0,65 Q40,60 80,55 T160,45 T240,35 T320,28 T400,20 T480,12"
                    fill="none"
                    stroke="hsl(var(--hhp-gold))"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Floating cards. They hang on negative offsets, so they only appear
              once the container has room — below that they would clip against
              the section's overflow-hidden. The `float` keyframe now lives in
              tailwind.config.ts rather than a component-local <style> block. */}
          <div
            className="absolute -bottom-5 -left-6 hidden animate-float rounded-xl px-5 py-4 md:block"
            style={{
              backgroundColor: 'hsl(var(--hhp-navy) / 0.85)',
              border: '1px solid hsl(var(--hhp-gold) / 0.15)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-gray-500">
              Compliance
            </div>
            <div className="text-xl font-bold text-emerald-400">✓ Compliant</div>
          </div>

          <div
            className="absolute -right-5 -top-4 hidden animate-float rounded-xl px-5 py-4 md:block"
            style={{
              backgroundColor: 'hsl(var(--hhp-navy) / 0.85)',
              border: '1px solid hsl(var(--hhp-gold) / 0.15)',
              backdropFilter: 'blur(16px)',
              animationDelay: '2s',
            }}
          >
            <div className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-gray-500">
              Work Orders
            </div>
            <div className="text-xl font-bold text-white">
              2.4hr <span className="text-xs font-normal text-gray-500">avg response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
