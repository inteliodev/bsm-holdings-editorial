import { Link } from 'react-router-dom';
import { Building, TrendingUp, DollarSign, BarChart3, CheckCircle, ArrowRight, Target, Users, Zap } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { ASSET_CLASSES, assetClassSentence } from '@/data/assetTypes';
import commercialImage from '@/assets/commercial-building.webp';

const Brokerage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Brokerage Services — Backed by In-House Underwriting
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Sales, leasing, and capital markets across {assetClassSentence()}. We
              underwrite in-house, match buyers against live market data, and
              optimize every transaction.
            </p>
            <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Sales */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Investment Sales</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Investment sales across the major asset classes, underwritten in house. Because we also operate buildings, our expense assumptions come from what the work actually costs us — which is what holds up under a buyer's diligence.
              </p>

              {/* The canonical six, from the data module, each linked to its own
                  page. This list was previously five hand-written buckets that
                  agreed with no other surface on the site — it added "mixed-use"
                  and "specialized assets", dropped affordable housing entirely,
                  and none of the entries went anywhere. */}
              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Asset Classes:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {ASSET_CLASSES.map((assetClass) => (
                    <Link
                      key={assetClass.slug}
                      to={assetClass.href}
                      className="tap group flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal transition-colors duration-200 group-hover:text-hhp-navy group-hover:underline">
                        {assetClass.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Underwriting Capabilities:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Underwriting and risk assessment done in house',
                    'Buyer matching against live market data',
                    'Market analysis and pricing optimization',
                    'Transaction timeline acceleration',
                    'Diligence support from our operating and Facility Services teams'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Get Investment Analysis
              </Link>
            </div>
            
            <div>
              <img 
                src="/images/multifamily-image-trendy.jpg" 
                alt="Modern multifamily apartment building" 
                loading="eager"
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leasing Services */}
      <section className="bg-surface section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <TrendingUp className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Leasing Services</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Strategic tenant and landlord representation with predictive vacancy forecasting, rent benchmarking, and lease optimization. Our comprehensive approach maximizes occupancy rates and rental income across all property types.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Service Areas:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Tenant representation and advisory',
                    'Landlord leasing and retention',
                    'Portfolio optimization strategies',
                    'Lease-up acceleration programs',
                    'Market positioning and pricing'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Data-Driven Features:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Vacancy forecasting and prediction',
                    'Rent benchmarking and optimization',
                    'Tenant screening and matching',
                    'Lease renewal probability scoring',
                    'Market trend analysis and insights'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Leasing Consultation
              </Link>
            </div>
            
            <div>
              <img 
                src={commercialImage} 
                alt="Commercial leasing property" 
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Capital Markets */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <DollarSign className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Capital Markets</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Sophisticated debt and equity placement services with quantitative risk modeling and capital optimization. We structure debt and equity for private owners and partnerships across the asset classes we operate.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Capital Solutions:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Debt placement and refinancing',
                    'Equity joint venture structuring',
                    'Recapitalization strategies',
                    'Mezzanine and preferred equity',
                    'Construction and bridge financing'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Risk Modeling:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Credit risk assessment and scoring',
                    'Market volatility analysis',
                    'Capital structure optimization',
                    'Lender matching algorithms',
                    'Portfolio stress testing'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Capital Markets Analysis
              </Link>
            </div>
            
            <div>
              <div className="premium-card">
                {/*
                  The "$2B+ Transactions Facilitated" figure here was presented as a
                  firm track record. It is real, but it belongs to Hayden Ashley
                  personally across prior roles — see the bio on /about — so it is
                  attributed to the individual rather than to HHP.
                */}
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">Capital Markets Experience</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">$2B+</div>
                    <div className="text-hhp-charcoal">
                      In transactions closed by our Managing Principal across prior institutional roles
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Operator-Led</div>
                    <div className="text-hhp-charcoal">
                      Underwriting built on what buildings actually cost us to run
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Regional</div>
                    <div className="text-hhp-charcoal">
                      Lender and buyer relationships across the Tulsa and Oklahoma City metros
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valuations & Advisory */}
      <section className="bg-surface section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <BarChart3 className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Valuations & Advisory</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Comprehensive portfolio valuations, feasibility studies, and corporate real estate advisory services. Our valuation models provide accurate, data-driven insights for investment decisions and strategic planning.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Advisory Services:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Portfolio valuations and appraisals',
                    'Feasibility studies and market analysis',
                    'Corporate real estate strategy',
                    'Asset disposition planning',
                    'Investment due diligence'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Valuation Models:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Automated comparable analysis',
                    'Market trend forecasting',
                    'Risk-adjusted valuations',
                    'Scenario modeling and stress testing',
                    'Real-time market data integration'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Valuation Services
              </Link>
            </div>
            
            <div>
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">Advisory Excellence</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Data-Enhanced</div>
                    <div className="text-hhp-charcoal">Valuation Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Regional</div>
                    <div className="text-hhp-charcoal">Advisory Standards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Data-Driven</div>
                    <div className="text-hhp-charcoal">Strategic Insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Transform Your Portfolio?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the future of commercial real estate brokerage with vertically integrated execution and disciplined execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/technology" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block"
            >
              Explore Our Platform
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Brokerage;