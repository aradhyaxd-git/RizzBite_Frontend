// File: src/pages/PricingPage.jsx

import { Button } from '../components/ui/Button';
import { Check, Star } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const freeFeatures = [
  '3 AI Recipe Generations per day',
  'Access to 10 community recipes',
  'Basic nutritional information',
  'Save up to 5 recipes',
];

const proFeatures = [
  'Unlimited AI Recipe Generations',
  'Full Macro & Micronutrient Breakdown',
  'Weekly AI Meal Planner',
  'Automated Shopping List Generator',
  'Save Unlimited Custom Recipes',
  'Priority Support',
];

const PricingPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-24 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Find the Perfect Plan
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Start for free and scale up as you master your nutrition. Choose the plan that fits your health journey.
          </p>
        </AnimatedSection>
        
        <div className="mt-16 grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan Card */}
          <AnimatedSection>
            <div className="bg-white p-8 border rounded-2xl h-full flex flex-col">
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="mt-2 text-gray-600">Perfect for getting started.</p>
              <p className="mt-6 text-4xl font-bold">$0<span className="text-lg font-medium text-gray-500">/month</span></p>
              <ul className="mt-8 space-y-4 text-left grow">
                {freeFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-8 w-full py-3">Get Started</Button>
            </div>
          </AnimatedSection>

          {/* Pro Plan Card */}
          <AnimatedSection>
            <div className="bg-white p-8 border-2 border-black rounded-2xl h-full flex flex-col relative shadow-2xl">
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <span className="bg-black text-white px-4 py-1 text-sm font-semibold rounded-full uppercase flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="mt-2 text-gray-600">Everything you need to master your health.</p>
              <p className="mt-6 text-4xl font-bold">$29<span className="text-lg font-medium text-gray-500">/month</span></p>
              <ul className="mt-8 space-y-4 text-left grow">
                {proFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full py-3">Upgrade to Pro</Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;