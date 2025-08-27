import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { User } from '../types';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const API_URL_LOCAL = import.meta.env.VITE_API_URL_LOCAL;
const API_URL = import.meta.env.VITE_API_URL_DEPLOY;

interface AddUserModalProps {
  onAdd: (user: Omit<User, 'id'>) => void;
  onClose: () => void;
}

export const AddUserModal: React.FC<AddUserModalProps> = ({ onAdd, onClose }) => {
  const [name, setUserName] = useState("");
  const [surname, setSurname] = useState("");
  const [status, setStatus] = useState<"authorized" | "restricted">("authorized");
  const [photo, setPhoto] = useState<File | null>(null);
  const { user, token } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("surname", surname);
      formData.append("status", status);
      if (photo) {
        formData.append("photo", photo);
      }

      const res = await axios.post(`${API_URL_LOCAL}/person/subirFoto`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      onAdd(res.data); // agregar el usuario devuelto por el backend
      onClose();
    } catch (err) {
      console.error("Error al registrar persona:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Agregar usuario</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setUserName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nombre del usuario"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellido
            </label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Apellido"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Foto
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
              className="w-full"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};