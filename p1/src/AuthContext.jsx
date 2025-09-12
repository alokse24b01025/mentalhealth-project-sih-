import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    // Try to load user from localStorage
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  });
  const [loading, setLoading] = useState(false);


  // Login function: POST to /api/auth
  async function login(email, password) {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok || !data.token) {
        throw new Error(data.msg || 'Login failed');
      }
      // Save token and user info
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({ email }));
      setCurrentUser({ email });
    } finally {
      setLoading(false);
    }
  }

  // Register function: POST to /api/user
  async function register(email, password) {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok || !data.token) {
        throw new Error(data.msg || 'Registration failed');
      }
      // Save token and user info
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({ email }));
      setCurrentUser({ email });
    } finally {
      setLoading(false);
    }
  }

  // Logout function
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}