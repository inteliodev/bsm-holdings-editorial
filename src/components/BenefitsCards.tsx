interface BenefitCard {
  title: string;
  description: string;
}

interface BenefitsCardsProps {
  benefits: BenefitCard[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
}

const BenefitsCards = ({ benefits, testimonial }: BenefitsCardsProps) => {
  return (
    <section className="bg-surface section-spacing">
      <div className="container-premium">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Owner Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-hhp-charcoal leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {testimonial && (
            <div className="bg-hhp-navy text-white p-8 rounded-lg text-center">
              <blockquote className="text-xl leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-white/90">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm">{testimonial.title}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCards;
