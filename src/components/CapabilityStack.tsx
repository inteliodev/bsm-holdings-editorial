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

type Slab = { x: number; y: number; w: number; h: number };

/** Axonometric depth. The stack is lit from the top-right. */
const DX = 22;
const DY = 13;

/**
 * The three visible faces of an extruded slab. Drawing the thickness rather
 * than outlining a rectangle is what makes the stack read as stacked material,
 * which is the whole claim the section is making.
 */
const faces = ({ x, y, w, h }: Slab) => ({
  front: `M${x} ${y} H${x + w} V${y + h} H${x} Z`,
  top: `M${x} ${y} L${x + DX} ${y - DY} L${x + w + DX} ${y - DY} L${x + w} ${y} Z`,
  side: `M${x + w} ${y} L${x + w + DX} ${y - DY} L${x + w + DX} ${y + h - DY} L${x + w} ${y + h} Z`,
});

/* Asset management is the widest plate and technology the widest footing, so
   the silhouette narrows into the operating disciplines and flares again at the
   base — the umbrella above, the foundation below. */
const SLABS: Record<string, Slab> = {
  am: { x: 66, y: 80, w: 258, h: 46 },
  pm: { x: 90, y: 154, w: 210, h: 56 },
  fs: { x: 90, y: 230, w: 210, h: 56 },
  fin: { x: 90, y: 306, w: 210, h: 56 },
  tech: { x: 58, y: 386, w: 270, h: 72 },
};

const PLINTH: Slab = { x: 50, y: 472, w: 286, h: 14 };

const RAIL_X = 22;
const RAIL_TOP = 46;
const RAIL_BOTTOM = 486;
const RAIL_LENGTH = RAIL_BOTTOM - RAIL_TOP;

const SPINE_X = 195;

/* Labels and accent tabs share one x across every slab rather than insetting
   from each slab's own left edge, which would step in and out with the
   silhouette and read as misalignment. Both clear the widest layer's edge. */
const TAB_X = 104;
const LABEL_X = 126;

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
  const { active, progress, setRef } = useActiveStep(CAPABILITIES.length);

  const activeId = CAPABILITIES[active]?.id;
  const cls = (id: string) =>
    `bl bl-light bl-lift ${activeId === id ? 'is-active' : ''}`;

  /** Label baseline and accent-tab position, centred on the slab's front face. */
  const inset = (slab: Slab) => ({
    labelY: slab.y + slab.h / 2 + 3.5,
    tabY: slab.y + slab.h / 2 - 11,
  });

  return (
    <section className="section-spacing bg-white">
      <div className="container-premium">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {/* "Built In House" belongs to SystemStack on /technology now. */}
          <span className="eyebrow mb-5 justify-center">Capabilities</span>
          <h2 className="section-title text-hhp-navy">One firm, top to bottom</h2>
          <p className="mt-6 text-lg leading-relaxed text-hhp-charcoal">
            Most owners assemble this from four vendors who each answer to someone else. We hold
            every layer, including the software.
          </p>
        </div>

        {/* Not a grid until lg. Below that the diagram is a plain block sibling
            of the step list, which is what gives `sticky` a tall containing
            block to travel through — in a single-column grid each row is its
            own area and the diagram would scroll away before the steps arrive,
            taking the whole interaction with it. On lg the diagram becomes the
            grid item and `self-start` keeps it content-height inside the tall
            column so it can still stick. */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Diagram */}
          {/* Opaque, not translucent: the step list scrolls underneath this bar,
              and at 95% the copy read straight through the diagram. */}
          <div className="sticky top-[var(--header-h)] z-20 self-start border-b border-border bg-white py-4 lg:top-[calc(var(--header-h)+2.5rem)] lg:col-span-5 lg:border-b-0 lg:bg-transparent lg:py-0">
            <svg
              viewBox="0 0 400 510"
              className="mx-auto max-h-[34vh] w-full max-w-[180px] lg:max-h-none lg:max-w-[380px]"
              role="img"
              aria-label="Diagram of HHP's capabilities as a single vertical stack, from asset management down to the technology that supports it"
            >
              {/* Read-progress rail. Always present; the gold segment grows. */}
              <line
                className="bl-rail"
                x1={RAIL_X}
                y1={RAIL_TOP}
                x2={RAIL_X}
                y2={RAIL_BOTTOM}
              />
              <line
                className="bl-rail-fill"
                x1={RAIL_X}
                y1={RAIL_TOP}
                x2={RAIL_X}
                y2={RAIL_BOTTOM}
                strokeDasharray={RAIL_LENGTH}
                strokeDashoffset={RAIL_LENGTH * (1 - progress)}
              />
              {CAPABILITIES.map((capability) => {
                const slab = SLABS[capability.id];
                return (
                  <circle
                    key={`node-${capability.id}`}
                    className={`bl-rail-node ${activeId === capability.id ? 'is-active' : ''}`}
                    cx={RAIL_X}
                    cy={slab.y + slab.h / 2}
                    r={3.5}
                  />
                );
              })}

              {/* Spine — one firm, running the full height behind the stack */}
              <g className="bl bl-light is-active">
                <line
                  x1={SPINE_X}
                  y1={RAIL_TOP}
                  x2={SPINE_X}
                  y2={RAIL_BOTTOM}
                  strokeDasharray="5 8"
                />
                <circle cx={SPINE_X} cy={RAIL_TOP} r="7" />
              </g>

              {CAPABILITIES.map((capability) => {
                const slab = SLABS[capability.id];
                const face = faces(slab);
                const { labelY, tabY } = inset(slab);
                const plinth = capability.id === 'tech' ? faces(PLINTH) : null;

                return (
                  <g key={capability.id} className={cls(capability.id)}>
                    <path className="bl-top" d={face.top} />
                    <path className="bl-side" d={face.side} />
                    <path d={face.front} />

                    {/* The foundation carries its own detail: a dashed seam and
                        three service nodes, so it reads as substrate rather
                        than as one more floor. */}
                    {plinth && (
                      <>
                        <line
                          x1={slab.x + 26}
                          y1={slab.y + 58}
                          x2={slab.x + slab.w - 26}
                          y2={slab.y + 58}
                          strokeDasharray="4 6"
                        />
                        <circle cx={slab.x + 52} cy={slab.y + 58} r="3.5" />
                        <circle cx={slab.x + slab.w / 2} cy={slab.y + 58} r="3.5" />
                        <circle cx={slab.x + slab.w - 52} cy={slab.y + 58} r="3.5" />
                        <path className="bl-top" d={plinth.top} />
                        <path className="bl-side" d={plinth.side} />
                        <path d={plinth.front} />
                      </>
                    )}

                    <rect className="bl-solid" x={TAB_X} y={tabY} width="3" height="22" />
                    <text className="bl-tag" x={LABEL_X} y={labelY}>
                      {capability.name.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>

            <p
              className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-hhp-gold lg:mt-6"
              aria-live="polite"
            >
              {CAPABILITIES[active]?.role}
            </p>
          </div>

          {/* Steps */}
          <div className="pt-4 lg:col-span-7 lg:pt-0">
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
