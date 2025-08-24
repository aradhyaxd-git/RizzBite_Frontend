// File: src/components/features/FeaturesSection.jsx
import { Wand2, ClipboardList, BarChart } from 'lucide-react';

const features = [
    {
        icon: <Wand2 className="h-8 w-8 text-blue-600" />,
        title: 'AI Recipe Generation',
        description: 'Tell us the ingredients you have. Our AI creates a high-protein, balanced recipe tailored to your health goals in seconds.',
    },
    {
        icon: <ClipboardList className="h-8 w-8 text-blue-600" />,
        title: 'Goal-Oriented Meal Planning',
        description: 'Whether you want to manage diabetes, lose fat, or build muscle, our plans are designed to help you hit your macros effortlessly.',
    },
    {
        icon: <BarChart className="h-8 w-8 text-blue-600" />,
        title: 'Complete Nutritional Analysis',
        description: 'Go beyond just calories. Every recipe comes with a detailed breakdown of protein, carbs, fats, and key micronutrients.',
    },
]

const FeaturesSection = () => {
    return (
        // We are keeping the background white for contrast, but adding lots of padding (py-24)
        <section className="py-24">
            <div className="container mx-auto px-6">
                {/* This div centers the title and paragraph */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-900">
                        Your AI-Powered Nutrition Architect
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We provide the tools to transform your health, starting with your plate.
                    </p>
                </div>
                {/* Increased margin-top (mt-16) for more space */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        // We've wrapped each feature to center the content and style the icon
                        <div key={feature.title} className="text-center">
                            {/* This div creates the colored circle around the icon */}
                            <div className="inline-block bg-blue-100 p-4 rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-gray-900">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;