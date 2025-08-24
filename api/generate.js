// File: /api/generate.js
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(request) {
  console.log('✅ API route hit with new handler');

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405, headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await request.json();
    const { goal, ingredients } = body;
    console.log('➡️ Received data:', { goal, ingredients });

    if (!ingredients) {
      throw new Error('Ingredients are required.');
    }
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('Missing API Key on the server.');
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `
      **ROLE:** Expert Indian Diet Nutritionist.
      **TASK:** Create a single, healthy recipe based on the user's goal and ingredients.
      **USER GOAL:** ${goal}
      **INGREDIENTS:** ${ingredients}
      **OUTPUT FORMAT:** Respond with ONLY a valid JSON object. Do not include markdown, backticks, or any text before or after the JSON object.
      **JSON STRUCTURE:** { "title": "String", "description": "String (one sentence)", "calories": Number, "protein": Number, "carbs": Number, "fat": Number, "steps": ["String", "String", ...] }
    `;

    console.log('⏳ Calling the Gemini AI...');
    const result = await model.generateContent(prompt);
    const response = result.response;
    const responseText = response.text();
    console.log('✅ AI responded!');

    const jsonResponse = JSON.parse(responseText.trim());

    return new Response(JSON.stringify(jsonResponse), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ AN ERROR OCCURRED:', error);
    return new Response(JSON.stringify({ error: error.message || 'An internal server error occurred.' }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }
}