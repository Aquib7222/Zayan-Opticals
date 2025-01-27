// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // Check if the user is already logged in when the page loads or refreshes
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('userName');
    if (loggedIn === 'true' && storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    }
  }, []);

  const login = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', name); // Store the username in localStorage
  };

  const logout = () => {
    setUserName('');
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default{ AuthContext, AuthProvider };
