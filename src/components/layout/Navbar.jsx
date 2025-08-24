// File: src/components/layout/Navbar.jsx

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
// We no longer need to import the logo from assets
import { ArrowRight, Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <header className="bg-white/75 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          {/* Using the favicon from the public folder */}
          <img
            src="/fav.svg" // <-- CORRECTED PATH
            alt="RizzBite Logo"
            className="h-10 w-10"
          />
          {/* NEW: Text block with title and tagline */}
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-xl leading-tight">RizzBite</span>
            <span className="text-xs text-gray-500 leading-tight">Rizz up your Bite</span>
          </div>
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/features" className="hover:text-black transition-colors">Features</Link>
          {currentUser && (
            <Link to="/my-recipes" className="hover:text-black transition-colors">My Recipes</Link>
          )}
          <Link to="/mission" className="hover:text-black transition-colors">Our Mission</Link>
          <Link to="/pricing" className="hover:text-black transition-colors">Pricing</Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {currentUser ? (
            <>
              <Link to="/account">
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Account
                </Button>
              </Link>
              <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Log Out
              </Button>
            </>
          ) : (
            <Link to="/signup">
              <Button className="flex items-center gap-2">
                Sign Up
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="outline" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {/* ... your existing mobile menu code ... */}
        </div>
      )}
    </header>
  );
};

export default Navbar;
