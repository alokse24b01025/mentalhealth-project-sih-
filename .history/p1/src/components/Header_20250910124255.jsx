import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const menuRef = useRef(null);

  // Effect to close the mobile menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      setIsMenuOpen(false); // Close menu on logout
    } catch (error) {
      console.error("Failed to log out:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const profileIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  const NavLinks = ({ isMobile = false }) => (
    <>
      <NavLink to="/resources" className={isMobile ? mobileLinkClass : desktopLinkClass} onClick={() => setIsMenuOpen(false)}>Resources</NavLink>
      <NavLink to="/booking" className={isMobile ? mobileLinkClass : desktopLinkClass} onClick={() => setIsMenuOpen(false)}>Booking</NavLink>
      <NavLink to="/chat" className={isMobile ? mobileLinkClass : desktopLinkClass} onClick={() => setIsMenuOpen(false)}>Chat</NavLink>
      <NavLink to="/peer-support" className={isMobile ? mobileLinkClass : desktopLinkClass} onClick={() => setIsMenuOpen(false)}>Peer Support</NavLink>
    </>
  );

  const desktopLinkClass = "text-gray-600 hover:text-green-600 transition-colors";
  const mobileLinkClass = "block py-2 text-lg text-gray-700 hover:bg-green-50 rounded-md px-4";

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Side: Logo and Brand Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-x-3">
              <img src={logo} alt="MindWell Logo" className="h-10 w-auto" />
              <span className="text-3xl font-bold text-green-800">MindWell</span>
            </Link>
          </div>

          {/* Right side: Desktop Nav, Auth Buttons & Mobile Menu Button */}
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 mr-6">
              <NavLinks />
            </nav>
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600">{profileIcon}</span>
                  <button onClick={handleLogout} disabled={isLoggingOut} className={`text-white px-4 py-2 text-sm rounded-md transition-colors ${isLoggingOut ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}>
                    {isLoggingOut ? '...' : 'Logout'}
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link to="/login" className="text-gray-600 hover:text-green-600">{profileIcon}</Link>
                  <Link to="/login" className="bg-green-600 text-white px-4 py-2 text-sm rounded-md hover:bg-green-700 transition-colors">Login</Link>
                </div>
              )}
            </div>

            {/* Mobile Menu (Hamburger) Button */}
            <div className="md:hidden" ref={menuRef}>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
              {/* Mobile Menu Panel */}
              {isMenuOpen && (
                <div className="absolute top-20 right-4 w-64 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-lg shadow-xl py-2">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavLinks isMobile={true} />
                    <div className="border-t border-gray-200 mt-4 pt-4">
                      {currentUser ? (
                        <div className="flex items-center justify-between px-4">
                           <div className="flex items-center gap-2">
                            <span className="text-gray-600">{profileIcon}</span>
                            <span className="text-base font-medium text-gray-700">Profile</span>
                          </div>
                          <button onClick={handleLogout} disabled={isLoggingOut} className={`text-white px-4 py-2 text-sm rounded-md transition-colors ${isLoggingOut ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}>
                            {isLoggingOut ? '...' : 'Logout'}
                          </button>
                        </div>
                      ) : (
                        <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center bg-green-600 text-white px-4 py-2 text-base rounded-md hover:bg-green-700 transition-colors">
                          Login
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;