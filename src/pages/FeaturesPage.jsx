import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';
import { Check, Wand2, ClipboardList, BarChart, ArrowRight } from 'lucide-react';
import feature1Image from '../assets/eggBhurji.jpg';
import feature2Image from '../assets/eggMasala.jpg';
import feature3Image from '../assets/shakshuka-02.jpg';

const FeatureItem = ({ icon, text }) => (
  <li className="flex items-center gap-3">
    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
    <span className="text-gray-700">{text}</span>
  </li>
);

const FeaturesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-24">
        
        {/* Page Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              A Smarter Way to Eat Healthy
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              RizzBite isn't just another recipe app. We use intelligent tools to solve the real-world problems of eating healthy in a busy life.
            </p>
          </div>
        </AnimatedSection>

        {/* Features List */}
        <div className="mt-20 space-y-24">
          
          {/* Feature 1: AI Generation */}
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  <Wand2 className="h-5 w-5" />
                  AI Recipe Generation
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight">Turn Your Groceries into Goals</h2>
                <p className="mt-4 text-gray-600">Stop staring at your fridge wondering what to make. Our AI engine instantly creates delicious, macro-friendly meals from the ingredients you already have.</p>
                <ul className="mt-6 space-y-3">
                  <FeatureItem text="Drastically reduce food waste" />
                  <FeatureItem text="Discover new, exciting meal ideas" />
                  <FeatureItem text="Save money by using what you own" />
                </ul>
              </div>
              <div className="lg:order-first">
                <img src={feature1Image} alt="AI Generated Meal" className="rounded-2xl shadow-xl" />
              </div>
            </div>
          </AnimatedSection>

          {/* Feature 2: Meal Planning */}
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  <ClipboardList className="h-5 w-5" />
                  Goal-Oriented Meal Planning
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight">Plan Your Week in Minutes, Not Hours</h2>
                <p className="mt-4 text-gray-600">Eliminate daily decision fatigue. Tell RizzBite your fitness goals, and get a balanced, high-protein weekly plan that's easy to follow and never boring.</p>
                <ul className="mt-6 space-y-3">
                  <FeatureItem text="Customized for Cutting, Bulking, or Recomp" />
                  <FeatureItem text="Automated shopping list generation" />
                  <FeatureItem text="Flexible and easy to adjust" />
                </ul>
              </div>
              <div>
                <img src={feature2Image} alt="Weekly Meal Plan" className="rounded-2xl shadow-xl" />
              </div>
            </div>
          </AnimatedSection>
          
          {/* Feature 3: Nutritional Analysis */}
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  <BarChart className="h-5 w-5" />
                  Complete Nutritional Analysis
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight">Know Exactly What You're Eating</h2>
                <p className="mt-4 text-gray-600">Knowledge is power. Every recipe comes with a detailed, easy-to-read breakdown of its nutritional content, so you can be confident you're fueling your body correctly.</p>
                <ul className="mt-6 space-y-3">
                  <FeatureItem text="Full Macro breakdown (Protein, Carbs, Fat)" />
                  <FeatureItem text="Calorie counts for precise tracking" />
                  <FeatureItem text="Key micronutrient information" />
                </ul>
              </div>
              <div className="lg:order-first">
                <img src={feature3Image} alt="Nutritional Chart" className="rounded-2xl shadow-xl" />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Final CTA Section */}
        <AnimatedSection>
          <div className="mt-24 text-center bg-gray-100 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Transform Your Health?</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Stop guessing and start achieving. Get started with RizzBite for free and discover how easy healthy eating can be.
            </p>
            <Button className="mt-8 px-8 py-3 text-base" onClick={() => navigate('/generator')}>
              Start Generating Meals
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default FeaturesPage;