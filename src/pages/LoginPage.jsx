// File: src/pages/LoginPage.jsx

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { auth } from '../firebase'; // Import auth from your firebase config
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to homepage on successful login
    } catch (err) {
      // You can add more specific error messages here if you want
      setError('Invalid email or password. Please try again.'); 
    }
  };

  return (
    <div className="container mx-auto px-6 py-24 flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-extrabold tracking-tighter text-center">Welcome Back!</h1>
        <p className="mt-2 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium hover:underline">Sign Up</Link>
        </p>
        <form onSubmit={handleLogin} className="mt-8 space-y-6 bg-white p-8 border rounded-2xl shadow-sm">
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
          
          <Button type="submit" className="w-full py-3">Log In</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
