// File: src/components/features/TestimonialsSection.jsx
// CREATE THIS NEW FILE

import AnimatedSection from '../ui/AnimatedSection';
// Import the user images you added to your assets folder
import user1 from '../../assets/images/user1.jpg'; 
import user2 from '../../assets/images/user2.jpg';
import user3 from '../../assets/images/user3.jpg';

// Realistic testimonials matching your images (2 boys, 1 girl)
const testimonials = [
  {
    name: 'Aarav Sharma',
    image: user1,
    text: "RizzBite completely changed how I approach my diet during my cutting phase. I just list what's in my fridge and get perfect macro-friendly meals. A total game-changer!",
  },
  {
    name: 'Rohan Mehta',
    image: user2,
    text: "I used to waste so much food. Now, I use the AI at the end of the week to create amazing meals from leftovers. It's saving me money and my diet has never been more diverse.",
  },
  {
    name: 'Priya Patel',
    image: user3,
    text: "As someone focused on body recomposition, getting the right protein balance is critical. This is the only app that creates recipes specifically for my goals. Highly recommend!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
              Loved by Health Enthusiasts
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Don't just take our word for it. Here's what our users are saying.
            </p>
          </div>
        </AnimatedSection>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <AnimatedSection key={testimonial.name}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <p className="text-gray-700 grow italic">"{testimonial.text}"</p>
                <div className="mt-6 flex items-center gap-4 pt-6 border-t">
                  <img src={testimonial.image} alt={testimonial.name} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-yellow-500">★★★★★</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;