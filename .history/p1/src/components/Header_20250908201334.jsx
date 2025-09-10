import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-white text-blue-800 p-4 shadow-md flex justify-between items-center fixed top-0 w-full z-50">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="MindWell Logo" className="h-10 w-auto" />
        </Link>
        <h1 className="text-2xl font-bold ml-2 hidden md:block">MindWell</h1>
      </div>
      <nav className="space-x-4">
        <Link to="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
        <Link to="/booking" className="hover:text-blue-600 transition-colors">Booking</Link>
        <Link to="/chat" className="hover:text-blue-600 transition-colors">Chat</Link>
        <Link to="/peer-support" className="hover:text-blue-600 transition-colors">Peer Support</Link>
      </nav>
    </header>
  );
};
export default Header;