import React from 'react';
import { Home, Layers, ClipboardList, Users } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => {
  return (
    <div 
      className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-colors
        ${active 
          ? 'bg-indigo-100 text-indigo-800' 
          : 'text-gray-700 hover:bg-gray-200'}`}
    >
      <div className="mr-3">{icon}</div>
      <span>{label}</span>
    </div>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">DeviceControl</h2>
      </div>
      
      <div className="flex-1 p-4">
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<Layers size={20} />} label="Control dispositivos" active />
        <NavItem icon={<ClipboardList size={20} />} label="Historial" />
        <NavItem icon={<Users size={20} />} label="Usuarios" />
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-medium">
            US
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium">Usuario</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};