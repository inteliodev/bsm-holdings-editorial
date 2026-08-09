import { MapPin } from 'lucide-react';
import { SERVICE_AREA, OFFICE_ADDRESS, hasStreetAddress } from '@/data/serviceArea';

interface ServiceAreaSectionProps {
  /** Alternate background so the section can sit next to other white bands. */
  background?: 'white' | 'gray';
  heading?: string;
  intro?: string;
}

/**
 * Where HHP works, grouped by metro.
 *
 * Deliberately not a bare comma-separated city list — a long run of city names reads
 * as keyword stuffing to both people and search engines. The full flat list lives in
 * the LocalBusiness `areaServed` structured data instead, which is where search
 * engines actually want it.
 */
const ServiceAreaSection = ({
  background = 'gray',
  heading = 'Where We Work',
  intro = 'HHP is an Oklahoma operator. Self-performing the work requires proximity to it, so we concentrate on the markets we can serve directly.',
}: ServiceAreaSectionProps) => {
  return (
    <section className={`${background === 'gray' ? 'bg-gray-50' : 'bg-white'} section-spacing`}>
      <div className="container-premium">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title text-hhp-navy mb-6">{heading}</h2>
          <p className="text-lg sm:text-xl leading-relaxed text-hhp-charcoal">{intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICE_AREA.map((metro) => (
            <div key={metro.name} className="premium-card">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-hhp-navy flex-shrink-0" aria-hidden="true" />
                <h3 className="text-xl font-display font-semibold text-hhp-navy">{metro.name}</h3>
              </div>
              <p className="text-hhp-charcoal leading-relaxed mb-4">{metro.blurb}</p>
              <p className="text-sm text-hhp-charcoal/80 leading-relaxed">
                {metro.cities.join(' · ')}
              </p>
            </div>
          ))}
        </div>

        {hasStreetAddress() && (
          <p className="text-center text-hhp-charcoal mt-10">
            {OFFICE_ADDRESS.street}, {OFFICE_ADDRESS.city}, {OFFICE_ADDRESS.state}{' '}
            {OFFICE_ADDRESS.postalCode}
          </p>
        )}
      </div>
    </section>
  );
};

export default ServiceAreaSection;
