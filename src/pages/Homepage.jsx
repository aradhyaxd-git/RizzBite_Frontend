import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import heroImage from '../assets/paneer.tikka.jpg';
import { Wand2, ChevronRight } from 'lucide-react';
import StrugglesSection from '../components/features/StrugglesSection';
import FeaturesSection from '../components/features/FeaturesSection';
import AnimatedSection from '../components/ui/AnimatedSection';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight">
              Fix the Protein Gap in Your Indian Diet.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              India is the diabetes capital of the world, and our daily meals often lack essential protein. RizzBite helps you create delicious, high-protein meals to build a stronger, healthier you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="px-8 py-3 text-base flex items-center gap-2"
                onClick={() => navigate('/generator')}
              >
                <Wand2 className="h-5 w-5" />
                Generate My Meal
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 text-base flex items-center gap-2"
                onClick={() => navigate('/mission')}
              >
                Learn Our Mission
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
            <img
              src={heroImage}
              alt="Healthy and delicious Paneer Tikka"
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Struggles Section with Animation */}
      <AnimatedSection>
        <StrugglesSection />
      </AnimatedSection>

      {/* Features Section with Animation */}
      <AnimatedSection>
        <FeaturesSection />
      </AnimatedSection>
    </main>
  );
};

export default Homepage;