import { Link } from 'react-router-dom';
import { MapPin, BarChart3, Target, Users, CheckCircle, ArrowRight, TrendingUp, FileText } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const BrokerageSiteSelection = () => {
  useSEO({
    title: 'Site Selection & Advisory | HHP Asset Management',
    description: 'Multi-factor site scoring—demographics, traffic, competitors, and cost. Expert site selection services for optimal location decisions.'
  });

  const services = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Data Ingestion & Analysis',
      description: 'Comprehensive demographic, economic, and market data analysis for informed decision-making.'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Trade Area Mapping',
      description: 'Geographic analysis and trade area delineation for optimal market penetration.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Drive-Time Analysis',
      description: 'Accessibility analysis and customer convenience factor evaluation.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Co-tenancy Evaluation',
      description: 'Competitive landscape analysis and complementary tenant assessment.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Incentive Identification',
      description: 'Economic development incentives and government program identification.'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Entitlement Path Planning',
      description: 'Zoning analysis and development approval process coordination.'
    }
  ];

  const proofPoints = [
    { metric: 'Total Cost of Occupancy', label: 'We weigh utilities, maintenance burden, and build-out against rent, not rent on its own.' },
    { metric: 'Condition Assessed First', label: 'Our Facility Services team walks the building before you commit, so deferred maintenance turns up in diligence rather than after move-in.' },
    { metric: 'Regional Knowledge', label: 'Working knowledge of submarkets across the Tulsa metro, Pryor, and Oklahoma City.' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Site Selection & Advisory
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Multi-factor site scoring—demographics, traffic, competitors, and cost. Expert site selection services for optimal location decisions.
            </p>
            <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
              Evaluate Markets
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">Comprehensive Site Analysis</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Our site selection team delivers data-driven insights for optimal location decisions across all property types.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="premium-card text-center">
                <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-hhp-charcoal leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="section-title text-hhp-navy mb-6">How We Select Sites</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Our systematic approach consistently delivers optimal site selections with measurable cost savings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proofPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-display font-bold text-hhp-navy mb-3">
                  {point.metric}
                </div>
                <div className="text-hhp-charcoal leading-relaxed">
                  {point.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">Our Site Selection Process</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              A systematic approach to identifying and evaluating optimal locations for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Market Analysis', description: 'Comprehensive demographic and economic market analysis.' },
              { step: '02', title: 'Site Identification', description: 'Targeted site identification and preliminary evaluation.' },
              { step: '03', title: 'Due Diligence', description: 'Detailed site analysis and feasibility assessment.' },
              { step: '04', title: 'Recommendation', description: 'Final site recommendation with supporting analysis.' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-hhp-navy text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-hhp-charcoal leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Banner */}
      <PremiumCTABanner
        title="Ready to Find Your Perfect Location?"
        description="Let our site selection experts guide you through comprehensive market analysis and location evaluation for optimal business outcomes."
        primaryCTA="Evaluate Markets"
        primaryLink="/contact"
        secondaryCTA="View All Services"
        secondaryLink="/brokerage"
      />
    </Layout>
  );
};

export default BrokerageSiteSelection;
