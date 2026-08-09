import { Link } from 'react-router-dom';
import { Building, TrendingUp, Users, Target, CheckCircle, ArrowRight, BarChart3, FileText } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const BrokerageLandlordRep = () => {
  useSEO({
    title: 'Landlord Representation | HHP Asset Management',
    description: 'Leasing velocity powered by research and outreach. Expert landlord representation for maximum occupancy and rental income.'
  });

  const services = [
    {
      icon: <Building className="h-6 w-6" />,
      title: 'Property Positioning',
      description: 'Strategic market positioning and competitive analysis to maximize property appeal.'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Offering Memorandum Creation',
      description: 'Professional marketing materials and property documentation for tenant outreach.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Digital Syndication',
      description: 'Multi-platform marketing campaigns across industry-leading listing services.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Broker Outreach Campaigns',
      description: 'Targeted outreach to tenant representatives and direct tenant prospects.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Tour Management',
      description: 'Coordinated property tours and prospect qualification processes.'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Term Sheet Negotiation',
      description: 'Strategic negotiation of lease terms to maximize landlord returns.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Renewal Strategy',
      description: 'Proactive renewal campaigns and tenant retention programs.'
    }
  ];

  const proofPoints = [
    { metric: 'Positioned Before Listing', label: 'We assess condition, deferred maintenance, and curb appeal first, because a building shows better before it is marketed.' },
    { metric: 'Self-Performed Make-Ready', label: 'Make-ready and tenant improvement work is performed in house, so occupancy is not delayed by a subcontractor calendar.' },
    { metric: 'Underwritten Tenants', label: 'We review covenant strength and use, not just the rate offered, so you are not re-leasing the space in two years.' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Landlord Representation
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Leasing velocity powered by research and outreach. Expert landlord representation for maximum occupancy and rental income.
            </p>
            <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
              List Your Property
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">Comprehensive Leasing Services</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Our landlord representation team delivers strategic marketing and leasing expertise to maximize your property's performance.
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
            <h2 className="section-title text-hhp-navy mb-6">How We Represent Landlords</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Our strategic approach consistently delivers superior leasing results for property owners.
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
            <h2 className="section-title text-hhp-navy mb-6">Our Leasing Process</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              A systematic approach to maximizing occupancy and rental income for your property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Market Analysis', description: 'Comprehensive market research and competitive positioning strategy.' },
              { step: '02', title: 'Marketing Launch', description: 'Multi-channel marketing campaign and broker outreach initiatives.' },
              { step: '03', title: 'Prospect Management', description: 'Qualified lead generation and coordinated property tours.' },
              { step: '04', title: 'Lease Execution', description: 'Strategic negotiation and seamless lease execution process.' }
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
        title="Ready to Maximize Your Property's Performance?"
        description="Let our landlord representation experts accelerate your leasing velocity with strategic marketing and proven negotiation tactics."
        primaryCTA="List Your Property"
        primaryLink="/contact"
        secondaryCTA="View All Services"
        secondaryLink="/brokerage"
      />
    </Layout>
  );
};

export default BrokerageLandlordRep;
