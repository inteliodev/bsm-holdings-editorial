import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import AccessRequestForm from '@/components/AccessRequestForm';
import { CONTACT_EMAIL } from '@/data/serviceArea';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

/** Resident portal sign-in. Do not display the vendor name in the UI. */
export const RESIDENT_PORTAL_URL =
  'https://bsmholdings.appfolio.com/connect/users/sign_in';

const ResidentLogin = () => {
  return (
    <Layout>
      <Helmet>
        <title>Resident Access - BSM Holdings</title>
        <meta
          name="description"
          content="Access the BSM Holdings resident portal to pay rent, submit maintenance requests, and reach your property team."
        />
      </Helmet>

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
              Pay rent online, submit maintenance requests, and access your documents.
            </p>
            <a
              href={RESIDENT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-none bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy shadow-elegant transition-all duration-300 hover:bg-hhp-gold hover:text-hhp-navy-deep"
              onClick={() => {
                trackButtonClick('resident_portal_signin', 'resident_login_page');
                trackLinkClick('Resident Portal', RESIDENT_PORTAL_URL);
              }}
            >
              Sign in to resident portal
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface">
        <div className="container-premium">
          <div className="mx-auto max-w-md">
            <div className="mb-8">
              <h2 className="font-display text-display-md text-hhp-navy">Need access?</h2>
              <p className="mt-3 leading-relaxed text-hhp-charcoal/80">
                If you do not have a portal login yet, tell us your name and community and we will get you set up.
              </p>
            </div>

            <AccessRequestForm
              inquiryType="Resident Portal Access"
              contextLabel="Property or community"
              contextPlaceholder="Your community or address"
              analyticsId="resident_portal"
            />

            <div className="mt-8 space-y-4 text-center">
              <Link
                to="/"
                className="tap inline-flex items-center text-sm text-hhp-charcoal transition-colors hover:text-hhp-navy"
                onClick={() => trackLinkClick('Back to Home', '/')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
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
