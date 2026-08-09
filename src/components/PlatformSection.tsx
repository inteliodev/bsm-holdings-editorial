import { DollarSign, Shield, Wrench, Camera, Phone, BarChart3 } from 'lucide-react';

const platformCapabilities = [
  {
    icon: DollarSign,
    title: 'Financial Intelligence',
    description: 'Plaid-connected banking with automated cash flow monitoring, anomaly detection, and real-time owner visibility. No more waiting until the 10th for a PDF.',
  },
  {
    icon: Shield,
    title: 'Compliance Engine',
    description: 'Automated compliance monitoring, certification tracking, and inspection readiness scoring. Built for operators who need continuous audit readiness — not quarterly scrambles.',
  },
  {
    icon: Wrench,
    title: 'Predictive Maintenance',
    description: 'Automated work order triage, predictive maintenance flagging, and same-day dispatch of our own crews through HHP Facility Services. Every request tracked, every pattern surfaced.',
  },
  {
    icon: Camera,
    title: 'Surveillance & Security',
    description: 'Camera network with continuous monitoring, wireless bridge infrastructure, and integrated access control across every managed property.',
  },
  {
    icon: Phone,
    title: 'Communications Hub',
    description: 'Integrated phone system with call logging, automated follow-up, and centralized messaging across properties. Every tenant interaction recorded and searchable.',
  },
  {
    icon: BarChart3,
    title: 'Owner Intelligence',
    description: 'Written monthly commentary alongside financials — variance analysis, trend forecasting, budget-to-actual with explanations. Not just numbers, insight.',
  },
];

const PlatformSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24 relative z-30">
      <div className="container-premium">
        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C8952E' }}>Vertically Integrated</div>
        <h2 className="section-title text-hhp-navy mb-6">
          One Integrated Operating Platform<br className="hidden sm:block" />
          Behind Every Property
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-hhp-charcoal max-w-3xl mb-12 sm:mb-16">
          Brokerage, management, and facility services run on one system of record — six integrated layers we designed and built ourselves rather than licensed. Nothing falls through the cracks, costs stay visible, and every decision is backed by current data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformCapabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div key={i} className="platform-card-hover bg-white border border-gray-200 rounded-xl p-8 sm:p-10">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(200,149,46,0.12)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#C8952E' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-hhp-navy mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
