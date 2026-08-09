import Layout from '@/components/Layout/Layout';
import { ArrowRight, Settings, Database, Workflow, Globe, Zap, Shield, Building2, Users, BarChart3, CheckCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const CustomSolutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/custom-solutions.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-8 drop-shadow-lg">
              Technology That Adapts to You
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8 drop-shadow-md">
              Every client has unique goals. HHP designs and deploys bespoke data and automation solutions
              that embed into your operations — unlocking efficiency, compliance, and growth.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
              onClick={() => {
                trackButtonClick('start_custom_project_cta', 'custom_solutions_hero');
                trackLinkClick('Start a Custom Project', '/contact');
              }}
            >
              Start a Custom Project
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-hhp-navy mb-8 text-center">Overview</h2>
            <div className="prose prose-lg mx-auto text-hhp-charcoal">
              <p className="text-lg leading-relaxed mb-6">
                Not every problem is solved by an off-the-shelf tool. That's why HHP offers tailored 
                technology solutions, combining our in-house development expertise with real estate 
                domain mastery. From automating HUD compliance to building investor dashboards, our 
                team delivers scalable, secure, and client-specific systems.
              </p>


            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Capabilities</h2>
          
          <div className="space-y-8">
            {/* Data Infrastructure */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Database className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-4">Data Infrastructure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Custom real estate data warehouses pulling from Yardi, RealPage, CoStar, and public datasets.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        API integrations with financial systems (Oracle, SAP, Dayforce) and CRM.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Automated reporting pipelines withboard-ready dashboards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow Automation */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Workflow className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-4">Workflow Automation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Leasing assistants and chatbots powered by GPT for prospect interaction.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        HUD compliance monitoring with auto-flagged exceptions.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Maintenance and work order routing with predictive prioritization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web & Platform Development */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhip-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Globe className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-4">Web & Platform Development</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Investor portals withlive performance dashboards.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Tenant apps with payment, maintenance, and communication integration.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Custom websites optimized for leasing and portfolio branding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Services */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Settings className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-4">Integration Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        End-to-end system integration with property management software.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Data migration and cleansing for acquisitions.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Legacy system replacement with cloud-native solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Example */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-8 text-center">Spotlight Example</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-hhp-accent/5 rounded-xl p-8 border border-hhp-accent/20">
              <div className="flex items-start mb-4">
                <Zap className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <p className="text-lg leading-relaxed text-hhp-charcoal">
                    "We designed a proprietary compliance and analytics suite for a 3-property HUD-regulated 
                    portfolio. The system cut audit prep time by 60%, reduced compliance exceptions by 40%, and 
                    created a live investor dashboard accessible anytime."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Tab Examples */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Insights Tab Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <span className="inline-block bg-hhp-accent/10 text-hhp-navy px-3 py-1 rounded-full text-sm font-medium mb-4">
                Strategic Analysis
              </span>
              <h3 className="text-xl font-semibold text-hhp-navy mb-3">
                "When to Build vs. Buy: The ROI of Custom Technology in CRE"
              </h3>
              <p className="text-hhp-charcoal">
                Evaluating the cost-benefit analysis of custom technology solutions versus off-the-shelf platforms.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <span className="inline-block bg-hhp-accent/10 text-hhp-navy px-3 py-1 rounded-full text-sm font-medium mb-4">
                Industry Insight
              </span>
              <h3 className="text-xl font-semibold text-hhp-navy mb-3">
                "Compliance Automation: How Technology Is Transforming HUD Operations"
              </h3>
              <p className="text-hhp-charcoal">
                Deep dive into how automation is revolutionizing compliance management in HUD-regulated properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-8">
            Ready to build the technology your portfolio needs?
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            onClick={() => {
              trackButtonClick('request_custom_solution_cta', 'custom_solutions_banner');
              trackLinkClick('Request Custom Solution', '/contact');
            }}
          >
            Request Custom Solution
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CustomSolutions;