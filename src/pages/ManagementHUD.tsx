import { Link } from 'react-router-dom';
import { Building, CheckCircle, Shield, FileText, Users, Download, ClipboardCheck, Scale, Handshake, BarChart3, AlertTriangle, FileSearch, Target, TrendingUp, Database, Zap } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const ManagementHUD = () => {
  useSEO({
    title: 'HUD & Affordable Housing Management | HHP Asset Group',
    description: 'Institutional compliance and resident-centered service for HUD properties. Audit-ready operations powered by automated compliance tracking and data-driven insights.'
  });

  const coreCapabilities = [
    {
      icon: Building,
      title: 'HUD Program Oversight',
      description: 'Full administration of HAP contracts, vouchers, and procurement standards'
    },
    {
      icon: ClipboardCheck,
      title: 'Tenant Certifications (50059/EIV)',
      description: 'Timely and accurate processing for move-ins, interims, and annuals'
    },
    {
      icon: FileSearch,
      title: 'MOR & REAC Preparation',
      description: 'Comprehensive audit-ready documentation and on-site readiness'
    },
    {
      icon: Scale,
      title: 'Fair Housing Compliance',
      description: 'Proactive adherence with monitoring and training'
    },
    {
      icon: Handshake,
      title: 'Agency Liaison',
      description: 'Direct communication with HUD and local PHAs'
    },
    {
      icon: BarChart3,
      title: 'Owner Reporting',
      description: 'Transparent, board-ready financial and compliance reporting'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Reduced Compliance Risk',
      description: 'Minimized findings and penalties'
    },
    {
      title: 'Seamless Audit Outcomes',
      description: 'Predictable MOR/REAC success'
    },
    {
      title: 'Maximized Subsidy Performance',
      description: 'Optimized HAP income capture'
    },
    {
      title: 'Professional Oversight',
      description: 'Consistent compliance and financial transparency'
    }
  ];

  const dataInsights = [
    {
      icon: Database,
      title: 'Automated Certification Tracking',
      description: 'EIV alerts and real-time status monitoring'
    },
    {
      icon: BarChart3,
      title: 'Voucher Submission Dashboards',
      description: 'Ensure timeliness and compliance'
    },
    {
      icon: FileText,
      title: 'File Standardization Analytics',
      description: 'Reduce MOR findings through systematic documentation'
    },
    {
      icon: TrendingUp,
      title: 'Subsidy Utilization Tracking',
      description: 'Identify revenue gaps and optimization opportunities'
    },
    {
      icon: Target,
      title: 'Portfolio Benchmarking',
      description: 'Continuous improvement across HUD assets'
    }
  ];

  const technologyFeatures = [
    {
      icon: ClipboardCheck,
      title: 'Certification Automation',
      description: 'Tracks all tenant recert dates and status in real time'
    },
    {
      icon: FileSearch,
      title: 'Audit-Ready Files',
      description: 'Digital documentation system for MOR/REAC'
    },
    {
      icon: Zap,
      title: 'Maintenance Dispatch & SLA Tracking',
      description: 'Ensures unit readiness for inspections'
    },
    {
      icon: BarChart3,
      title: 'Owner Dashboards',
      description: 'Consolidated view of subsidy income, compliance KPIs, and unit performance'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hud-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Institutional Compliance. Resident-Centered Service.
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              HHP Asset Group delivers audit-ready operations across HUD properties, powered by automated compliance tracking and data-driven insights that protect subsidy revenue and ensure resident stability.
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
              HUD and affordable housing properties operate under continuous oversight. MOR reviews, REAC inspections, HAP voucher submissions, and procurement standards create a cycle of regulatory risk. Even minor certification errors can trigger findings, repayments, and subsidy interruptions.

HHP Asset Group transforms HUD compliance into a competitive advantage. We automate certifications, standardize tenant files, and deliver audit-ready reporting — ensuring subsidy revenue flows without interruption.
            </p>
            <p className="text-lg leading-relaxed text-hhp-charcoal">
              HHP Asset Group ensures compliance discipline with HUD programs while using technology to provide owners real-time visibility into their portfolio.
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
      Turning Compliance Data Into Portfolio Intelligence
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
              Compliance Automation for HUD Operations
            </p>
            <p className="text-lg leading-relaxed text-white/90 mt-4">
              We automate the complex layers of HUD compliance and reporting:
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
        title="Protect your HUD portfolio with institutional-grade compliance and data-driven oversight."
        description="Trust HHP Asset Group for precision HUD property management with 99%+ compliance rates and seamless audit outcomes."
        primaryCTA="Contact HHP Asset Group"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/asset-management"
      />
    </Layout>
  );
};

export default ManagementHUD;