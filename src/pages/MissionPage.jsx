// File: src/pages/MissionPage.jsx

import AnimatedSection from '../components/ui/AnimatedSection';
// Let's use a nice, healthy-looking image from your assets
import missionImage from '../assets/vegetable-soup-recipe.jpg';

const MissionPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-24">
        
        {/* Page Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              Our Mission
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              To empower Indians to reclaim their health by fixing the nutritional gaps in our modern diet, one delicious meal at a time.
            </p>
          </div>
        </AnimatedSection>
        
        {/* Main Content Section */}
        <AnimatedSection>
          <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
            {/* Image on the left */}
            <div>
              <img
                src={missionImage}
                alt="Healthy vegetable soup"
                className="rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>

            {/* Text content on the right */}
            <div className="space-y-6 text-gray-700">
              <h2 className="text-3xl font-bold tracking-tight">Why We Started RizzBite</h2>
              <p>
                India is facing a silent health crisis. We are the "diabetes capital of the world," and lifestyle diseases related to poor nutrition are on the rise. The traditional Indian diet, while delicious, is often dangerously low in protein and high in refined carbohydrates.
              </p>
              <p>
                This leads to widespread issues like muscle loss, fatigue, stubborn belly fat, and difficulty managing blood sugar. We saw our friends and family struggling with these problems, trying complex diets and failing because they were unsustainable.
              </p>
              <p className="font-semibold text-gray-900">
                We believe that getting healthy shouldn't be complicated. RizzBite was created to provide a simple, powerful solution: using AI to create high-protein, balanced, and tasty meals from the ingredients you already have.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
      </div>
    </div>
  );
};

export default MissionPage;