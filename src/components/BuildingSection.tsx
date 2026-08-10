import { useActiveStep } from '@/hooks/useActiveStep';

/**
 * The building, in section.
 *
 * The vertical-integration argument is that one firm is accountable from the
 * roof to the grounds. This tells that story literally vertically: scrolling
 * descends through a cutaway of a building, and each layer names the trade HHP
 * performs itself at that level.
 *
 * Built to survive the prerender: every layer and every word is in the DOM and
 * visible from the first paint. Scroll only changes which layer is *emphasised*,
 * so a crawler — or anyone whose JS never runs — still gets the whole section.
 */

type Layer = {
  id: string;
  trade: string;
  where: string;
  body: string;
};

/** Ordered as a descent: roof first, grounds last. */
const LAYERS: Layer[] = [
  {
    id: 'roof',
    trade: 'Roofing & Building Exterior',
    where: 'Roof and envelope',
    body: 'Roof systems, flashing, gutters, siding and masonry. The envelope is where deferred maintenance turns into structural cost, so it is inspected and repaired by our own personnel rather than bid out after a leak.',
  },
  {
    id: 'mep',
    trade: 'Mechanical, Electrical & Plumbing',
    where: 'Risers and plant',
    body: 'HVAC, electrical and plumbing across the stack. These are the trades most often subcontracted at the highest markup, and the ones where response time decides whether a work order becomes a claim.',
  },
  {
    id: 'interior',
    trade: 'Interior Services & Unit Turns',
    where: 'Occupied floors',
    body: 'Turns, punch work, flooring, paint and janitorial. Turn speed is occupancy, and occupancy is revenue, so the crew that does it answers to the same firm that reports the numbers.',
  },
  {
    id: 'safety',
    trade: 'Safety, Security & Restoration',
    where: 'Every floor',
    body: 'Life-safety systems, access control, and water and fire restoration. This layer runs the full height of the building because it has to be everywhere at once.',
  },
  {
    id: 'structure',
    trade: 'Construction & General Contracting',
    where: 'Structure and shell',
    body: 'Capital projects, build-outs and structural repair. Holding the general contracting in house is what removes a layer of markup from every project above the maintenance threshold.',
  },
  {
    id: 'grounds',
    trade: 'Grounds & Seasonal',
    where: 'Site and grounds',
    body: 'Lawncare, landscaping, snow and ice, and parking areas. The first thing a resident and a prospective owner sees, and the easiest thing for a third-party vendor to skip.',
  },
];

const BuildingSection = () => {
  const { active, setRef } = useActiveStep(LAYERS.length);

  const activeId = LAYERS[active]?.id;
  const cls = (id: string) => `bl ${activeId === id ? 'is-active' : ''}`;

  return (
    <section className="section-spacing bg-hhp-navy text-white">
      <div className="container-premium">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="eyebrow mb-5 justify-center text-hhp-gold">Vertical Integration</span>
          <h2 className="section-title text-white">From the roof to the grounds</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Every layer of a building is a trade someone has to perform. We perform them, so one
            firm is accountable for all of it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Diagram */}
          <div className="lg:col-span-5">
            <div
              className="lg:sticky"
              style={{ top: 'calc(var(--header-h) + 2.5rem)' }}
            >
              <svg
                viewBox="0 0 400 560"
                className="mx-auto w-full max-w-[340px]"
                role="img"
                aria-label="Cutaway section of a building showing the trades HHP self-performs at each level"
              >
                {/* Sky wash */}
                <defs>
                  <linearGradient id="bsSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0A2342" stopOpacity="0" />
                    <stop offset="100%" stopColor="#C8952E" stopOpacity="0.06" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="400" height="560" fill="url(#bsSky)" />

                {/* Structure: shell, slabs, columns */}
                <g className={cls('structure')}>
                  <rect x="70" y="92" width="260" height="378" />
                  <line x1="70" y1="218" x2="330" y2="218" />
                  <line x1="70" y1="344" x2="330" y2="344" />
                  <line x1="118" y1="92" x2="118" y2="470" />
                  <line x1="282" y1="92" x2="282" y2="470" />
                  {/* Foundation */}
                  <path d="M58 470 H342 L330 508 H70 Z" />
                </g>

                {/* Roof and envelope */}
                <g className={cls('roof')}>
                  <path d="M58 92 H342 L330 62 H70 Z" />
                  <rect x="86" y="46" width="52" height="16" />
                  <line x1="58" y1="92" x2="342" y2="92" />
                </g>

                {/* MEP riser + rooftop plant */}
                <g className={cls('mep')}>
                  <rect x="186" y="92" width="28" height="378" />
                  <rect x="252" y="40" width="46" height="22" />
                  <line x1="200" y1="110" x2="200" y2="452" strokeDasharray="6 7" />
                  <circle cx="200" cy="218" r="5" />
                  <circle cx="200" cy="344" r="5" />
                </g>

                {/* Occupied floors */}
                <g className={cls('interior')}>
                  <rect x="86" y="112" width="84" height="86" />
                  <rect x="230" y="112" width="84" height="86" />
                  <rect x="86" y="238" width="84" height="86" />
                  <rect x="230" y="238" width="84" height="86" />
                  <rect x="86" y="364" width="84" height="86" />
                  <rect x="230" y="364" width="84" height="86" />
                </g>

                {/* Life safety, full height */}
                <g className={cls('safety')}>
                  <circle cx="128" cy="128" r="4" />
                  <circle cx="272" cy="128" r="4" />
                  <circle cx="128" cy="254" r="4" />
                  <circle cx="272" cy="254" r="4" />
                  <circle cx="128" cy="380" r="4" />
                  <circle cx="272" cy="380" r="4" />
                  <path d="M330 200 h26 v34 h-26" />
                  <path d="M330 326 h26 v34 h-26" />
                </g>

                {/* Grounds */}
                <g className={cls('grounds')}>
                  <line x1="10" y1="508" x2="390" y2="508" />
                  <path d="M46 508 v-26 M32 494 q14 -18 28 0" />
                  <path d="M354 508 v-26 M340 494 q14 -18 28 0" />
                  <path d="M120 508 q40 -14 80 0" />
                  <path d="M232 508 q40 -14 80 0" />
                </g>
              </svg>

              {/* Reads as a caption, and gives the diagram an accessible label
                  that changes with the active layer. */}
              <p
                className="mt-6 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-hhp-gold"
                aria-live="polite"
              >
                {LAYERS[active]?.where}
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7">
            <ol className="border-t border-white/12">
              {LAYERS.map((layer, index) => (
                <li key={layer.id}>
                  <div
                    ref={setRef(index)}
                    className={`border-b border-white/12 py-9 transition-opacity duration-500 lg:py-14 ${
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
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-hhp-gold/80">
                          {layer.where}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                          {layer.trade}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 leading-relaxed text-white/70 lg:pl-[3.6rem]">{layer.body}</p>
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

export default BuildingSection;
