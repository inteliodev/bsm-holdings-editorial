const platformLayers = [
  {
    number: '01',
    title: 'Financial Intelligence',
    description:
      'Bank-connected accounting that reconciles as transactions post. Owners see cash position, budget variances, and flagged irregularities the day they occur rather than in a month-end statement.',
  },
  {
    number: '02',
    title: 'Compliance',
    description:
      'Certifications, recertifications, and inspection readiness monitored continuously. HUD files remain audit-ready year round rather than being reconstructed ahead of a REAC inspection.',
  },
  {
    number: '03',
    title: 'Work Orders & Dispatch',
    description:
      'Requests are routed directly to HHP Facility Services and, in most cases, resolved the same day. Because the work is self-performed, each order records actual labor hours and materials rather than a vendor invoice.',
  },
  {
    number: '04',
    title: 'Security & Access',
    description:
      'Camera coverage, wireless bridge infrastructure, and access control across every managed property, monitored from the same system that runs operations.',
  },
  {
    number: '05',
    title: 'Communications',
    description:
      'Calls, messages, and follow-up logged against both the property and the resident, so the complete history of any unit is retrievable on request.',
  },
  {
    number: '06',
    title: 'Owner Reporting',
    description:
      'Financial statements delivered with written commentary: what changed, why it changed, and the action being taken. Budget-to-actual with analysis attached.',
  },
];

const PlatformSection = () => {
  return (
    <section className="bg-hhp-navy py-16 sm:py-20 lg:py-28 relative z-30">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Intro rail — sticky on desktop so it holds context while the layers scroll. */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-6"
                style={{ color: '#C8952E' }}
              >
                <span className="w-6 h-px" style={{ backgroundColor: '#C8952E' }} />
                Built In House
              </div>
              <h2 className="section-title text-white mb-6">
                One System of Record
                <br className="hidden sm:block" /> Behind Every Property
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-white/75">
                Asset management, property management, and Facility Services operate on the same six layers — software
                HHP builds and maintains rather than licenses. Cost remains visible at the
                line-item level, and owners review the same figures we do.
              </p>
            </div>
          </div>

          {/* Layers — an editorial list rather than a card grid. */}
          <div className="lg:col-span-7">
            <ol className="border-t border-white/15">
              {platformLayers.map((layer) => (
                <li
                  key={layer.number}
                  className="group border-b border-white/15 py-7 sm:py-8 transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <div className="flex gap-5 sm:gap-8">
                    <span
                      className="flex-shrink-0 font-display text-2xl sm:text-3xl leading-none pt-1 transition-colors duration-300"
                      style={{ color: 'rgba(200,149,46,0.55)' }}
                      aria-hidden="true"
                    >
                      {layer.number}
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-lg sm:text-xl text-white mb-2 tracking-[0.06em] uppercase">
                        {layer.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-white/70">
                        {layer.description}
                      </p>
                    </div>
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

export default PlatformSection;
