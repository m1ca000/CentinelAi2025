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
        <div className="font-medium text-gray-800">
          {user.photo && (
            <img
              src={user.photo}
              alt={`${user.name} ${user.surname}`}
              className="w-10 h-10 rounded-full object-cover border border-gray-400"
            />
          )}
          <div className="font-medium text-gray-800">
            {user.name} {user.surname}
          </div>
          <div
              className={`text-xs font-semibold px-2 py-1 rounded inline-block ${
                user.status === 'authorized'
                  ? 'bg-green-200 text-green-800'
                  : 'bg-red-200 text-red-800'
              }`}
            >
              {user.status === 'authorized' ? 'Autorizado' : 'Restringido'}
            </div>
        </div>
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
          {user.status === 'authorized' ? 'Restringir' : 'Autorizar'}
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