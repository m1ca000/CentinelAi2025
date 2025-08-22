import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AuthUser, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const API_URL = 'https://centinel-ai2025.vercel.app'; // Cambia por tu backend

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Cargar token y usuario guardado en localStorage
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch(`${API_URL}/admin/loginAdmin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        const authUser: AuthUser = { email, name: email, role: 'admin' }; // Podés ajustar si tu backend devuelve nombre
        setUser(authUser);
        setToken(data.token);
        setIsAuthenticated(true);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(authUser));
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const register = async (email: string, name: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch(`${API_URL}/admin/registerAdmin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        const authUser: AuthUser = { email, name, role: 'user' };
        setUser(authUser);
        setToken(data.token);
        setIsAuthenticated(true);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(authUser));
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
