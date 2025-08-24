// File: src/pages/AccountPage.jsx

import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { User, Shield, Star, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import AnimatedSection from '../components/ui/AnimatedSection';

const AccountPage = () => {
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

  // This is a placeholder for now. Later, this will check the user's status in your database.
  const isProUser = false; 

  if (!currentUser) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-bold">Please log in to view your account.</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <User className="h-8 w-8 text-gray-600" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tighter">My Account</h1>
                <p className="text-gray-600">{currentUser.email}</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 border rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                Subscription Status
              </h2>
              <div className="mt-4 flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <div>
                  <p className="font-semibold">{isProUser ? 'Pro Plan' : 'Free Plan'}</p>
                  <p className="text-sm text-gray-600">{isProUser ? 'You have access to all features.' : 'You have access to basic features.'}</p>
                </div>
                {!isProUser && (
                  <Button>
                    <Star className="h-4 w-4 mr-2" />
                    Upgrade to Pro
                  </Button>
                )}
              </div>
            </div>

            <div className="mt-8">
              <Button variant="outline" onClick={handleLogout} className="w-full flex items-center justify-center gap-2">
                <LogOut className="h-4 w-4" />
                Log Out
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AccountPage;
