// File: src/components/layout/Navbar.jsx

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import logo from '../../assets/logo.svg'; // Corrected logo path
import { ArrowRight, Menu, X, LogOut, User } from 'lucide-react'; // Added User icon
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
        <Link to="/" className="flex items-center">
          <img src={logo} alt="RizzBite Logo" className="h-12" />
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
              {/* ADDED: Account Link */}
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
          <div className="container mx-auto px-6 py-4 flex flex-col items-center gap-4">
            <Link to="/features" onClick={() => setIsMenuOpen(false)}>Features</Link>
            {currentUser && (
              <>
                <Link to="/my-recipes" onClick={() => setIsMenuOpen(false)}>My Recipes</Link>
                {/* ADDED: Account Link for Mobile */}
                <Link to="/account" onClick={() => setIsMenuOpen(false)}>Account</Link>
              </>
            )}
            <Link to="/mission" onClick={() => setIsMenuOpen(false)}>Our Mission</Link>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            {currentUser ? (
              <Button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="w-full flex items-center justify-center gap-2">
                <LogOut className="h-4 w-4" />
                Log Out
              </Button>
            ) : (
              <Link to="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full flex items-center justify-center gap-2">
                  Sign Up
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
