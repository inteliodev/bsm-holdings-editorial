interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const ProcessSteps = ({ steps, title, subtitle, className = "" }: ProcessStepsProps) => {
  return (
    <section className={`bg-white section-spacing ${className}`}>
      <div className="container-premium">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="section-title text-hhp-navy mb-6">{title}</h2>}
            {subtitle && (
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                {step.title}
              </h3>
              <p className="text-hhp-charcoal leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
