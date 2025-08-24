// File: src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Homepage from './pages/Homepage';
import GeneratorPage from './pages/GeneratorPage';
import FeaturesPage from './pages/FeaturesPage';
import MissionPage from './pages/MissionPage';
import PricingPage from './pages/PricingPage';
import SignUpPage from './pages/SignUpPage'; // <-- IMPORT
import LoginPage from './pages/LoginPage';   // <-- IMPORT
import MyRecipesPage from './pages/MyRecipesPage';
import AccountPage from './pages/AccountPage';
import ScrollToTop from './components/utils/ScrollToTop';
function App() {
  return (
    // We wrap everything in a flex container that takes up the full screen height
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* This main section is now told to "grow" to fill any empty space */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/signup" element={<SignUpPage />} /> {/* <-- ADD THIS */}
          <Route path="/login" element={<LoginPage />} />   {/* <-- ADD THIS */}
          <Route path="/my-recipes" element={<MyRecipesPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/scroll-to-top" element={<ScrollToTop />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;