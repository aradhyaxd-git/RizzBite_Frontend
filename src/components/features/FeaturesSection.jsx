// File: src/components/features/FeaturesSection.jsx

import { Wand2, ClipboardList, BarChart } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const features = [
    {
        icon: <Wand2 className="h-8 w-8 text-purple-600" />, // Changed from blue
        title: 'AI Recipe Generation',
        description: 'Tell us the ingredients you have. Our AI creates a high-protein, balanced recipe tailored to your health goals in seconds.',
    },
    {
        icon: <ClipboardList className="h-8 w-8 text-purple-600" />, // Changed from blue
        title: 'Goal-Oriented Meal Planning',
        description: 'Whether you want to manage diabetes, lose fat, or build muscle, our plans are designed to help you hit your macros effortlessly.',
    },
    {
        icon: <BarChart className="h-8 w-8 text-purple-600" />, // Changed from blue
        title: 'Complete Nutritional Analysis',
        description: 'Go beyond just calories. Every recipe comes with a detailed breakdown of protein, carbs, fats, and key micronutrients.',
    },
]

const FeaturesSection = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
                            Your AI-Powered Nutrition Architect
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            We provide the tools to transform your health, starting with your plate.
                        </p>
                    </div>
                </AnimatedSection>
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <AnimatedSection key={feature.title}>
                            <div className="text-center p-8">
                                <div className="inline-block bg-purple-100 p-4 rounded-full"> {/* Changed from blue */}
                                    {feature.icon}
                                </div>
                                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
