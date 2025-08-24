import AnimatedSection from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-purple-600 text-white">
      <AnimatedSection>
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold">Ready to Transform Your Health?</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Stop guessing and start achieving. Get started with RizzBite for free and discover how easy healthy eating can be.
          </p>
          <Button 
            onClick={() => navigate('/generator')}
            className="mt-8 bg-white text-purple-600 hover:bg-gray-200 font-bold px-8 py-3 text-base flex items-center gap-2 mx-auto"
          >
            Start Generating Meals
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ContactSection;