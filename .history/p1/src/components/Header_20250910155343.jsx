import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position
  const menuRef = useRef(null);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if user has scrolled more than 10px, false otherwise
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Effect to close the menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      setIsMenuOpen(false);
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

  const desktopLinkClass = "px-3 py-2 rounded-md text-gray-600 hover:text-green-800 hover:bg-green-50 transition-all duration-200";

  return (
    // --- UPDATED: className is now dynamic based on scroll position ---
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-white/70 backdrop-blur-md shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Side: Hamburger Menu, Logo, and Brand Name */}
          <div className="flex items-center gap-x-4">
            {/* Hamburger Button and Dropdown Menu (for future options) */}
            <div className="relative" ref={menuRef}>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>

              {/* Dropdown Menu Panel - with transition */}
              <div className={`absolute top-14 left-0 w-64 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-lg shadow-xl py-4 px-4 transition-all duration-300 ease-out transform ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <p className="text-center text-gray-500">More options will be added here soon.</p>
              </div>
            </div>

            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-x-3">
              <img src={logo} alt="MindWell Logo" className="h-10 w-auto" />
              <span className="text-3xl font-bold text-green-800 hidden sm:block">Mitr</span>
            </Link>
          </div>
          
          {/* Right side: Nav Links and Auth Buttons */}
          <div className="flex items-center">
            {/* Desktop Navigation Links - hidden on small screens */}
            <nav className="hidden md:flex items-center space-x-2 mr-6">
              <NavLink to="/resources" className={desktopLinkClass}>Resources</NavLink>
              <NavLink to="/booking" className={desktopLinkClass}>Booking</NavLink>
              <NavLink to="/chat" className={desktopLinkClass}>Chat</NavLink>
              <NavLink to="/peer-support" className={desktopLinkClass}>Peer Support</NavLink>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;