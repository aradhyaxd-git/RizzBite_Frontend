# Rizzbite - Your AI-Powered Nutrition Architect 🥗

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Rizzbite is a full-stack web application designed to fix the protein gap in modern diets. It leverages the power of Google's Gemini AI to generate unique, healthy, and high-protein recipes based on the ingredients you already have at home.

**Live Application:** **[https://rizz-bite.vercel.app/](https://rizz-bite.vercel.app/)**

---

![Rizzbite Screenshot](http://googleusercontent.com/file_content/1)

## 🎯 The Problem

Many daily meals lack sufficient protein, a critical macronutrient for health, especially in India which faces a growing diabetes crisis. Additionally, food waste is a major concern. Deciding what to cook with leftover ingredients can be frustrating and often leads to unhealthy choices.

Rizzbite tackles these problems by providing an intelligent, on-demand solution to create delicious, macro-friendly meals, making healthy eating simple and sustainable.

## ✨ Key Features

-   **🤖 AI Recipe Generation:** Get unique, high-protein recipes in seconds from your available ingredients.
-   **🎯 Goal-Oriented Planning:** Recipes are tailored to help you achieve your specific health goals (e.g., weight loss, muscle gain).
-   **📊 Complete Nutritional Analysis:** Every recipe comes with a detailed breakdown of calories, protein, carbs, and fats.
-   **🔐 Secure User Authentication:** Firebase-powered sign-up and login to manage your profile and data.
-   **📚 Save Your Favorites:** Users can save their favorite generated recipes to their personal account for future access.
-   **📱 Fully Responsive Design:** A seamless experience on both desktop and mobile devices, built with Tailwind CSS.

## 🛠️ Technology Stack & Architecture

This project is a monorepo with a decoupled architecture, ensuring a clean separation of concerns between the client and the server.

| Area                  | Technology / Package                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Frontend Framework** | **React 19**, **Vite** |
| **UI & Styling** | **Tailwind CSS**, **Framer Motion** (for animations), **Lucide React** (icons)                                   |
| **Routing** | **React Router v6** |
| **Authentication** | **Firebase** |
| **Backend Framework** | **Node.js**, **Express.js** |
| **AI Integration** | **@google/generative-ai** (Gemini)                                                                               |
| **Middleware** | **CORS** (for secure API communication)                                                                          |
| **Dev Environment** | **Nodemon** (for backend auto-reloading), **ESLint** (for code linting)                                            |
| **Deployment** | **Vercel** (Frontend), **Render/Heroku** (Backend)                                                                 |

## 🚀 Local Development Setup

To get a local copy up and running, follow these steps.

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn
-   A Firebase project for authentication.
-   A Google Gemini API Key.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/rizzbite.git](https://github.com/your-username/rizzbite.git)
    cd rizzbite
    ```

2.  **Setup the Backend:**
    ```sh
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add the following:
    ```
    GEMINI_API_KEY=your_google_gemini_api_key
    PORT=5000
    # Add your Firebase Admin SDK config variables here
    ```
    Start the backend server:
    ```sh
    npm run dev
    ```

3.  **Setup the Frontend:**
    ```sh
    cd ../frontend
    npm install
    ```
    Create a `.env.local` file in the `frontend` directory and add your Firebase client config and backend URL:
    ```
    VITE_API_URL=http://localhost:5000
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```
    Start the frontend development server:
    ```sh
    npm run dev
    ```

Your application should now be running locally, with the frontend at `http://localhost:5173` (or similar) and the backend at `http://localhost:5000`.