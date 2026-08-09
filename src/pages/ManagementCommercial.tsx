import { Link } from 'react-router-dom';
import { Building, CheckCircle, Shield, FileText, Users, Download, ClipboardCheck, Scale, Handshake, BarChart3, AlertTriangle, FileSearch, Target, TrendingUp, Database, Zap, Home, Wrench, DollarSign, Heart, Settings, Calendar } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import commercialImage from '@/assets/commercial-building.webp';
import { useSEO } from '@/hooks/useSEO';

const ManagementCommercial = () => {
  useSEO({
    title: 'Office Asset Management | HHP Asset Group',
    description: 'Efficient operations with stronger tenant experiences. Office management backed by leasing analytics built for institutional investors.'
  });

  const coreCapabilities = [
    {
      icon: FileText,
      title: 'Lease Administration & Renewal Tracking',
      description: 'Comprehensive lease management with automated renewal monitoring'
    },
    {
      icon: Users,
      title: 'Day-to-Day Operations & Tenant Services',
      description: 'Professional tenant services and operational excellence'
    },
    {
      icon: Wrench,
      title: 'In-House Facility Services',
      description: 'Every trade self-performed — one accountable team, no vendor stack'
    },
    {
      icon: Heart,
      title: 'Tenant Retention & Amenity Programs',
      description: 'Experience-driven programs to enhance tenant loyalty'
    },
    {
      icon: DollarSign,
      title: 'Capital Expenditure Planning & Variance Reporting',
      description: 'Strategic capital planning with transparent reporting'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Reduced OPEX',
      description: 'Vendor consolidation reduces costs'
    },
    {
      title: 'Tenant Retention',
      description: 'Experience programs drive loyalty'
    },
    {
      title: 'Transparent KPIs',
      description: 'Owner dashboards for occupancy and NOI'
    },
    {
      title: 'Portfolio Repositioning',
      description: 'Data-driven support for leasing strategy'
    }
  ];

  const dataInsights = [
    {
      icon: BarChart3,
      title: 'Occupancy and Lease Renewal Dashboards',
      description: 'Real-time tracking of occupancy rates and renewal opportunities'
    },
    {
      icon: TrendingUp,
      title: 'Expense Variance Monitoring',
      description: 'Continuous monitoring of budget vs. actual expenses'
    },
    {
      icon: Users,
      title: 'Tenant Experience Scoring Metrics',
      description: 'Quantified tenant satisfaction and experience tracking'
    },
    {
      icon: Target,
      title: 'Space Utilization Analytics',
      description: 'Data-driven insights on space usage and optimization'
    }
  ];

  const technologyFeatures = [
    {
      icon: FileText,
      title: 'Smart Lease Tracking & Alerts',
      description: 'Automated lease monitoring with critical date alerts'
    },
    {
      icon: BarChart3,
      title: 'Automated Expense Monitoring',
      description: 'Real-time expense tracking and variance analysis'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Facilities Automation',
      description: 'Automated work orders and facilities management'
    },
    {
      icon: Target,
      title: 'Real-Time Ownership Dashboards',
      description: 'Live performance metrics and KPI monitoring'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${commercialImage})` }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Office Asset Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Efficient operations. Stronger tenant experiences.
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
              The office sector faces volatility driven by hybrid work, elevated vacancies, and energy cost inflation. Tenants demand high-quality amenities and flexible lease structures while owners seek to stabilize NOI and reposition assets.
            </p>
            <p className="text-lg leading-relaxed text-hhp-charcoal">
              HHP Asset Group combines operational rigor with leasing analytics to reduce costs, improve tenant experiences, and deliver the reporting sophistication institutional investors demand.
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
            Turning Office Data Into Strategic Intelligence
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
              Our leasing analytics power:
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
        title="Future-proof your office portfolio with data-driven oversight."
        description="Trust HHP Asset Group for efficient office management with data-driven leasing analytics and stronger tenant experiences."
        primaryCTA="Contact Us"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/asset-management"
      />
    </Layout>
  );
};

export default ManagementCommercial;
