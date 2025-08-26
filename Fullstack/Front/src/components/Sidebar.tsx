import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Layers, ClipboardList, Users } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, path }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-colors
        ${active 
          ? 'bg-indigo-100 text-indigo-800' 
          : 'text-gray-700 hover:bg-gray-200'}`}
      onClick={() => navigate(path)}
    >
      <div className="mr-3">{icon}</div>
      <span>{label}</span>
    </div>
  );
};

export const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  
  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Centinelai</h2>
      </div>
      
      <div className="flex-1 p-4">
        <NavItem 
          icon={<Home size={20} />} 
          label="Home" 
          active={location.pathname === '/dashboard'}
          path="/dashboard"
        />
        <NavItem 
          icon={<Layers size={20} />} 
          label="Control dispositivos" 
          active={location.pathname === '/dashboard/devices'}
          path="/dashboard/devices"
        />
        <NavItem 
          icon={<ClipboardList size={20} />} 
          label="Actividad" 
          active={location.pathname === '/dashboard/activity'}
          path="/dashboard/activity"
        />
        <NavItem 
          icon={<Users size={20} />} 
          label="Usuarios" 
          active={location.pathname === '/dashboard/users'}
          path="/dashboard/users" 
        />
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
            {user?.name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium">{user?.name}</div>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full text-left text-sm text-gray-600 hover:text-red-600 transition-colors"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};