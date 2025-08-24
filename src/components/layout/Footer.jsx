import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Github, Linkedin } from 'lucide-react'; // Removed Twitter and Instagram

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Column 1: Logo and Socials */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="RizzBite Logo" className="h-12" />
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-xs">
              Reclaiming India's health, one meal at a time.
            </p>
            <div className="mt-6 flex space-x-4">
              {/* Removed Twitter and Instagram links */}
              <a href="https://github.com/aradhyaxd-git" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github /></a>
              <a href="https://www.linkedin.com/in/verma-aradhya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin /></a>
            </div>
          </div>
          
          {/* Column 2 & 3: Links */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold tracking-wider uppercase text-gray-400">Product</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/my-recipes" className="text-gray-300 hover:text-white transition-colors">My Recipes</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold tracking-wider uppercase text-gray-400">Company</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link to="/mission" className="text-gray-300 hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold tracking-wider uppercase text-gray-400">Account</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link to="/login" className="text-gray-300 hover:text-white transition-colors">Log In</Link></li>
                <li><Link to="/signup" className="text-gray-300 hover:text-white transition-colors">Sign Up</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} RizzBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;