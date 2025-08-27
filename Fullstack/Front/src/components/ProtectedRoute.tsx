import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresInstitution?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiresInstitution = true }) => {
  const { isAuthenticated, user, loadingAuth } = useAuth();
  
  if (loadingAuth) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiresInstitution && user && !user.hasInstitution) {
    return <Navigate to="/setup-institution" replace />;
  }
  
  return <>{children}</>;
};