import { SERVICE_AREA, OFFICE_ADDRESS, hasStreetAddress } from '@/data/serviceArea';

interface ServiceAreaSectionProps {
  /** Alternate background so the section can sit next to other white bands. */
  background?: 'white' | 'gray';
  heading?: string;
  intro?: string;
}

/**
 * Where BSM Holdings works, grouped by metro.
 *
 * Deliberately not a bare comma-separated city list — a long run of city names reads
 * as keyword stuffing to both people and search engines. The full flat list lives in
 * the LocalBusiness `areaServed` structured data instead, which is where search
 * engines actually want it.
 *
 * The cities were previously joined with " · " into a single run-on line, which is
 * the same keyword-stuffing shape in a different costume and read as grey noise.
 * They are individual chips now, so the eye can pick out a specific market.
 */
const ServiceAreaSection = ({
  background = 'gray',
  heading = 'Where We Work',
  intro = 'BSM Holdings is an Oklahoma operator. Self-performing the work requires proximity to it, so we concentrate on the markets we can serve directly.',
}: ServiceAreaSectionProps) => {
  return (
    <section className={`${background === 'gray' ? 'bg-surface' : 'bg-white'} section-spacing`}>
      <div className="container-premium">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="eyebrow mb-5 justify-center">Coverage</span>
          <h2 className="section-title text-hhp-navy">{heading}</h2>
          <p className="mt-6 text-lg leading-relaxed text-hhp-charcoal">{intro}</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {SERVICE_AREA.map((metro, index) => (
            <article
              key={metro.name}
              className="platform-card-hover flex flex-col border border-border bg-white p-7 sm:p-9"
            >
              <div className="flex items-baseline gap-4 border-b border-border pb-5">
                <span
                  aria-hidden="true"
                  className="font-display text-2xl font-semibold leading-none text-hhp-gold/35"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl font-semibold text-hhp-navy sm:text-2xl">
                  {metro.name}
                </h3>
              </div>

              <p className="mt-5 leading-relaxed text-hhp-charcoal">{metro.blurb}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {metro.cities.map((city) => (
                  <li
                    key={city}
                    className="border border-border bg-surface px-2.5 py-1 text-xs font-medium text-hhp-charcoal/75 transition-colors hover:border-hhp-gold hover:text-hhp-navy"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {hasStreetAddress() && (
          <p className="mt-12 text-center text-sm text-hhp-charcoal/70">
            Headquartered at {OFFICE_ADDRESS.street}, {OFFICE_ADDRESS.city}, {OFFICE_ADDRESS.state}{' '}
            {OFFICE_ADDRESS.postalCode}
          </p>
        )}
      </div>
    </section>
  );
};

export default ServiceAreaSection;
