import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useActiveStep } from '@/hooks/useActiveStep';

/**
 * The firm, in section.
 *
 * Counterpart to BuildingSection on Facility Services: same interaction
 * grammar, inverted ground, different subject. That one cuts through the
 * *asset*; this one cuts through the *firm*.
 *
 * The stack encodes the positioning rather than just listing services. Asset
 * management is the plate across the top because it is the umbrella everything
 * else reports into. The operating disciplines are the floors beneath it.
 * Technology is the foundation slab, because the systems are built in house and
 * everything above stands on them — and a spine runs the full height, because
 * the whole argument is that one firm is accountable end to end.
 *
 * Brokerage is deliberately not a layer here. It is a supporting capability, not
 * a peer discipline, and putting it in the stack would restate exactly the
 * hierarchy the repositioning removed.
 */

type Capability = {
  id: string;
  name: string;
  role: string;
  body: string;
  href: string;
};

const CAPABILITIES: Capability[] = [
  {
    id: 'am',
    name: 'Asset Management',
    role: 'The umbrella',
    body: 'Strategy, underwriting and owner reporting for the asset as a whole. Everything below reports into it, which is why there is one set of numbers rather than four vendors’ versions of them.',
    href: '/about',
  },
  {
    id: 'pm',
    name: 'Property Management',
    role: 'Operations',
    body: 'Day-to-day operations, leasing administration, compliance and resident experience — staffed by HHP personnel, not a call centre.',
    href: '/services/property-management',
  },
  {
    id: 'fs',
    name: 'Facility Services',
    role: 'Self-performed trades',
    body: 'Construction, roofing, HVAC, plumbing, electrical, lawncare and janitorial, performed by our own personnel. No subcontractor markup on self-performed work, and specialty vendors only where licensing requires it.',
    href: '/services/facility-services',
  },
  {
    id: 'fin',
    name: 'Financial Services',
    role: 'Accounting',
    body: 'Accounting, financial analysis and reporting in house. Because the people doing the work and the people reporting the cost sit in the same firm, owners get line-item visibility instead of a month-end lag.',
    href: '/services/financial-services',
  },
  {
    id: 'tech',
    name: 'Technology',
    role: 'The foundation',
    body: 'The operating and reporting systems are built and maintained by HHP rather than licensed. That is what makes real-time cost reporting possible at all — the data comes from our own work orders.',
    href: '/technology',
  },
];

const CapabilityStack = () => {
  const { active, setRef } = useActiveStep(CAPABILITIES.length);

  const activeId = CAPABILITIES[active]?.id;
  const cls = (id: string) => `bl bl-light ${activeId === id ? 'is-active' : ''}`;

  return (
    <section className="section-spacing bg-white">
      <div className="container-premium">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {/* Not "Built In House" — PlatformSection uses that eyebrow directly
              below this section on Home. */}
          <span className="eyebrow mb-5 justify-center">Capabilities</span>
          <h2 className="section-title text-hhp-navy">One firm, top to bottom</h2>
          <p className="mt-6 text-lg leading-relaxed text-hhp-charcoal">
            Most owners assemble this from four vendors who each answer to someone else. We hold
            every layer, including the software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Diagram */}
          <div className="lg:col-span-5">
            <div className="lg:sticky" style={{ top: 'calc(var(--header-h) + 2.5rem)' }}>
              <svg
                viewBox="0 0 400 520"
                className="mx-auto w-full max-w-[330px]"
                role="img"
                aria-label="Diagram of HHP's capabilities as a single vertical stack, from asset management down to the technology that supports it"
              >
                {/* Spine — one firm, running the full height */}
                <g className="bl bl-light is-active">
                  <line x1="200" y1="40" x2="200" y2="470" strokeDasharray="5 8" />
                </g>

                {/* Asset management: the plate across the top */}
                <g className={cls('am')}>
                  <path d="M44 96 H356 L332 60 H68 Z" />
                  <line x1="44" y1="96" x2="356" y2="96" />
                  <circle cx="200" cy="42" r="7" />
                </g>

                {/* Operating disciplines */}
                <g className={cls('pm')}>
                  <rect x="80" y="120" width="240" height="62" rx="2" />
                  <line x1="110" y1="151" x2="160" y2="151" />
                </g>

                <g className={cls('fs')}>
                  <rect x="80" y="196" width="240" height="62" rx="2" />
                  <line x1="110" y1="227" x2="160" y2="227" />
                </g>

                <g className={cls('fin')}>
                  <rect x="80" y="272" width="240" height="62" rx="2" />
                  <line x1="110" y1="303" x2="160" y2="303" />
                </g>

                {/* Technology: the foundation everything stands on */}
                <g className={cls('tech')}>
                  <path d="M52 356 H348 V424 H52 Z" />
                  <line x1="52" y1="392" x2="348" y2="392" strokeDasharray="4 6" />
                  <path d="M36 424 H364 L348 470 H52 Z" />
                  <circle cx="120" cy="376" r="4" />
                  <circle cx="200" cy="376" r="4" />
                  <circle cx="280" cy="376" r="4" />
                </g>
              </svg>

              <p
                className="mt-6 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-hhp-gold"
                aria-live="polite"
              >
                {CAPABILITIES[active]?.role}
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7">
            <ol className="border-t border-border">
              {CAPABILITIES.map((capability, index) => (
                <li key={capability.id}>
                  <div
                    ref={setRef(index)}
                    className={`border-b border-border py-9 transition-opacity duration-500 lg:py-12 ${
                      active === index ? 'opacity-100' : 'opacity-55'
                    }`}
                  >
                    <div className="flex items-baseline gap-5">
                      <span
                        aria-hidden="true"
                        className={`font-display text-3xl font-semibold leading-none transition-colors duration-500 ${
                          active === index ? 'text-hhp-gold' : 'text-hhp-navy/20'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-hhp-gold">
                          {capability.role}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-semibold text-hhp-navy sm:text-2xl">
                          {capability.name}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 leading-relaxed text-hhp-charcoal lg:pl-[3.6rem]">
                      {capability.body}
                    </p>
                    <Link
                      to={capability.href}
                      className="tap mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy transition-colors hover:text-hhp-gold lg:ml-[3.6rem]"
                    >
                      {capability.name}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityStack;
