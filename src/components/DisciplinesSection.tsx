const disciplines = [
  {
    title: 'Asset Management',
    description: 'Data-driven portfolio intelligence that transforms how owners understand and optimize their assets.',
    features: [
      'Capital planning & rent optimization',
      'Real-time financial dashboards',
      'Budget vs. actual with written commentary',
      'Replacement reserve strategy',
      'Owner reporting & board communications',
    ],
  },
  {
    title: 'Property Management',
    description: 'Day-to-day operations run on our own platform, with compliance built into every workflow — not bolted on after.',
    features: [
      'Compliance automation & monitoring',
      'Tenant certification & recertification',
      'On-site management & leasing',
      '24/7 emergency response protocol',
      'Accounting & financial reporting',
    ],
  },
  {
    title: 'Facility Services',
    description: 'Facility trades through BSM Holdings Facility Services, LLC — a separate offering from residential property management.',
    features: [
      'General contracting & construction',
      'Roofing, HVAC, plumbing & electrical',
      'Lawncare, grounds & snow removal',
      'Janitorial & unit turns',
      'Storm damage & insurance restoration',
    ],
  },
];

const DisciplinesSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative z-30">
      <div className="container-premium">
        {/* `.eyebrow` exists precisely to consolidate this pill, which was the
            one place still hand-rolling it from inline rgba() and a literal
            #C8952E — three copies of the gold token by value. */}
        <span className="eyebrow mb-8">What We Do</span>
        <h2 className="section-title text-hhp-navy mb-6">
          Three Disciplines.<br />
          One Integrated Platform.
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-hhp-charcoal max-w-3xl mb-12 sm:mb-16">
          We don't list tasks — we deliver outcomes. Every service line runs on one integrated platform we built ourselves, around the metrics that actually matter to owners.
        </p>

        {/* `rounded-xl` was 12px, three times the site's 4px --radius, and the
            cards had no hover state at all. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {disciplines.map((d, i) => (
            <div
              key={i}
              className="discipline-card rounded border border-white/10 bg-brand p-8 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-hhp-gold/30 hover:shadow-premium sm:p-10"
            >
              <h3 className="relative z-10 mb-4 font-heading text-xl font-semibold uppercase tracking-wide text-white sm:text-2xl">
                {d.title}
              </h3>
              <p className="relative z-10 mb-6 text-sm leading-relaxed text-white/70">
                {d.description}
              </p>
              <div className="relative z-10 flex flex-col gap-3">
                {d.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/70">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 flex-shrink-0 rounded-full bg-hhp-gold"
                    />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
