import { Link } from 'react-router-dom';
import { Building, CheckCircle, Shield, FileText, Users, Download, ClipboardCheck, Scale, Handshake, BarChart3, AlertTriangle, FileSearch, Target, TrendingUp, Database, Zap, Home, Wrench, DollarSign, Heart, Settings, Calendar } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const ManagementIndustrial = () => {
  useSEO({
    title: 'Industrial Asset Management | HHP Asset Management',
    description: 'Streamlined logistics with reliable tenant performance. Industrial management backed by predictive analytics for operational excellence.'
  });

  const coreCapabilities = [
    {
      icon: Building,
      title: 'Warehouse and Logistics Operations',
      description: 'Comprehensive management of warehouse and distribution facilities'
    },
    {
      icon: FileText,
      title: 'Lease Tracking & Escalation Management',
      description: 'Automated lease administration with escalation monitoring'
    },
    {
      icon: Wrench,
      title: 'Preventive Maintenance and Vendor Oversight',
      description: 'Strategic maintenance programs with vendor performance tracking'
    },
    {
      icon: Shield,
      title: 'Compliance and Safety Programs',
      description: 'Full compliance with environmental, OSHA, and safety regulations'
    },
    {
      icon: DollarSign,
      title: 'Utility and Expense Cost Tracking',
      description: 'Real-time utility monitoring and expense variance analysis'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Faster Lease-Up',
      description: 'Data-driven tenant prospecting'
    },
    {
      title: 'Reduced Downtime',
      description: 'Predictive maintenance ensures reliability'
    },
    {
      title: 'Clear Cost Controls',
      description: 'Utility and vendor performance tracking'
    },
    {
      title: 'Transparent Reporting',
      description: 'Real-time dashboards for NOI'
    }
  ];

  const dataInsights = [
    {
      icon: Calendar,
      title: 'Predictive Maintenance Scheduling',
      description: 'Predictive scheduling to prevent equipment failures'
    },
    {
      icon: BarChart3,
      title: 'Lease Escalation and Rent Roll Analytics',
      description: 'Automated tracking of lease escalations and rent roll performance'
    },
    {
      icon: AlertTriangle,
      title: 'Vacancy Risk Forecasting',
      description: 'Predictive analytics to identify potential tenant departures'
    },
    {
      icon: Target,
      title: 'Cost-per-Square-Foot Benchmarking',
      description: 'Market comparison and optimization of operational costs'
    }
  ];

  const technologyFeatures = [
    {
      icon: Zap,
      title: 'Utility Monitoring and Variance Alerts',
      description: 'Automated utility tracking with cost variance notifications'
    },
    {
      icon: Shield,
      title: 'SLA Tracking for Vendor Compliance',
      description: 'Real-time monitoring of vendor service level agreements'
    },
    {
      icon: FileText,
      title: 'Lease Abstraction and Escalation Tracking',
      description: 'Automated lease data extraction and escalation management'
    },
    {
      icon: BarChart3,
      title: 'Dashboards for Downtime and Vacancy Metrics',
      description: 'Real-time visibility into operational performance and vacancy rates'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/industrial-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Industrial Asset Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Streamlined logistics. Reliable tenant performance.
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
              Industrial assets are in demand but face rising construction, utility, and labor costs. Tenants require uptime, operational reliability, and lease flexibility. Owners must deliver predictable NOI while supporting supply chain tenants in a fast-moving market.
            </p>
            <p className="text-lg leading-relaxed text-hhp-charcoal">
              HHP Asset Management leverages predictive analytics to reduce downtime, optimize lease escalations, and provide owners real-time cost visibility.
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
            Turning Industrial Data Into Operational Intelligence
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
              Our platform automates:
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
        title="Streamline industrial assets with predictive, data-driven oversight."
        description="Trust HHP Asset Management for streamlined industrial management with predictive analytics and reliable tenant performance."
        primaryCTA="Contact Us"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/asset-management"
      />
    </Layout>
  );
};

export default ManagementIndustrial;
