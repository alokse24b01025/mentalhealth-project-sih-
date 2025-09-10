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

  // This is the SVG icon. Ensure it's exactly like this.
  const profileIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  return (
    <header className="bg-white text-blue-800 p-4 shadow-md flex justify-between items-center fixed top-0 w-full z-50">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="MindWell Logo" className="h-10 w-auto" />
        </Link>
        <h1 className="text-2xl font-bold ml-2 hidden md:block">MindWell</h1>
      </div>

      <nav className="flex items-center space-x-4">
        <Link to="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
        <Link to="/booking" className="hover:text-blue-600 transition-colors">Booking</Link>
        <Link to="/chat" className="hover:text-blue-600 transition-colors">Chat</Link>
        <Link to="/peer-support" className="hover:text-blue-600 transition-colors">Peer Support</Link>
        
        <div className="border-l border-gray-300 h-6 mx-2"></div>

        {currentUser ? (
          <div className="flex items-center space-x-3">
            <span className="text-gray-600">{profileIcon}</span>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`text-white px-4 py-2 rounded-md transition-colors ${
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
            <Link to="/login" className="text-gray-600 hover:text-blue-800">
              {profileIcon}
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
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