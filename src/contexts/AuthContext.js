import React, { createContext, useContext, useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';
import userData from '../data/userdata.json';

// NOTES:
// Generate new passwords here: https://bcrypt.online/ (Cost Factor: 10)
// add has to userdata.json
// user1 / userpass123 == $2y$10$1EirWsk9/CtbYgMy8UTdQO7LavBaBg5KmelTUH0I/g5eTdjKPL.S6
 // user2 / user2 == $2y$10$.OJs557m/8cZ1RPcIH9qfuEEXvvvoHJJ/ohK7mm0C4FwCoUjH3ZTC
 

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      // Find user by username from imported JSON data
      const foundUser = userData.find(u => u.username === username);
      
      if (foundUser) {
        // Verify password with bcrypt
        const isValidPassword = await bcrypt.compare(password, foundUser.password);
        
        if (isValidPassword) {
          setUser(foundUser);
          localStorage.setItem('user', JSON.stringify(foundUser));
          return { success: true };
        } else {
          return { success: false, error: 'Invalid username or password' };
        }
      } else {
        return { success: false, error: 'Invalid username or password' };
      }
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
