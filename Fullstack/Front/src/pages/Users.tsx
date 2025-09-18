import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { UserCard } from '../components/UserCard';
import { AddUserModal } from '../components/AddUserModal';
import type { User } from '../types';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const API_URL_LOCAL = import.meta.env.VITE_API_URL_LOCAL;
const API_URL = import.meta.env.VITE_API_URL_DEPLOY;

export const Users: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, token } = useAuth();
  const institutionID = user?.institutionID;

 useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}/person/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = res.data;

      const formatted: User[] = data.map((u: any) => ({
        id: u.person_ID,
        name: u.name,
        surname: u.surname,
        status: u.status,
        photo: u.photo,
        institutionID: u.institutionID,
      }));

      setUsers(formatted);
    } catch (err) {
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, [institutionID]);


  const handleAddUser = async (user: Omit<User, 'id'> & { photo?: File | null }) => {
    const { name, surname, status, photo } = user;
    
    // Create a FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('status', status);

    if (photo) {
      formData.append('photo', photo); // Append the actual File object
    }

    try {
      const res = await axios.post(`${API_URL}/person/subirFoto`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Crucial for file uploads
          Authorization: `Bearer ${token}`,
        },
      });

      // Assuming the backend returns the full user object including the photo URL
      const newUser: User = { 
        id: res.data.person.person_ID,
        name: res.data.person.name,
        surname: res.data.person.surname,
        photo: res.data.person.photo,
        status: res.data.person.status,
      };
      
      setUsers([...users, newUser]);
      setShowModal(false);
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  const handleInfo = (user: User) => {
    alert(`
      Nombre: ${user.name} ${user.surname}
      Estado: ${user.status}
      Foto: ${user.photo ?? "-"}
    `);
  };

  const handleRestrict = async (user: User) => {
    try {
      const newStatus = user.status === 'authorized' ? 'restricted' : 'authorized';

      await axios.put(
        `${API_URL}/person/updateState`,
        { person_ID: user.id, status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUsers(users.map(u => u.id === user.id ? { ...u, status: newStatus } : u));
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  const handleDelete = async (user: User) => {
    if (window.confirm(`¿Seguro que querés eliminar a ${user.name} ${user.surname}?`)) {
      try {
        await axios.delete(`${API_URL}/person/deletePerson`, {
          headers: { Authorization: `Bearer ${token}` },
          data: { person_ID: user.id },
        });

        setUsers(users.filter(u => u.id !== user.id));
      } catch (err) {
        console.error("Error deleting user:", err);
      }
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