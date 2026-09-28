import {
  SERVICE_AREAS,
  OFFICE_ADDRESS,
  hasStreetAddress,
} from '@/data/serviceArea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface ServiceAreaSectionProps {
  /** Alternate background so the section can sit next to other white bands. */
  background?: 'white' | 'gray';
  heading?: string;
  intro?: string;
}

/**
 * Areas BSM Holdings serves across the Oklahoma City metro.
 * Default-closed accordion — intentional, not a single bland metro card.
 */
const ServiceAreaSection = ({
  background = 'gray',
  heading = 'Areas we serve',
  intro = 'BSM Holdings concentrates on the Oklahoma City metro — markets we can serve directly with in-house operations and facility trades.',
}: ServiceAreaSectionProps) => {
  return (
    <section className={`${background === 'gray' ? 'bg-surface' : 'bg-white'} section-spacing`}>
      <div className="container-premium">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="eyebrow mb-5 justify-center">Oklahoma</span>
          <h2 className="section-title text-hhp-navy">{heading}</h2>
          <p className="mt-6 text-lg leading-relaxed text-hhp-charcoal">{intro}</p>
        </div>

        <div className="mx-auto max-w-3xl border border-border bg-white">
          <div className="flex items-center gap-3 border-b border-border bg-brand/[0.04] px-5 py-4 sm:px-7">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-brand"
            />
            <p className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-hhp-navy">
              Oklahoma City Metro
            </p>
            <span className="ml-auto text-xs font-medium text-hhp-charcoal/60">
              {SERVICE_AREAS.length} areas
            </span>
          </div>

          <Accordion type="multiple" className="w-full">
            {SERVICE_AREAS.map((area) => (
              <AccordionItem
                key={area.name}
                value={area.name}
                className="border-b border-border last:border-b-0 px-5 sm:px-7"
              >
                <AccordionTrigger className="py-4 text-left font-display text-base font-semibold text-hhp-navy hover:no-underline hover:text-brand data-[state=open]:text-brand sm:text-lg [&[data-state=open]>svg]:text-brand">
                  {area.name}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0">
                  <p className="text-base leading-relaxed text-hhp-charcoal">
                    {area.note ??
                      `Residential property management in ${area.name}, Oklahoma.`}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
