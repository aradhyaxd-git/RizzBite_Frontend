// File: src/components/features/StrugglesSection.jsx

import { Scale, HeartPulse, Zap } from 'lucide-react';

const struggles = [
  {
    icon: <Scale className="h-8 w-8 text-red-500" />,
    title: 'The Protein Gap',
    description: 'The average Indian diet is rich in carbs but dangerously low in protein, leading to muscle loss and difficulty managing weight.',
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-red-500" />,
    title: 'The Diabetes Epidemic',
    description: 'As the "diabetes capital of the world," managing blood sugar is critical. This starts on your plate with balanced meals.',
  },
  {
    icon: <Zap className="h-8 w-8 text-red-500" />,
    title: 'Fatigue & Low Energy',
    description: 'Stubborn belly fat and poor nutrition lead to constant tiredness. The right fuel is your first line of defense against this.',
  },
];

const StrugglesSection = () => {
  return (
    // We added a light gray background (bg-gray-50) and lots of vertical padding (py-24)
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        {/* This div centers the title and paragraph */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-900">
            Common Struggles in the Modern Indian Diet
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            You're not alone. Millions face these challenges every day.
          </p>
        </div>
        {/* Increased margin-top (mt-16) for more space */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {struggles.map((struggle) => (
            <div key={struggle.title} className="bg-white p-8 rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              {struggle.icon}
              <h3 className="mt-4 text-xl font-bold text-gray-900">{struggle.title}</h3>
              <p className="mt-2 text-gray-600">{struggle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrugglesSection;