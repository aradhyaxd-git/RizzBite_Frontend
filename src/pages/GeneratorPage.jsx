// File: src/pages/GeneratorPage.jsx

import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Wand2, Zap, Flame, Repeat, LoaderCircle, AlertTriangle, Bookmark, Check } from 'lucide-react';
import { generateRecipe } from '../services/geminiService';
import AnimatedSection from '../components/ui/AnimatedSection';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const goals = [
  { name: 'Cutting', icon: <Zap className="h-5 w-5" />, description: 'Lose fat, preserve muscle' },
  { name: 'Bulking', icon: <Flame className="h-5 w-5" />, description: 'Gain muscle and size' },
  { name: 'Recomp', icon: <Repeat className="h-5 w-5" />, description: 'Build muscle, lose fat' },
];

const GeneratorPage = () => {
  const [selectedGoal, setSelectedGoal] = useState('Cutting');
  const [ingredients, setIngredients] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recipeResult, setRecipeResult] = useState(null);
  const [error, setError] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ingredients.trim()) {
      setError('Please enter the ingredients you have.');
      return;
    }
    setIsLoading(true);
    setRecipeResult(null);
    setError(null);
    setIsSaved(false);
    try {
      const result = await generateRecipe({ goal: selectedGoal, ingredients });
      setRecipeResult(result);
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveRecipe = async () => {
    if (!currentUser || !recipeResult) return;

    try {
      await addDoc(collection(db, 'recipes', currentUser.uid, 'userRecipes'), {
        ...recipeResult,
        createdAt: serverTimestamp(),
      });
      setIsSaved(true);
    } catch (error) {
      console.error("Error saving recipe: ", error);
      alert("Could not save recipe. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <Wand2 className="h-12 w-12 mx-auto text-gray-400" />
        <h1 className="mt-4 text-4xl font-extrabold tracking-tighter">Create Your Perfect Meal</h1>
        <p className="mt-4 text-lg text-gray-600">Tell us your goal and the ingredients you have. Our AI will do the rest.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12">
        <div className="space-y-8">
          <div>
            <label className="text-lg font-semibold text-gray-900">1. What is your primary goal?</label>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {goals.map((goal) => (
                <button
                  type="button"
                  key={goal.name}
                  onClick={() => {
                    console.log(`Button clicked: ${goal.name}`);
                    setSelectedGoal(goal.name);
                  }}
                  className={`p-4 border rounded-lg text-left transition-all duration-200 cursor-pointer active:scale-95 ${selectedGoal === goal.name ? 'border-black ring-2 ring-black shadow-lg' : 'border-gray-300 hover:border-gray-400 hover:shadow-md hover:-translate-y-1'}`}
                >
                  <div className="flex items-center gap-3">{goal.icon}<span className="font-bold">{goal.name}</span></div>
                  <p className="text-sm text-gray-600 mt-2">{goal.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="ingredients" className="text-lg font-semibold text-gray-900">2. What ingredients do you have on hand?</label>
            <textarea
              id="ingredients" rows="5" value={ingredients} onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g., chicken breast, rice, broccoli, olive oil, garlic..." required
              className="mt-4 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-shadow"/>
          </div>
          
          <div className="text-center">
            <Button type="submit" disabled={isLoading} className="px-10 py-3 text-base w-full sm:w-auto flex items-center justify-center gap-2">
              {isLoading ? (<LoaderCircle className="animate-spin h-5 w-5" />) : (<Wand2 className="h-5 w-5" />)}
              {isLoading ? 'Generating...' : 'Generate My Meal'}
            </Button>
          </div>

          {error && (
            <div className="mt-4 flex items-center justify-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              <p>{error}</p>
            </div>
          )}
        </div>
      </form>

      {recipeResult && (
        <AnimatedSection>
          <div className="max-w-2xl mx-auto mt-16 p-8 border rounded-2xl bg-white shadow-lg">
            <h2 className="text-3xl font-bold tracking-tighter">{recipeResult.title}</h2>
            <p className="mt-2 text-gray-600">{recipeResult.description}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <span className="bg-green-100 text-green-800 font-medium px-3 py-1 rounded-full">Calories: {recipeResult.calories}</span>
              <span className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full">Protein: {recipeResult.protein}g</span>
              <span className="bg-yellow-100 text-yellow-800 font-medium px-3 py-1 rounded-full">Carbs: {recipeResult.carbs}g</span>
              <span className="bg-red-100 text-red-800 font-medium px-3 py-1 rounded-full">Fat: {recipeResult.fat}g</span>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold">Instructions</h3>
              <ol className="mt-4 list-decimal list-inside space-y-3 text-gray-700">
                {recipeResult.steps.map((step, index) => <li key={index}>{step}</li>)}
              </ol>
            </div>

            {currentUser && (
              <div className="mt-8 pt-6 border-t">
                <Button
                  onClick={handleSaveRecipe}
                  disabled={isSaved}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isSaved ? (
                    <>
                      <Check className="h-5 w-5" />
                      Saved!
                    </>
                  ) : (
                    <>
                      <Bookmark className="h-5 w-5" />
                      Save Recipe to My Collection
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </AnimatedSection>
      )}
    </div>
  );
};

export default GeneratorPage;
