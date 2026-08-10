import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, FileText, BarChart3, Download, Briefcase } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import AccessRequestForm from '@/components/AccessRequestForm';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

/**
 * The sign-in form here authenticated nothing: it awaited a 1500ms timeout and
 * then showed a success toast, so any email with any 8-character password
 * "succeeded". Nothing was stored or transmitted, the redirect was commented
 * out, /investor-portal/dashboard does not exist as a route, and this file
 * never imported Supabase. It also collected real passwords into React state.
 *
 * It is now an access request that actually delivers, through the same webhook
 * and contacts table the contact form uses.
 */
const InvestorPortal = () => {
  return (
    <Layout>
      <Helmet>
        <title>Investor Portal - HHP Asset Management</title>
        <meta
          name="description"
          content="Request access to the HHP investor portal for portfolio performance, financial reports, market insights, transaction history, and investment documentation."
        />
      </Helmet>

      {/* Hero/Header Section */}
      <section
        className="relative flex min-h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat py-16 sm:min-h-[500px] sm:py-20 lg:py-24"
        style={{ backgroundImage: 'url(/images/investment-sales-capital-markets-hero.webp)' }}
      >
        <div className="absolute inset-0 scrim-hero" />
        <div className="container-premium relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5 text-white/85">Investor Portal</span>
            <h1 className="hero-title mb-5 text-white">Investor Portal</h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Secure, comprehensive access to real-time performance metrics, financial reporting,
              and detailed investment reporting.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface">
        <div className="container-premium">
          <div className="mx-auto max-w-md">
            <div className="mb-8">
              <h2 className="font-display text-display-md text-hhp-navy">Request access</h2>
              <p className="mt-3 leading-relaxed text-hhp-charcoal/80">
                Tell us who you are and which investments you hold, and we'll get your portal
                access set up.
              </p>
            </div>

            <AccessRequestForm
              inquiryType="Investor Portal Access"
              contextLabel="Entity or investment"
              contextPlaceholder="e.g. Venture Villa I"
              analyticsId="investor_portal"
            />

            {/* Portal Features Section */}
            <div className="mb-8 mt-8 rounded-lg bg-white p-6 shadow-elegant sm:p-8">
              <h3 className="mb-4 flex items-center text-lg font-semibold text-hhp-navy">
                <Briefcase className="mr-2 h-5 w-5" />
                Portal Features
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-hhp-navy" />
                  <div>
                    <p className="text-sm font-medium text-hhp-charcoal">
                      Real-time Portfolio Performance
                    </p>
                    <p className="text-xs text-hhp-charcoal/70">Live metrics and analytics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="mt-0.5 h-5 w-5 flex-shrink-0 text-hhp-navy" />
                  <div>
                    <p className="text-sm font-medium text-hhp-charcoal">
                      Asset-Level Financial Reports
                    </p>
                    <p className="text-xs text-hhp-charcoal/70">Detailed performance data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-hhp-navy" />
                  <div>
                    <p className="text-sm font-medium text-hhp-charcoal">
                      Market Insights &amp; Analysis
                    </p>
                    <p className="text-xs text-hhp-charcoal/70">Market research access</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Download className="mt-0.5 h-5 w-5 flex-shrink-0 text-hhp-navy" />
                  <div>
                    <p className="text-sm font-medium text-hhp-charcoal">Document Library</p>
                    <p className="text-xs text-hhp-charcoal/70">Transaction history &amp; docs</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-xs text-hhp-charcoal/70">
                  Additional features: Capital calls and distributions tracking, transaction
                  documentation, compliance reporting, and investor communications.
                </p>
              </div>
            </div>

            {/* Footer Links */}
            <div className="space-y-4 text-center">
              <div className="rounded-lg bg-white p-4 shadow-elegant">
                <p className="mb-2 text-sm font-medium text-hhp-charcoal">Prefer to email?</p>
                <a
                  href="mailto:investors@hhpasset.com"
                  className="text-sm font-medium text-hhp-navy transition-colors hover:text-hhp-navy/80"
                  onClick={() =>
                    trackButtonClick('email_investor_relations', 'investor_portal_page')
                  }
                >
                  investors@hhpasset.com
                </a>
              </div>

              <Link
                to="/"
                className="inline-flex items-center text-sm text-hhp-charcoal transition-colors hover:text-hhp-navy"
                onClick={() => trackLinkClick('Back to Home - Investor', '/')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>

              <div className="text-sm text-hhp-charcoal">
                <span className="mr-2">Need resident access?</span>
                <Link
                  to="/resident-login"
                  className="font-medium text-hhp-navy transition-colors hover:text-hhp-navy/80"
                  onClick={() => {
                    trackLinkClick('Resident Login - Investor', '/resident-login');
                    trackButtonClick('resident_login_link', 'investor_portal_page');
                  }}
                >
                  Resident Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorPortal;
