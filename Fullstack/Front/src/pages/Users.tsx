import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { UserCard } from '../components/UserCard';
import { AddUserModal } from '../components/AddUserModal';
import type { User } from '../types';

export const Users: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'persona 1', status: 'active' },
    { id: 2, name: 'persona 2', status: 'active' },
  ]);

  const handleAddUser = (user: Omit<User, 'id'>) => {
    const newUser: User = {
      ...user,
      id: Math.max(0, ...users.map((u) => u.id)) + 1,
    };
    setUsers([...users, newUser]);
    setShowModal(false);
  };

  const handleInfo = (user: User) => {
    console.log('Info for user:', user.name);
    // Implement info functionality
  };

  const handleRestrict = (user: User) => {
    console.log('Restrict user:', user.name);
    setUsers(users.map(u => 
      u.id === user.id 
        ? { ...u, status: u.status === 'active' ? 'restricted' : 'active' }
        : u
    ));
  };

  const handleDelete = (user: User) => {
    console.log('Delete user:', user.name);
    if (window.confirm(`¿Estás seguro de que quieres eliminar a ${user.name}?`)) {
      setUsers(users.filter(u => u.id !== user.id));
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Usuarios</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={18} className="mr-2" />
          Agregar
        </button>
      </div>

      <div className="max-w-2xl">
        {users.map((user) => (
          <UserCard 
            key={user.id} 
            user={user}
            onInfo={handleInfo}
            onRestrict={handleRestrict}
            onDelete={handleDelete}
          />
        ))}
        
        {users.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No hay usuarios registrados</p>
          </div>
        )}
      </div>

      {showModal && (
        <AddUserModal onAdd={handleAddUser} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};