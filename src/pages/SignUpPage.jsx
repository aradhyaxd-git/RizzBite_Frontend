// File: src/pages/SignUpPage.jsx

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { auth } from '../firebase'; // Import auth from your firebase config
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to homepage on successful sign-up
    } catch (err) {
      setError(err.message); // Set a user-friendly error message
    }
  };

  return (
    <div className="container mx-auto px-6 py-24 flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-extrabold tracking-tighter text-center">Create Your Account</h1>
        <p className="mt-2 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium hover:underline">Log In</Link>
        </p>
        <form onSubmit={handleSignUp} className="mt-8 space-y-6 bg-white p-8 border rounded-2xl shadow-sm">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label htmlFor="password"className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button type="submit" className="w-full py-3">Create Account</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;