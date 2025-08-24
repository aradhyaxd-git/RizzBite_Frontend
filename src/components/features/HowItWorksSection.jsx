import AnimatedSection from '../ui/AnimatedSection';
import { ListChecks, Wand2, Utensils } from 'lucide-react';

const steps = [
  {
    icon: <ListChecks className="h-10 w-10 text-blue-600" />,
    title: "1. Tell Us What You Have",
    description: "Select your fitness goal and list the ingredients you have in your fridge and pantry. No more wasted food!",
  },
  {
    icon: <Wand2 className="h-10 w-10 text-blue-600" />,
    title: "2. Get Your AI Recipe",
    description: "Our AI instantly analyzes your input and generates a unique, high-protein recipe with a full nutritional breakdown.",
  },
  {
    icon: <Utensils className="h-10 w-10 text-blue-600" />,
    title: "3. Cook & Achieve",
    description: "Follow the simple, step-by-step instructions to cook a delicious meal that perfectly aligns with your health goals.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
              Healthy Eating in 3 Simple Steps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Transform your ingredients into goal-oriented meals effortlessly.
            </p>
          </div>
        </AnimatedSection>
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step) => (
            <AnimatedSection key={step.title}>
              <div className="p-8">
                <div className="inline-block bg-blue-100 p-5 rounded-full">
                  {step.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;