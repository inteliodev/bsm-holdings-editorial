import Layout from '@/components/Layout/Layout';
import { ArrowRight, Brain, BarChart3, Building2, Users, DollarSign, Clock, CheckCircle, TrendingUp, Shield, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const Platforms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/platforms-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-8 drop-shadow-lg">
              Proprietary Platforms Transforming Real Estate
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8 drop-shadow-md">
              From acquisitions to tenant retention, BSM Holdings' purpose-built systems accelerate
              decision-making, remove manual steps, and keep operating cost visible
              across every asset class.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
              onClick={() => {
                trackButtonClick('request_demo_cta', 'platforms_hero');
                trackLinkClick('See the Systems', '/contact');
              }}
            >
              See the Systems
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
                Unlike traditional firms that rely on static reports or generic SaaS tools, BSM Holdings has 
                engineered vertical-specific platforms built on proprietary and market data. Each
                platform is embedded into daily operations, producing real-time, predictive, and
                prescriptive insights that give clients an edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platforms */}
      <section className="bg-surface section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Core Platforms</h2>
          
          <div className="space-y-8">
            {/* Deal Intelligence */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-2">Deal Intelligence Engine</h3>
                  <p className="text-lg text-hhp-charcoal mb-4">
                    Automated valuation models with live market comps, cap rate trending, and sensitivity analysis.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Predictive deal scoring:</strong> ranks opportunities based on NOI growth potential, market absorption, and investor risk tolerance.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Live valuation models</strong> with cap rate trending and sensitivity analysis.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Instant underwriting models</strong> with auto-generated offering memoranda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leasing */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Building2 className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-2">Portfolio & Leasing Optimizer</h3>
                  <p className="text-lg text-hhp-charcoal mb-4">
                    Predictive rent roll modeling with scenario-based vacancy and renewal simulations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Smart prospect targeting:</strong> identifies high-probability tenants and matches them to spaces.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Scenario modeling</strong> with vacancy and renewal simulations.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Digital leasing assistant</strong> that automates scheduling, LOIs, and document workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Multifamily */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Users className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-2">Multifamily Performance Suite</h3>
                  <p className="text-lg text-hhp-charcoal mb-4">
                    Rent optimization using demand signals, local comps, and seasonality.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Tenant retention engine</strong> predicting turnover 90+ days in advance.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Dynamic rent optimization</strong> using demand signals and local comps.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Data-driven maintenance prioritization</strong> for lower operating costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <DollarSign className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-2">Financial Automation Hub</h3>
                  <p className="text-lg text-hhp-charcoal mb-4">
                    Continuous variance tracking across budgets, forecasts, and actuals.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Automated reconciliations</strong> integrated with Yardi, RealPage, Oracle, and Dayforce.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Predictive forecasting models:</strong> interest rate scenarios, NOI sensitivity, refinance timing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Why It Matters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Speed</h3>
              <p className="text-hhp-charcoal">Insights delivered instantly, not weeks later.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Precision</h3>
              <p className="text-hhp-charcoal">Models built specifically on real estate data, not generic benchmarks.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Value Creation</h3>
              <p className="text-hhp-charcoal">Higher NOI, lower costs, faster leasing cycles.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Transparency</h3>
              <p className="text-hhp-charcoal">Dashboards and reports built for boards, lenders, and investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/*
        Removed: an "Insights Tab Examples" section holding a "Case Study" card quoting
        "We reduced underwriting time by 70% across a $100M multifamily pipeline" with
        no client, date, or source, and a "Whitepaper" card for a document that does not
        exist. Reinstate only with attributable material.
      */}

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-8">
            Want to see the systems running?
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            onClick={() => {
              trackButtonClick('request_demo_cta', 'platforms_banner');
              trackLinkClick('See the Systems', '/contact');
            }}
          >
            See the Systems
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Platforms;