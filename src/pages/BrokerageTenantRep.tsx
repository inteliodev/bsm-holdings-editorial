import { Link } from 'react-router-dom';
import { Search, FileText, DollarSign, CheckCircle, ArrowRight, Target, Users, MapPin } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const BrokerageTenantRep = () => {
  useSEO({
    title: 'Tenant Representation | HHP Asset Management',
    description: 'Right-fit space, better terms, data-backed decisions. Expert tenant representation for optimal lease negotiations and space planning.'
  });

  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: 'Needs Analysis',
      description: 'Comprehensive space requirements assessment and market positioning strategy.'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Market Survey',
      description: 'Extensive property tours and market analysis across target submarkets.'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'RFP/RFQ Process',
      description: 'Structured request processes to evaluate multiple property options.'
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Financial Modeling',
      description: 'Total occupancy cost analysis and lease term optimization.'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'LOI and Lease Negotiation',
      description: 'Strategic negotiation of lease terms, TI allowances, and concessions.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'TI Coordination',
      description: 'End-to-end tenant improvement project management and oversight.'
    }
  ];

  const proofPoints = [
    { metric: 'We Represent You Only', label: 'On a tenant engagement we do not also represent the landlord, so there is no split loyalty at the negotiating table.' },
    { metric: 'Full Occupancy Cost', label: 'We model base rent alongside escalations, CAM, TI amortization, and holdover exposure — not just the headline rate.' },
    { metric: 'Operating Reality', label: 'We manage and maintain buildings ourselves, so we can tell you what a space actually costs to occupy.' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Tenant Representation
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Right-fit space, better terms, data-backed decisions. Expert tenant representation for optimal lease negotiations and space planning.
            </p>
            <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
              Start a Space Search
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">Comprehensive Tenant Services</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Our tenant representation team delivers strategic guidance through every phase of your real estate decision-making process.
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
            <h2 className="section-title text-hhp-navy mb-6">How We Represent Tenants</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Our data-driven approach consistently delivers measurable value for our tenant clients.
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
            <h2 className="section-title text-hhp-navy mb-6">Our Process</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              A systematic approach to finding and securing the perfect space for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your space requirements, timeline, and budget constraints.' },
              { step: '02', title: 'Market Analysis', description: 'Survey available properties and analyze market conditions.' },
              { step: '03', title: 'Negotiation', description: 'Secure optimal lease terms through strategic negotiation.' },
              { step: '04', title: 'Execution', description: 'Manage lease execution and coordinate move-in logistics.' }
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
        title="Ready to Find Your Perfect Space?"
        description="Let our tenant representation experts guide you through the entire process with data-driven insights and strategic negotiation."
        primaryCTA="Start a Space Search"
        primaryLink="/contact"
        secondaryCTA="View All Services"
        secondaryLink="/brokerage"
      />
    </Layout>
  );
};

export default BrokerageTenantRep;
