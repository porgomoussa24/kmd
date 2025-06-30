import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Vérifier la session au chargement
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const userData = localStorage.getItem('adminUser');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulation d'une API - En production, remplacer par un appel API réel
    if (email === 'admin@kamsolution.com' && password === 'Kamsolution2025!') {
      const token = 'admin-token-' + Date.now();
      const userData = {
        id: 1,
        name: 'Administrateur Kamsolution',
        email: 'admin@kamsolution.com',
        role: 'admin'
      };

      localStorage.setItem('adminToken', token);
      localStorage.setItem('adminUser', JSON.stringify(userData));
      
      setIsAuthenticated(true);
      setUser(userData);
      return { success: true };
    } else {
      return { success: false, error: 'Email ou mot de passe incorrect' };
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
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