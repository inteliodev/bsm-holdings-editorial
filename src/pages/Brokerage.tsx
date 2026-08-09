import { Link } from 'react-router-dom';
import { Building, TrendingUp, DollarSign, BarChart3, CheckCircle, ArrowRight, Target, Users, Zap } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
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
              Institutional-grade sales, leasing, and capital markets solutions across multifamily, office, industrial, retail, mixed-use, and senior housing. We underwrite in-house, match buyers against live market data, and optimize every transaction.
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
                Comprehensive investment sales services for transactions ranging from $5M to $500M+ across all major asset classes. In-house underwriting, predictive buyer matching, and market analysis maximize transaction velocity and value.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Asset Classes:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Multifamily ($5M–$500M+)',
                    'Office buildings and portfolios',
                    'Industrial and warehouse properties',
                    'Retail and mixed-use developments',
                    'Senior housing and specialized assets'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Underwriting Capabilities:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Institutional underwriting and risk assessment',
                    'Predictive buyer matching algorithms',
                    'Market analysis and pricing optimization',
                    'Transaction timeline acceleration',
                    'Due diligence automation'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-hhp-accent mt-0.5 flex-shrink-0" />
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
                src="/images/multifamily-hero.jpg" 
                alt="Modern multifamily apartment building" 
                loading="eager"
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leasing Services */}
      <section className="bg-gray-50 section-spacing">
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
                      <CheckCircle className="h-5 w-5 icon-hhp-accent mt-0.5 flex-shrink-0" />
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
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
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
                Sophisticated debt and equity placement services with quantitative risk modeling and capital optimization. We structure complex financing solutions for institutional investors, REITs, and private equity funds across all asset classes.
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
                      <CheckCircle className="h-5 w-5 icon-hhp-accent mt-0.5 flex-shrink-0" />
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
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">Capital Markets Performance</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">$2B+</div>
                    <div className="text-hhp-charcoal">Transactions Facilitated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Data-Driven</div>
                    <div className="text-hhp-charcoal">Risk Assessment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Institutional</div>
                    <div className="text-hhp-charcoal">Lender Relationships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valuations & Advisory */}
      <section className="bg-gray-50 section-spacing">
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
                      <CheckCircle className="h-5 w-5 icon-hhp-accent mt-0.5 flex-shrink-0" />
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
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Institutional</div>
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
            Experience the future of commercial real estate brokerage with vertically integrated execution and institutional-grade expertise.
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