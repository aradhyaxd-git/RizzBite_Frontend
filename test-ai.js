// File: test-ai.js
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

async function runTest() {
  console.log('--- Starting AI Test ---');
  
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('❌ ERROR: Could not find GEMINI_API_KEY in .env.local file.');
    return;
  }
  
  console.log('✅ API Key loaded.');

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = "Tell me a simple recipe for scrambled eggs in 3 steps. Respond in plain text.";

    console.log('⏳ Sending prompt to Gemini...');
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    console.log('✅ SUCCESS! AI Responded:');
    console.log(text);

  } catch (error) {
    console.error('❌ TEST FAILED. An error occurred:');
    console.error(error);
  }
}

runTest();