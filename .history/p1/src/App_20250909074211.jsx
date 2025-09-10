import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Import the provider

// Import your pages
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ResourcesPage from './pages/ResourcesPage';
import BookingPage from './pages/BookingPage';
import PeerSupportPage from './pages/PeerSupportPage';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage'; // Import the new login page
import './index.css';

function App() {
  return (
    <AuthProvider> {/* Wrap everything in AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/peer-support" element={<PeerSupportPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add the login route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;