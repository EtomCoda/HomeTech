import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
  addToFavorites: (productId: string) => void;
  removeFromFavorites: (productId: string) => void;
  isProductFavorite: (productId: string) => boolean;
}

// Mock user for demo purposes
const mockUser: User = {
  id: 'user1',
  name: 'Demo User',
  email: 'demo@example.com',
  favorites: [],
  orders: []
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse user from localStorage:', error);
      }
    }
  }, []);
  
  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call to authenticate
    // For demo, we just simulate a successful login with mock user
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(mockUser);
        resolve();
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would make an API call to register
    // For demo, we just simulate a successful registration
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const newUser: User = {
          ...mockUser,
          name,
          email
        };
        setUser(newUser);
        resolve();
      }, 500);
    });
  };

  const addToFavorites = (productId: string) => {
    if (!user) return;
    
    setUser({
      ...user,
      favorites: [...user.favorites, productId]
    });
  };

  const removeFromFavorites = (productId: string) => {
    if (!user) return;
    
    setUser({
      ...user,
      favorites: user.favorites.filter(id => id !== productId)
    });
  };

  const isProductFavorite = (productId: string) => {
    return user?.favorites.includes(productId) || false;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      logout, 
      register,
      addToFavorites,
      removeFromFavorites,
      isProductFavorite
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};