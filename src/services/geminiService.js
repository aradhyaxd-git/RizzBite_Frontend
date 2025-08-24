// File: src/services/geminiService.js

export const generateRecipe = async ({ goal, ingredients }) => {
    // Call our local backend server
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ goal, ingredients }),
    });
  
    if (!response.ok) {
      // Handle errors from the backend
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to generate recipe');
    }
  
    const recipe = await response.json();
    return recipe;
  };