import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

/**
 * Careers — residential PM tone. Do not invent fake open roles.
 * When Ty posts a real opening, add it here as a data entry.
 */
const OPENINGS: { title: string; summary: string }[] = [];

const Opportunities = () => {
  return (
    <Layout>
      <section className="bg-background py-10 sm:py-12 lg:py-14">
        <div className="container-premium">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <span className="eyebrow">Careers</span>
              <h1 className="section-title mt-3 text-hhp-navy">Careers</h1>
              <p className="mt-4 text-lg leading-relaxed text-hhp-charcoal">
                BSM Holdings manages rental homes in the Oklahoma City metro. The work is
                practical: leasing, resident communication, maintenance coordination, and
                owner reporting. If you like taking care of properties and the people who
                live in them, we want to hear from you.
              </p>
            </div>
            <div className="lg:col-span-6">
              <img
                src="/images/properties/office-mail-porch.webp"
                alt="On-site residential property office"
                className="aspect-[4/3] w-full border border-border object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white py-10 sm:py-12 lg:py-14">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-xl font-semibold text-hhp-navy sm:text-2xl">
              Current openings
            </h2>

            {OPENINGS.length === 0 ? (
              <div className="mt-6 border border-dashed border-border bg-surface px-6 py-8">
                <p className="font-display text-base font-medium text-hhp-navy">
                  No openings listed right now
                </p>
                <p className="mt-3 text-base leading-relaxed text-hhp-charcoal">
                  We are not advertising specific roles at the moment. Send a short note
                  and résumé — we keep introductions on file when a fit opens up.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:ty@bsmholdings.com?subject=Careers%20inquiry%20—%20résumé"
                    className="btn-hero"
                    onClick={() => {
                      trackButtonClick('careers_resume', 'opportunities');
                      trackLinkClick('Send résumé', 'mailto:ty@bsmholdings.com');
                    }}
                  >
                    Send a résumé
                  </a>
                  <Link
                    to="/contact"
                    className="tap text-sm font-medium text-hhp-navy underline-offset-4 hover:underline"
                    onClick={() => {
                      trackButtonClick('careers_contact', 'opportunities');
                      trackLinkClick('Contact', '/contact');
                    }}
                  >
                    Or use the contact form
                  </Link>
                </div>
              </div>
            ) : (
              <ul className="mt-6 divide-y divide-border border-t border-border">
                {OPENINGS.map((role) => (
                  <li key={role.title} className="py-5">
                    <h3 className="font-display text-lg font-semibold text-hhp-navy">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-base text-hhp-charcoal">{role.summary}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Opportunities;
