import AnimatedSection from '../ui/AnimatedSection';
import AccordionItem from '../ui/AccordionItem';

const faqs = [
  {
    q: "How does the Gemini AI work?",
    a: "You provide your fitness goal and available ingredients. We send this to Google's advanced Gemini model, which analyzes the request and generates a unique, suitable recipe with nutritional data in real-time."
  },
  {
    q: "How accurate is the nutritional information?",
    a: "Our data is sourced from standard nutritional databases. While we strive for high accuracy, the values should be considered close estimates as ingredient sizes and types can vary."
  },
  {
    q: "Can I use RizzBite for specific diets like vegan or keto?",
    a: "Absolutely! In the Pro version, you can specify dietary preferences along with your ingredients for even more personalized results."
  },
  {
    q: "What's the main difference between the Free and Pro plans?",
    a: "The Free plan lets you try our core AI feature with daily limits. The Pro plan unlocks unlimited generations, detailed micronutrient data, the weekly meal planner, and the shopping list feature, making it a complete nutritional solution."
  }
];

const FaqSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-12 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.q}>
                {faq.a}
              </AccordionItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FaqSection;