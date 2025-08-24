import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import heroImage from '../assets/images/pannerTikka.jpg';
import { Wand2, ChevronRight } from 'lucide-react';
import StrugglesSection from '../components/features/StrugglesSection';
import FeaturesSection from '../components/features/FeaturesSection';
import TestimonialsSection from '../components/features/TestimonialsSection';
import AnimatedSection from '../components/ui/AnimatedSection';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-32">
        {/* Adjusted grid layout to give text more space */}
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight">
              Fix the Protein Gap in Your Indian Diet.
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
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
          <div className="lg:col-span-2">
            <img
              src={heroImage}
              alt="Healthy and delicious Paneer Tikka"
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <AnimatedSection>
        <StrugglesSection />
      </AnimatedSection>

      <AnimatedSection>
        <FeaturesSection />
      </AnimatedSection>
      
      <TestimonialsSection />
    </main>
  );
};

export default Homepage;
