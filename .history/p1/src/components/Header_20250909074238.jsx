import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

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
            <span className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;