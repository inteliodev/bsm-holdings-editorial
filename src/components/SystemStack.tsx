import { useActiveStep } from '@/hooks/useActiveStep';

/**
 * The system, in section.
 *
 * Third of the scrollytelling trio, and deliberately a different object each
 * time: Home cuts through the firm, Facility Services cuts through the asset,
 * and this cuts through the software. A wireframe rather than a rendered
 * dashboard, so it does not compete with the glass mockup elsewhere on this
 * page — the point here is the shape of the system, not a screenshot of it.
 *
 * Copy is carried over verbatim from the Home platform section, which this
 * replaces; the layers were always the right content, they were just a list.
 */

type SystemLayer = {
  id: string;
  title: string;
  description: string;
};

const LAYERS: SystemLayer[] = [
  {
    id: 'financial',
    title: 'Financial Intelligence',
    description:
      'Bank-connected accounting that reconciles as transactions post. Owners see cash position, budget variances, and flagged irregularities the day they occur rather than in a month-end statement.',
  },
  {
    id: 'compliance',
    title: 'Compliance',
    description:
      'Certifications, recertifications, and inspection readiness monitored continuously. HUD files remain audit-ready year round rather than being reconstructed ahead of a REAC inspection.',
  },
  {
    id: 'workorders',
    title: 'Work Orders & Dispatch',
    description:
      'Requests are routed directly to HHP Facility Services and, in most cases, resolved the same day. Because the work is self-performed, each order records actual labor hours and materials rather than a vendor invoice.',
  },
  {
    id: 'security',
    title: 'Security & Access',
    description:
      'Camera coverage, wireless bridge infrastructure, and access control across every managed property, monitored from the same system that runs operations.',
  },
  {
    id: 'comms',
    title: 'Communications',
    description:
      'Calls, messages, and follow-up logged against both the property and the resident, so the complete history of any unit is retrievable on request.',
  },
  {
    id: 'reporting',
    title: 'Owner Reporting',
    description:
      'Financial statements delivered with written commentary: what changed, why it changed, and the action being taken. Budget-to-actual with analysis attached.',
  },
];

const SystemStack = () => {
  const { active, setRef } = useActiveStep(LAYERS.length);
  const activeId = LAYERS[active]?.id;
  const cls = (id: string) => `bl ${activeId === id ? 'is-active' : ''}`;

  return (
    <section className="section-spacing relative z-30 bg-hhp-navy text-white">
      <div className="container-premium">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="eyebrow mb-5 justify-center text-hhp-gold">Built In House</span>
          <h2 className="section-title text-white">One system of record behind every property</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Asset management, property management and Facility Services operate on the same six
            layers — software HHP builds and maintains rather than licenses. Cost remains visible
            at the line-item level, and owners review the same figures we do.
          </p>
        </div>

        {/* Block until lg so the pinned diagram has a tall containing block to
            travel through on phones — see CapabilityStack for the full note. */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Diagram */}
          {/* Opaque — the step list scrolls underneath this bar. */}
          <div className="sticky top-[var(--header-h)] z-20 self-start border-b border-white/10 bg-hhp-navy py-4 lg:top-[calc(var(--header-h)+2.5rem)] lg:col-span-5 lg:border-b-0 lg:bg-transparent lg:py-0">
            <svg
              viewBox="0 0 400 470"
              className="mx-auto max-h-[34vh] w-full max-w-[190px] lg:max-h-none lg:max-w-[350px]"
              role="img"
              aria-label="Wireframe of the HHP operating system showing its six layers"
            >
              {/* Window chrome — always neutral, it is the container not a layer */}
              <g className="bl">
                <rect x="16" y="16" width="368" height="438" rx="3" />
                <line x1="16" y1="52" x2="384" y2="52" />
                <circle cx="34" cy="34" r="3.5" />
                <circle cx="48" cy="34" r="3.5" />
                <circle cx="62" cy="34" r="3.5" />
                <line x1="86" y1="52" x2="86" y2="454" />
              </g>

              {/* Sidebar rows, one per layer */}
              <g className={cls('financial')}>
                <rect x="28" y="70" width="46" height="8" rx="2" />
              </g>
              <g className={cls('compliance')}>
                <rect x="28" y="90" width="46" height="8" rx="2" />
              </g>
              <g className={cls('workorders')}>
                <rect x="28" y="110" width="46" height="8" rx="2" />
              </g>
              <g className={cls('security')}>
                <rect x="28" y="130" width="46" height="8" rx="2" />
              </g>
              <g className={cls('comms')}>
                <rect x="28" y="150" width="46" height="8" rx="2" />
              </g>
              <g className={cls('reporting')}>
                <rect x="28" y="170" width="46" height="8" rx="2" />
              </g>

              {/* Financial: chart panel */}
              <g className={cls('financial')}>
                <rect x="100" y="68" width="270" height="104" rx="2" />
                <polyline points="116,150 152,128 188,138 224,104 260,116 296,86 340,94" />
                <line x1="116" y1="160" x2="340" y2="160" />
              </g>

              {/* Compliance: checklist */}
              <g className={cls('compliance')}>
                <rect x="100" y="184" width="128" height="92" rx="2" />
                <path d="M114 206 l6 6 l10 -12" />
                <line x1="140" y1="208" x2="214" y2="208" />
                <path d="M114 232 l6 6 l10 -12" />
                <line x1="140" y1="234" x2="214" y2="234" />
                <path d="M114 258 l6 6 l10 -12" />
                <line x1="140" y1="260" x2="196" y2="260" />
              </g>

              {/* Work orders: queue */}
              <g className={cls('workorders')}>
                <rect x="242" y="184" width="128" height="92" rx="2" />
                <rect x="254" y="198" width="104" height="16" rx="2" />
                <rect x="254" y="222" width="104" height="16" rx="2" />
                <rect x="254" y="246" width="104" height="16" rx="2" />
              </g>

              {/* Security: camera + coverage arc */}
              <g className={cls('security')}>
                <rect x="100" y="288" width="92" height="80" rx="2" />
                <rect x="126" y="308" width="26" height="14" rx="2" />
                <path d="M139 328 v10" />
                <path d="M114 350 q25 -22 52 0" />
              </g>

              {/* Communications: thread */}
              <g className={cls('comms')}>
                <rect x="206" y="288" width="164" height="80" rx="2" />
                <rect x="218" y="300" width="76" height="18" rx="4" />
                <rect x="282" y="326" width="76" height="18" rx="4" />
                <line x1="218" y1="354" x2="290" y2="354" />
              </g>

              {/* Owner reporting: statement */}
              <g className={cls('reporting')}>
                <rect x="100" y="380" width="270" height="60" rx="2" />
                <line x1="114" y1="398" x2="212" y2="398" />
                <line x1="114" y1="412" x2="188" y2="412" />
                <line x1="114" y1="426" x2="230" y2="426" />
                <rect x="284" y="394" width="72" height="32" rx="2" />
              </g>
            </svg>

            <p
              className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-hhp-gold lg:mt-6"
              aria-live="polite"
            >
              {LAYERS[active]?.title}
            </p>
          </div>

          {/* Steps */}
          <div className="pt-4 lg:col-span-7 lg:pt-0">
            <ol className="border-t border-white/10">
              {LAYERS.map((layer, index) => (
                <li key={layer.id}>
                  <div
                    ref={setRef(index)}
                    className={`border-b border-white/10 py-9 transition-opacity duration-500 lg:py-12 ${
                      active === index ? 'opacity-100' : 'opacity-55'
                    }`}
                  >
                    <div className="flex items-baseline gap-5">
                      <span
                        aria-hidden="true"
                        className={`font-display text-3xl font-semibold leading-none transition-colors duration-500 ${
                          active === index ? 'text-hhp-gold' : 'text-white/25'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                        {layer.title}
                      </h3>
                    </div>
                    <p className="mt-4 leading-relaxed text-white/70 lg:pl-[3.6rem]">
                      {layer.description}
                    </p>
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

export default SystemStack;
