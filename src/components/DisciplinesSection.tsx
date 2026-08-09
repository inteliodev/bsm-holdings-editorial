const disciplines = [
  {
    number: '01',
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
    number: '02',
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
    number: '03',
    title: 'Facility Services',
    description: 'Every trade in-house through HHP Facility Services, LLC — construction, roofing, HVAC, plumbing, electrical, lawncare, and janitorial. Same-day dispatch, owner-accountable.',
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8" style={{ backgroundColor: 'rgba(200,149,46,0.15)', border: '1px solid rgba(200,149,46,0.25)', color: '#C8952E' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C8952E' }} />
          What We Do
        </div>
        <h2 className="section-title text-hhp-navy mb-6">
          Three Disciplines.<br />
          One Integrated Platform.
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-hhp-charcoal max-w-3xl mb-12 sm:mb-16">
          We don't list tasks — we deliver outcomes. Every service line runs on one integrated platform we built ourselves, around the metrics that actually matter to owners.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {disciplines.map((d, i) => (
            <div key={i} className="discipline-card bg-hhp-navy rounded-xl p-8 sm:p-10">
              <span className="card-number">{d.number}</span>
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-white mb-4 relative z-10 tracking-wide uppercase">
                {d.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 mb-6 relative z-10">
                {d.description}
              </p>
              <div className="flex flex-col gap-3 relative z-10">
                {d.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#C8952E' }} />
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
