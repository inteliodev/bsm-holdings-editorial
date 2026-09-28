import Layout from '@/components/Layout/Layout';
import { ArrowRight, BarChart3, Building2, Users, TrendingUp, Target, MapPin, DollarSign, Shield, Zap, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const AdvisoryAnalytics = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/advisory-analytics-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-8 drop-shadow-lg">
              From Data to Direction
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8 drop-shadow-md">
              BSM Holdings integrates advisory expertise with proprietary analytics to unlock clarity, 
              optimize portfolios, and guide smarter investment decisions.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
              onClick={() => {
                trackButtonClick('explore_advisory_services_cta', 'advisory_analytics_hero');
                trackLinkClick('Explore Advisory Services', '/contact');
              }}
            >
              Explore Advisory Services
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
                Our Advisory & Analytics platform doesn't stop at data collection — we transform raw 
                information into strategic, actionable insights that inform capital allocation, tenant 
                strategies, and risk management. Every recommendation is rooted in data, validated by 
                experience, and customized for your portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-surface section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Key Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Market Intelligence */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <TrendingUp className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-3">Market Intelligence</h3>
                  <div className="space-y-2">
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Real-time rent, sales, and absorption data across asset classes.</span>
                    </p>
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Demographic, mobility, and psychographic overlays for demand forecasting.</span>
                    </p>
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Data-driven submarket risk scoring.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Analytics */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <BarChart3 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-3">Portfolio Analytics</h3>
                  <div className="space-y-2">
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Asset performance benchmarking against peer sets and REIT comparables.</span>
                    </p>
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Hold/Sell/Refinance analysis with projected IRR impacts.</span>
                    </p>
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">ESG and sustainability scoring to align with investor requirements.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Occupier Strategy */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Building2 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-3">Occupier Strategy</h3>
                  <div className="space-y-2">
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Site selection using workforce analytics, commute mapping, and cost modeling.</span>
                    </p>
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Workplace utilization studies integrating IoT and sensor data.</span>
                    </p>
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Headcount planning and footprint optimization.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Capital Advisory */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <DollarSign className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-3">Capital Advisory</h3>
                  <div className="space-y-2">
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Capital stack optimization with scenario planning.</span>
                    </p>
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Debt sourcing analysis: interest rate forecasting, lender scoring.</span>
                    </p>
                    <p className="text-hhp-charcoal flex items-start">
                      <CheckCircle className="h-4 w-4 text-hhp-navy mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Investor-ready decks with dynamic financial visuals.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-8 text-center">Differentiator</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-hhp-accent/5 rounded-xl p-8 border border-hhp-accent/20">
              <p className="text-lg leading-relaxed text-hhp-charcoal">
                Most firms outsource their analytics to third parties. We build and own our platforms, 
                ensuring speed, accuracy, and complete customization. This is data-native advisory that 
                merges rigorous analytics with hands-on operating experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Tab Examples */}
      <section className="bg-surface section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Insights Tab Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <span className="inline-block bg-hhp-accent/10 text-hhp-navy px-3 py-1 rounded-full text-sm font-medium mb-4">
                Research Report
              </span>
              <h3 className="text-xl font-semibold text-hhp-navy mb-3">
                "Data and Cap Rates: How Predictive Models are Redefining Valuations"
              </h3>
              <p className="text-hhp-charcoal">
                Deep dive into how predictive analytics are transforming property valuation methodologies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <span className="inline-block bg-hhp-accent/10 text-hhp-navy px-3 py-1 rounded-full text-sm font-medium mb-4">
                Strategic Analysis
              </span>
              <h3 className="text-xl font-semibold text-hhp-navy mb-3">
                "Beyond Benchmarking: Portfolio Optimization in 2026"
              </h3>
              <p className="text-hhp-charcoal">
                Future-focused insights on portfolio strategy and optimization techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-8">
            Transform your data into strategic advantage.
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            onClick={() => {
              trackButtonClick('request_advisory_demo_cta', 'advisory_analytics_banner');
              trackLinkClick('Request Advisory Demo', '/contact');
            }}
          >
            Request Advisory Demo
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AdvisoryAnalytics;