import { LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface IconGridProps {
  title: string;
  services: ServiceItem[];
  columns?: 3 | 6;
}

const IconGrid = ({ title, services, columns = 3 }: IconGridProps) => {
  const gridCols = columns === 6 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="bg-white section-spacing">
      <div className="container-premium">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-hhp-navy mb-12 text-center">{title}</h2>
          <div className={`grid ${gridCols} gap-8`}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-surface rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-hhp-accent/10 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-hhp-navy" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-hhp-charcoal leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconGrid;
