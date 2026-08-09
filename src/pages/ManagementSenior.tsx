import { Link } from 'react-router-dom';
import { Building, CheckCircle, Shield, FileText, Users, Download, ClipboardCheck, Scale, Handshake, BarChart3, AlertTriangle, FileSearch, Target, TrendingUp, Database, Zap, Heart, Stethoscope, GraduationCap, Clock } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const ManagementSenior = () => {
  useSEO({
    title: 'Senior Housing Asset Management | HHP Asset Group',
    description: 'Compassionate service meets institutional oversight. Senior housing management with compliance excellence and resident-centered care.'
  });

  const coreCapabilities = [
    {
      icon: Shield,
      title: 'Licensing & Compliance Management',
      description: 'Full administration of senior housing licenses and regulatory compliance'
    },
    {
      icon: Heart,
      title: 'Resident Lifecycle & Satisfaction Programs',
      description: 'Comprehensive resident care coordination and satisfaction tracking'
    },
    {
      icon: Users,
      title: 'Vendor Oversight for Staffing & Maintenance',
      description: 'Strategic management of healthcare vendors and maintenance providers'
    },
    {
      icon: BarChart3,
      title: 'Expense Monitoring & Financial Reporting',
      description: 'Transparent financial oversight and board-ready reporting'
    },
    {
      icon: Building,
      title: 'Capital Planning & Long-Term Care Compliance',
      description: 'Strategic capital planning with healthcare compliance standards'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Regulatory Compliance',
      description: 'Minimized violations and audit findings'
    },
    {
      title: 'Stable Occupancy & Retention',
      description: 'Improved resident satisfaction and retention rates'
    },
    {
      title: 'Transparent Board Reporting',
      description: 'Clear visibility into operations and financial performance'
    },
    {
      title: 'Improved Resident Satisfaction',
      description: 'Enhanced care quality and family communication'
    }
  ];

  const dataInsights = [
    {
      icon: Heart,
      title: 'Resident Satisfaction Scoring',
      description: 'Real-time satisfaction tracking and family feedback analytics'
    },
    {
      icon: BarChart3,
      title: 'Occupancy Benchmarking',
      description: 'Portfolio-wide occupancy analysis and retention metrics'
    },
    {
      icon: ClipboardCheck,
      title: 'Compliance Tracking Dashboards',
      description: 'Regulatory compliance monitoring and audit readiness'
    },
    {
      icon: TrendingUp,
      title: 'Forecasting for Licensing & Expenses',
      description: 'Predictive analytics for licensing renewals and cost management'
    }
  ];

  const technologyFeatures = [
    {
      icon: AlertTriangle,
      title: 'Automated Compliance Alerts',
      description: 'Automated alerts for licensing deadlines and regulatory changes'
    },
    {
      icon: Users,
      title: 'Staffing/Vendor Performance Dashboards',
      description: 'Real-time performance tracking for healthcare and maintenance vendors'
    },
    {
      icon: Target,
      title: 'Predictive Occupancy Analytics',
      description: 'Predictive forecasting for resident turnover and capacity planning'
    },
    {
      icon: FileSearch,
      title: 'Digital Audit-Ready Files',
      description: 'Comprehensive digital documentation system for regulatory audits'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/senior-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Senior Housing Asset Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Compassionate service. Institutional oversight.
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
            <p className="text-lg leading-relaxed text-hhp-charcoal">
              Senior housing demands both healthcare compliance and hospitality excellence. Owners face rising staffing costs, regulatory oversight, and heightened family expectations. Operational gaps directly impact reputation and revenue stability.

HHP Asset Group combines compassionate service with data-driven analytics to deliver compliance, occupancy stability, and superior resident experiences.
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
            Turning Care Data Into Operational Intelligence
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
              Compliance Automation for Senior Housing Operations
            </p>
            <p className="text-lg leading-relaxed text-white/90 mt-4">
              We automate the complex layers of senior housing compliance and care coordination:
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
        title="Deliver care and compliance with institutional-grade oversight."
        description="Trust HHP Asset Group for compassionate senior housing management with 99%+ compliance rates and exceptional resident satisfaction."
        primaryCTA="Contact Us"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/asset-management"
      />
    </Layout>
  );
};

export default ManagementSenior;