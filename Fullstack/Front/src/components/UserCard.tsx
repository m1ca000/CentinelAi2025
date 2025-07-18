import React from 'react';
import type { User } from '../types';

interface UserCardProps {
  user: User;
  onInfo: (user: User) => void;
  onRestrict: (user: User) => void;
  onDelete: (user: User) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onInfo, onRestrict, onDelete }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4 mb-3">
      <div className="flex justify-between items-center mb-3">
        <div className="font-medium text-gray-800">{user.name}</div>
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={() => onInfo(user)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded text-sm transition-colors"
        >
          Info
        </button>
        <button 
          onClick={() => onRestrict(user)}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded text-sm transition-colors"
        >
          Restringir
        </button>
        <button 
          onClick={() => onDelete(user)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};