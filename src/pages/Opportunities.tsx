import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

/**
 * Careers — residential PM tone. Do not invent fake open roles.
 * When Ty posts a real opening, add it here as a data entry.
 */
const Opportunities = () => {
  return (
    <Layout>
      <section
        className="relative flex min-h-[420px] items-center justify-center bg-cover bg-center bg-no-repeat sm:min-h-[500px]"
        style={{ backgroundImage: 'url(/images/consulting-image.webp)' }}
      >
        <div className="absolute inset-0 scrim-hero" />
        <div className="container-premium relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5 text-white/85">Careers</span>
            <h1 className="hero-title mb-5 text-white">Careers</h1>
            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
              Residential property management in the Oklahoma City metro
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Why work with us</span>
            <h2 className="section-title mt-5 text-hhp-navy">Hands-on residential PM</h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-hhp-charcoal">
              <p>
                BSM Holdings manages rental homes in the Oklahoma City metro. The work is
                practical: leasing, resident communication, maintenance coordination, and
                owner reporting.
              </p>
              <p>
                If you like taking care of properties and the people who live in them,
                work directly with our property management team. We want to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">Open Roles</span>
            <h2 className="section-title mt-5 text-hhp-navy">No openings listed right now</h2>
            <p className="mt-6 text-lg leading-relaxed text-hhp-charcoal">
              We are not advertising specific roles at the moment. If you are interested in
              residential property management work in the Oklahoma City metro, send a short
              note and resume — we keep introductions on file when a fit opens up.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-hero"
                onClick={() => {
                  trackButtonClick('careers_contact', 'opportunities');
                  trackLinkClick('Introduce yourself', '/contact');
                }}
              >
                Introduce yourself
              </Link>
              <a
                href="mailto:ty@bsmholdings.com?subject=Careers%20inquiry"
                className="tap text-sm font-medium text-hhp-navy underline-offset-4 hover:underline"
                onClick={() => trackLinkClick('Email careers', 'mailto:ty@bsmholdings.com')}
              >
                ty@bsmholdings.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand text-white">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-5 justify-center text-hhp-gold">Stay in touch</span>
            <h2 className="section-title text-white">Want to join the team?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Tell us about your background in leasing, maintenance, accounting, or
              resident services. We'll contact you when a position matches your experience.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy transition-colors hover:bg-hhp-gold hover:text-hhp-navy-deep"
                onClick={() => {
                  trackButtonClick('submit_interest', 'opportunities_cta');
                  trackLinkClick('Contact', '/contact');
                }}
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Opportunities;
