import { Link } from 'react-router-dom';
import { Building, CheckCircle, Shield, FileText, Users, Download, ClipboardCheck, Scale, Handshake, BarChart3, AlertTriangle, FileSearch, Target, TrendingUp, Database, Zap, Home, Wrench, DollarSign, Heart, Settings, Calendar, ShoppingBag, Megaphone, Eye } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const ManagementRetail = () => {
  useSEO({
    title: 'Retail Asset Management | HHP Asset Management',
    description: 'Optimized operations with stronger tenant mix. Retail management enhanced by tenant performance insights and NOI protection.'
  });

  const coreCapabilities = [
    {
      icon: DollarSign,
      title: 'CAM Reconciliation and Lease Monitoring',
      description: 'Accurate CAM calculations and comprehensive lease administration'
    },
    {
      icon: Users,
      title: 'Tenant Relations and Retention Programs',
      description: 'Strategic programs to support and retain retail tenants'
    },
    {
      icon: Megaphone,
      title: 'Marketing Support for Tenant Sales Growth',
      description: 'Marketing strategies to drive foot traffic and tenant sales'
    },
    {
      icon: Wrench,
      title: 'Vendor Oversight for Facilities and Janitorial',
      description: 'Strategic vendor management for property maintenance and services'
    },
    {
      icon: BarChart3,
      title: 'Financial Variance Reporting',
      description: 'Comprehensive financial reporting with variance analysis'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Tenant Stability',
      description: 'Programs to support and retain retailers'
    },
    {
      title: 'Transparent CAM',
      description: 'Real-time reconciliation dashboards'
    },
    {
      title: 'Reduced OPEX',
      description: 'Integrated vendor management'
    },
    {
      title: 'Better Reporting',
      description: 'Rent roll clarity for owners'
    }
  ];

  const dataInsights = [
    {
      icon: ShoppingBag,
      title: 'Tenant Mix Performance Analytics',
      description: 'Data-driven insights on tenant performance and mix optimization'
    },
    {
      icon: BarChart3,
      title: 'CAM Reconciliation Dashboards',
      description: 'Real-time CAM tracking and reconciliation monitoring'
    },
    {
      icon: Calendar,
      title: 'Vacancy and Lease Expiry Forecasting',
      description: 'Predictive analytics for lease expirations and vacancy planning'
    },
    {
      icon: Eye,
      title: 'Retail Foot Traffic Insights',
      description: 'Foot traffic analytics where available for performance optimization'
    }
  ];

  const technologyFeatures = [
    {
      icon: FileText,
      title: 'Automated Lease Compliance Tracking',
      description: 'Automated monitoring of lease terms and compliance requirements'
    },
    {
      icon: AlertTriangle,
      title: 'CAM Recovery Variance Alerts',
      description: 'Automated alerts for CAM recovery discrepancies and variances'
    },
    {
      icon: Target,
      title: 'Predictive Vacancy Analytics',
      description: 'Predictive forecasting for tenant turnover and vacancy risk'
    },
    {
      icon: BarChart3,
      title: 'Rent Roll Dashboards',
      description: 'Real-time rent roll visibility and performance tracking'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/retail-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Retail Asset Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Optimized operations. Stronger tenant mix.
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
              Retail portfolios face consumer shifts, e-commerce competition, and evolving tenant needs. Owners must curate tenant mix, enforce CAM recoveries, and manage rising OPEX while protecting NOI.
            </p>
            <p className="text-lg leading-relaxed text-hhp-charcoal">
              HHP Asset Management integrates brokerage, management, and leasing insights to reduce costs, protect revenue, and give owners transparency into tenant performance.
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
            Turning Retail Data Into Performance Intelligence
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
              Our platform delivers:
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
        title="Protect NOI with smarter, transparent retail management."
        description="Trust HHP Asset Management for optimized retail management with data-driven insights and stronger tenant mix strategies."
        primaryCTA="Contact Us"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/asset-management"
      />
    </Layout>
  );
};

export default ManagementRetail;
