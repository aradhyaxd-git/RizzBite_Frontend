// File: src/pages/MyRecipesPage.jsx

import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { LoaderCircle, UtensilsCrossed, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';

const MyRecipesPage = () => {
  const { currentUser } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (currentUser) {
        try {
          const recipesRef = collection(db, 'recipes', currentUser.uid, 'userRecipes');
          const q = query(recipesRef, orderBy('createdAt', 'desc'));
          const querySnapshot = await getDocs(q);
          const userRecipes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setRecipes(userRecipes);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoaderCircle className="animate-spin h-12 w-12 text-gray-500" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <AnimatedSection>
          <h1 className="text-4xl font-extrabold tracking-tighter text-center">My Saved Recipes</h1>
          <p className="mt-2 text-lg text-gray-600 text-center">Your personal collection of AI-generated meals.</p>
        </AnimatedSection>

        {recipes.length === 0 ? (
          <AnimatedSection>
            <div className="mt-16 text-center bg-white p-12 rounded-2xl border">
              <UtensilsCrossed className="mx-auto h-16 w-16 text-gray-400" />
              <p className="mt-4 text-gray-600">You haven't saved any recipes yet.</p>
            </div>
          </AnimatedSection>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <AnimatedSection key={recipe.id}>
                <div className="bg-white p-6 rounded-2xl shadow-lg border h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <h2 className="text-xl font-bold">{recipe.title}</h2>
                  <p className="mt-2 text-gray-600 text-sm grow">{recipe.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="bg-green-100 text-green-800 font-medium px-2 py-1 rounded-full">Cals: {recipe.calories}</span>
                    <span className="bg-blue-100 text-blue-800 font-medium px-2 py-1 rounded-full">Protein: {recipe.protein}g</span>
                  </div>
                  <Button variant="outline" className="mt-6 w-full flex items-center justify-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    View Recipe
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRecipesPage;
