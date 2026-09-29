import {
  SERVICE_AREAS,
  OFFICE_ADDRESS,
  hasStreetAddress,
} from '@/data/serviceArea';

interface ServiceAreaSectionProps {
  /** Alternate background so the section can sit next to other white bands. */
  background?: 'white' | 'gray';
  heading?: string;
  intro?: string;
}

/**
 * Compact two-column city list — replaces the long homepage accordion.
 * No interactive map product; a clean list + coverage sentence only.
 */
const ServiceAreaSection = ({
  background = 'gray',
  heading = 'Areas we serve',
  intro = 'We manage residential properties in Oklahoma City, Edmond, Norman, Moore, Yukon, and surrounding communities.',
}: ServiceAreaSectionProps) => {
  const midpoint = Math.ceil(SERVICE_AREAS.length / 2);
  const left = SERVICE_AREAS.slice(0, midpoint);
  const right = SERVICE_AREAS.slice(midpoint);

  return (
    <section className={`${background === 'gray' ? 'bg-surface-sunken' : 'bg-white'} section-spacing-tight`}>
      <div className="container-premium">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="section-title text-hhp-navy">{heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-hhp-charcoal">{intro}</p>
            <p className="mt-3 text-sm leading-relaxed text-hhp-charcoal/70">
              Coverage across the Oklahoma City metro — {SERVICE_AREAS.length} communities.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-x-10 gap-y-1 sm:grid-cols-2">
              {[left, right].map((col, colIdx) => (
                <ul key={colIdx} className="divide-y divide-border">
                  {col.map((area) => (
                    <li
                      key={area.name}
                      className="flex min-h-[44px] items-center py-2.5 font-display text-base font-medium text-hhp-navy"
                    >
                      <span
                        aria-hidden="true"
                        className="mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      />
                      {area.name}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {hasStreetAddress() && (
          <p className="mt-10 text-sm text-hhp-charcoal/70">
            Headquartered at {OFFICE_ADDRESS.street}, {OFFICE_ADDRESS.city}, {OFFICE_ADDRESS.state}{' '}
            {OFFICE_ADDRESS.postalCode}
          </p>
        )}
      </div>
    </section>
  );
};

export default ServiceAreaSection;
