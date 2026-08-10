import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import AccessRequestForm from '@/components/AccessRequestForm';
import { CONTACT_EMAIL } from '@/data/serviceArea';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

/**
 * The sign-in form here authenticated nothing: it awaited a 1500ms timeout and
 * then showed a success toast, so any email with any 6-character password
 * "succeeded". Nothing was stored or transmitted, the redirect was commented
 * out, /resident-portal does not exist as a route, and this file never imported
 * Supabase.
 *
 * It is now an access request that actually delivers, through the same webhook
 * and contacts table the contact form uses.
 */
const ResidentLogin = () => {
  return (
    <Layout>
      <Helmet>
        <title>Resident Access - HHP Asset Management</title>
        <meta
          name="description"
          content="Request access to the HHP resident portal to pay rent, submit maintenance requests, and reach your on-site team."
        />
      </Helmet>

      {/* Hero/Header Section */}
      <section
        className="relative flex min-h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat py-16 sm:min-h-[500px] sm:py-20"
        style={{ backgroundImage: 'url(/images/resident-login-image.avif)' }}
      >
        <div className="absolute inset-0 scrim-hero" />
        <div className="container-premium relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-5 text-white/85">Residents</span>
            <h1 className="hero-title mb-5 text-white">Resident Access</h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Request your resident portal login and we'll get you set up.
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
                Tell us your name and which community you live in, and your on-site team will get
                your access set up.
              </p>
            </div>

            <AccessRequestForm
              inquiryType="Resident Portal Access"
              contextLabel="Property or community"
              contextPlaceholder="e.g. Mayor Wallis Manor"
              analyticsId="resident_portal"
            />

            {/* Footer Links */}
            <div className="mt-8 space-y-4 text-center">
              <Link
                to="/"
                className="tap inline-flex items-center text-sm text-hhp-charcoal transition-colors hover:text-hhp-navy"
                onClick={() => trackLinkClick('Back to Home', '/')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <div className="text-sm text-hhp-charcoal">
                <span className="mr-2">Need investor access?</span>
                <Link
                  to="/investor-portal"
                  className="tap font-medium text-hhp-navy transition-colors hover:text-hhp-navy/80"
                  onClick={() => {
                    trackLinkClick('Investor Portal', '/investor-portal');
                    trackButtonClick('investor_portal_link', 'resident_login_page');
                  }}
                >
                  Investor Portal
                </Link>
              </div>
              <div className="text-sm text-hhp-charcoal/70">
                <p>Need help? Contact us at</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="tap text-hhp-navy transition-colors hover:text-hhp-navy/80"
                  onClick={() => trackButtonClick('email_support', 'resident_login_page')}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResidentLogin;
