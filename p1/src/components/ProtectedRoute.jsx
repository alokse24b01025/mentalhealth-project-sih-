// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  // 1. If AuthContext is still checking localStorage/Firebase, show nothing or a spinner
  if (loading) {
    return <div className="h-screen flex items-center justify-center bg-green-50 text-green-800">Loading...</div>; 
  }

  // 2. If there is no user, redirect to login page
  if (!currentUser) {
    // We pass the current 'location' so we can redirect them back after they login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. If user is logged in, render the requested page
  return children;
};

export default ProtectedRoute;