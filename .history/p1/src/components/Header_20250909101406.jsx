import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const profileIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 py-3 flex flex-col items-center">
      
      {/* Top Row: Centered Logo and Name */}
      <div className="mb-2">
        <Link to="/" className="flex items-center justify-center gap-x-3">
          <img src={logo} alt="MindWell Logo" className="h-10 w-auto" />
          <h1 className="text-3xl font-bold text-green-800 hidden md:block">MindWell</h1>
        </Link>
      </div>

      {/* Bottom Row: Navigation Links */}
      <nav className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 px-4">
        <Link to="/resources" className="text-gray-600 hover:text-green-600 transition-colors">Resources</Link>
        <Link to="/booking" className="text-gray-600 hover:text-green-600 transition-colors">Booking</Link>
        <Link to="/chat" className="text-gray-600 hover:text-green-600 transition-colors">Chat</Link>
        <Link to="/peer-support" className="text-gray-600 hover:text-green-600 transition-colors">Peer Support</Link>
        
        <div className="border-l border-gray-300 h-6"></div>

        {currentUser ? (
          <div className="flex items-center space-x-3">
            <span className="text-gray-600">{profileIcon}</span>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`text-white px-4 py-2 text-sm rounded-md transition-colors ${
                isLoggingOut
                  ? 'bg-red-300 cursor-not-allowed'
                  : 'bg-red-500 hover:bg-red-600'
              }`}
            >
              {isLoggingOut ? '...' : 'Logout'}
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <Link to="/login" className="text-gray-600 hover:text-green-600">
              {profileIcon}
            </Link>
            <Link
              to="/login"
              className="bg-green-600 text-white px-4 py-2 text-sm rounded-md hover:bg-green-700 transition-colors"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;