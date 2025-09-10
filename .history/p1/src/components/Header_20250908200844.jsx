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
      <nav className="space-x-4 flex items-center">
        <Link to="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
        <Link to="/booking" className="hover:text-blue-600 transition-colors">Booking</Link>
        <Link to="/chat" className="hover:text-blue-600 transition-colors">Chat</Link>
        <Link to="/peer-support" className="hover:text-blue-600 transition-colors">Peer Support</Link>
        
        {/* Login/Logout and Profile Icon */}
        {currentUser ? (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">
                <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <span className="text-sm hidden md:block">{currentUser.email}</span>
            </div>
            <button 
              onClick={handleLogout} 
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;