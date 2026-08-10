interface ProofPoint {
  metric: string;
  label: string;
}

interface ProofPointsProps {
  points: ProofPoint[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const ProofPoints = ({ points, title, subtitle, className = "" }: ProofPointsProps) => {
  return (
    <section className={`bg-surface section-spacing ${className}`}>
      <div className="container-premium">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="section-title text-hhp-navy mb-6">{title}</h2>}
            {subtitle && (
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-display font-bold text-hhp-navy mb-2">
                {point.metric}
              </div>
              <div className="text-hhp-charcoal font-medium">
                {point.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;
