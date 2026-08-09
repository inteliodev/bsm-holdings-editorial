import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const Opportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: 'Property Management - Operations',
      department: 'Operations',
      location: 'Tulsa, OK / Multiple Oklahoma locations',
      description: 'Lead day-to-day operations for institutional-grade commercial properties. Direct accountability for financial performance, tenant relations, and asset preservation.',
    },
    {
      id: 2,
      title: 'Leasing & Representation - Brokerage',
      department: 'Brokerage',
      location: 'Tulsa, OK / Oklahoma City, OK',
      description: 'Represent owners and tenants in commercial leasing transactions. Focus on long-term asset value, not just deal volume.',
    },
    {
      id: 3,
      title: 'Financial Services - Analysis',
      department: 'Financial Services',
      location: 'Oklahoma City, OK / Remote',
      description: 'Provide real estate financial analysis and reporting for owners and boards. Bridge operations, brokerage, and financial planning.',
    },
    {
      id: 4,
      title: 'Technology Implementation - Systems',
      department: 'Technology',
      location: 'Tulsa, OK / Remote',
      description: 'Deploy and maintain proprietary data platforms and systems. Work directly with operations and brokerage teams to solve real problems.',
    },
    {
      id: 5,
      title: 'Advisory Services - Consulting',
      department: 'Advisory',
      location: 'Tulsa, OK',
      description: 'Advise owners and boards on complex real estate decisions. Site selection, portfolio optimization, and strategic planning.',
    },
    {
      id: 6,
      title: 'Broker Support - Compliance',
      department: 'Operations',
      location: 'Tulsa, OK',
      description: 'Provide Broker of Record services and compliance oversight for independent brokerages. Regulatory excellence and operational support.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy text-white py-20 sm:py-24 lg:py-28">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Opportunities
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90">
              Join HHP Asset Group
            </h2>
          </div>
        </div>
      </section>

      {/* Why Join HHP Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-hhp-navy mb-8 sm:mb-12">
              Why Join HHP
            </h2>
            
            <div className="space-y-6 sm:space-y-8 text-lg leading-relaxed text-hhp-charcoal">
              <p>
                HHP is an operator-led firm. Our leadership team has managed assets, closed transactions, and solved real problems in commercial real estate. We don't just talk about execution — we build it into everything we do.
              </p>
              
              <p>
                You'll work on institutional-scale assets and challenges. Our portfolio includes multifamily, office, retail, industrial, and senior housing properties. You'll gain exposure to technology, brokerage, management, and advisory — not siloed into one function.
              </p>
              
              <p>
                Direct accountability and ownership mentality define how we operate. There's no call-center model or bureaucratic layers. You'll see how your work directly impacts asset performance, client relationships, and firm growth.
              </p>
              
              <p>
                This is an opportunity to build something meaningful in real estate. We're not a legacy firm coasting on reputation. We're building the tools, processes, and culture that will define how commercial real estate services work in the next decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-hhp-navy mb-8 sm:mb-12">
              Current Opportunities
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              {opportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-hhp-navy mb-3">
                        {opportunity.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-hhp-charcoal mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-hhp-navy" />
                          <span className="text-base">{opportunity.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-hhp-navy" />
                          <span className="text-base">{opportunity.location}</span>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg leading-relaxed text-hhp-charcoal">
                        {opportunity.description}
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-hhp-navy font-medium hover:text-hhp-navy/80 transition-colors duration-200 group"
                    onClick={() => {
                      trackButtonClick(`apply_${opportunity.id}`, 'opportunities_listing');
                      trackLinkClick(`Apply - ${opportunity.title}`, '/contact');
                    }}
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-hhp-navy mb-6">
              Ready to Apply?
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-hhp-charcoal mb-8 sm:mb-10">
              If you don't see a position that matches your background, we still want to hear from you. We're always looking for talented operators, analysts, and builders who share our approach to real estate.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-hhp-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-hhp-navy/90 transition-all duration-200 shadow-lg w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
              onClick={() => {
                trackButtonClick('submit_application', 'opportunities_cta');
                trackLinkClick('Submit Application', '/contact');
              }}
            >
              Submit Application
              <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="mt-6 text-base text-hhp-charcoal">
              Or email us at{' '}
              <a
                href="mailto:careers@hhpasset.com"
                className="text-hhp-navy hover:underline"
                onClick={() => {
                  trackLinkClick('Email Careers', 'mailto:careers@hhpasset.com');
                }}
              >
                careers@hhpasset.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Opportunities;

