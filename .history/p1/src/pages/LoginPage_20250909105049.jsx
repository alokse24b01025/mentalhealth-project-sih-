import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // We'll use the logo on the card itself

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to log in. Please check your email and password.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100 p-4">
      
      {/* Glassmorphism Login Card */}
      <div className="w-full max-w-md rounded-2xl bg-white/40 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
        
        {/* Logo and Branding */}
        <div className="flex justify-center items-center mb-6">
          <img src={logo} alt="MindWell Logo" className="h-12 w-auto" />
          <span className="ml-3 text-3xl font-bold text-green-900">MindWell</span>
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="mt-1 text-gray-600">Please enter your details to sign in.</p>
        </div>
        
        {error && <p className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 mt-1 bg-white/70 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 mt-1 bg-white/70 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              placeholder="••••••••"
            />
          </div>

          <div className="text-right text-sm">
            <a href="#" className="font-medium text-green-700 hover:text-green-600">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 font-semibold rounded-lg shadow-md transition-all duration-300 ${
              isLoading
                ? 'bg-green-300 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            }`}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-green-700 hover:text-green-600">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;