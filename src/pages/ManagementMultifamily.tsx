import { Link } from 'react-router-dom';
import { Building, CheckCircle, Shield, FileText, Users, Download, ClipboardCheck, Scale, Handshake, BarChart3, AlertTriangle, FileSearch, Target, TrendingUp, Database, Zap, Home, Wrench, DollarSign, Heart, Settings } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const ManagementMultifamily = () => {
  useSEO({
    title: 'Multifamily Asset Management | HHP Asset Management',
    description: 'Scalable operations with resident-first focus. Disciplined multifamily management enhanced by workflow automation.'
  });

  const coreCapabilities = [
    {
      icon: DollarSign,
      title: 'Rent Collection & Renewal Optimization',
      description: 'Predictive analytics to maximize revenue and tenant retention'
    },
    {
      icon: Users,
      title: 'Resident Lifecycle Management',
      description: 'Comprehensive programs to drive retention and satisfaction'
    },
    {
      icon: TrendingUp,
      title: 'Capital Planning & Long-Term Expense Forecasting',
      description: 'Data-driven forecasting to protect NOI and plan investments'
    },
    {
      icon: Wrench,
      title: 'Maintenance, Landscaping & Janitorial Oversight',
      description: 'SLA-controlled vendor management with performance tracking'
    },
    {
      icon: BarChart3,
      title: 'Variance Reporting & Financial Packages',
      description: 'Board-ready financial reporting designed for ownership review'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Higher Occupancy & Renewals',
      description: 'Predictive retention analytics improve tenant stability'
    },
    {
      title: 'Lower OPEX',
      description: 'Integrated in-house services reduce vendor markups'
    },
    {
      title: 'Transparent Reporting',
      description: 'Financials designed for boards and investors'
    },
    {
      title: 'Proactive Capital Planning',
      description: 'Data-driven forecasting to protect NOI'
    }
  ];

  const dataInsights = [
    {
      icon: AlertTriangle,
      title: 'Predictive Vacancy & Turnover Risk Alerts',
      description: 'Early warning system for potential tenant departures'
    },
    {
      icon: BarChart3,
      title: 'Renewal Pipeline Dashboards',
      description: 'Real-time tracking of lease renewal opportunities'
    },
    {
      icon: TrendingUp,
      title: 'Expense Variance Tracking',
      description: 'Real-time monitoring of budget vs. actual expenses'
    },
    {
      icon: Target,
      title: 'Occupancy Benchmarking',
      description: 'Market-wide performance comparison and optimization'
    }
  ];

  const technologyFeatures = [
    {
      icon: Users,
      title: 'Automated Leasing Workflows',
      description: 'Streamlined resident communication and application processing'
    },
    {
      icon: Wrench,
      title: 'Smart Maintenance Dispatch',
      description: 'Vendor scorecards and automated work order management'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Dashboards',
      description: 'Live cash flow and NOI monitoring for instant insights'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/multifamily-image-trendy.jpg)' }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Multifamily Asset Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Scalable operations. Resident-first focus.
            </p>
                        
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
                Request a Consultation
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Download Owner Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sub-Navigation */}
      <ServicesSubNav />

      {/* Market Context */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-hhp-navy mb-6">Market Context</h2>
            <p className="text-lg leading-relaxed text-hhp-charcoal mb-8">
              The multifamily sector is experiencing unprecedented pressure. Insurance and labor costs are climbing, tenants demand digital experiences, and competition for renewals is fierce. Owners must deliver consistent returns while protecting NOI from inflationary expense creep.
            </p>
            <p className="text-lg leading-relaxed text-hhp-charcoal">
              HHP delivers disciplined management enhanced by workflow automation — controlling operating cost, strengthening tenant retention, and giving owners reporting they can act on.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <IconGrid 
            title="Core Capabilities"
            services={coreCapabilities}
            columns={3}
          />
        </div>
      </section>

      {/* Owner Benefits */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="section-title text-hhp-navy mb-6">Owner Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ownerBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-hhp-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">{benefit.title}</h3>
                <p className="text-hhp-charcoal leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data & Insights */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-6 text-center">Data & Insights</h2>
          <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto text-center mb-12">
            Turning Data Into Action
          </p>
          <IconGrid 
         
            services={dataInsights}
            columns={3}
          />
        </div>
      </section>

      {/* Technology Edge */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-6">Technology Edge</h2>
            <p className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
              We power smarter multifamily operations with:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/90 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Banner */}
      <PremiumCTABanner
        title="Run multifamily assets with real cost discipline and data owners can see."
        description="Trust HHP Asset Management for scalable multifamily management with predictive analytics and resident-first operations."
        primaryCTA="Contact Us"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/asset-management"
      />
    </Layout>
  );
};

export default ManagementMultifamily;
