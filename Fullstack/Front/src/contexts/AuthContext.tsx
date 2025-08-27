import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
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

const API_URL_LOCAL = import.meta.env.VITE_API_URL_LOCAL;
const API_URL = import.meta.env.VITE_API_URL_DEPLOY;


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
    setLoadingAuth(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await axios.post(`${API_URL_LOCAL}/admin/loginAdmin`, {
        email,
        password,
      });

      const data = res.data;

      if (data.token && data.user) {
        const authUser: AuthUser = {
          email: data.user.email,
          name: data.user.name,
          hasInstitution: !!data.user.institutionID // true si tiene institutionID asignado
        };

        setUser(authUser);
        setToken(data.token);
        setIsAuthenticated(true);

        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(authUser));

        return true;
      }

      return false;
    } catch (err: any) {
      console.error("Error en login:", err.response?.data || err.message);
      return false;
    }
  };

  const register = async (email: string, name: string, password: string): Promise<boolean> => {
    try {
      const res = await axios.post(`${API_URL_LOCAL}/admin/registerAdmin`, {
        email,
        name,
        password,
      });

      const data = res.data;

      if (data.token && data.user) {
        const authUser: AuthUser = {
          email: data.user.email,
          name: data.user.name,
          hasInstitution: false // al registrarse, no tiene institutionID asignado
        };

        setUser(authUser);
        setToken(data.token);
        setIsAuthenticated(true);

        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(authUser));

        return true;
      }

      return false;
    } catch (err: any) {
      console.error("Error en register:", err.response?.data || err.message);
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

  const createInstitution = async (institution: { name: string; address: string; phone: string; type: string; }): Promise<boolean> => {
    try {
      const res = await axios.post(
        `${API_URL_LOCAL}/institution/`,
        institution,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = res.data;

      if (res.status === 201 && data.token && data.createInst) {
        // Actualizo el token porque ahora el admin tiene institutionID asignado
        setToken(data.token);
        localStorage.setItem("token", data.token);

        // (Opcional) si querés guardar el institutionID en el user del contexto:
        if (user) {
          const updatedUser = { ...user, 
            institutionID: data.createInst.inst_ID, 
            hasInstitution: true // <-- agregá esta línea
          };
          setUser(updatedUser);
          localStorage.setItem("user", JSON.stringify(updatedUser));
        }

        return true;
      }
      return false;
    } catch (err: any) {
      console.error("Error en createInstitution:", err.response?.data || err.message);
      return false;
    }
  };

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
    isAuthenticated,
    createInstitution,
    loadingAuth
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
