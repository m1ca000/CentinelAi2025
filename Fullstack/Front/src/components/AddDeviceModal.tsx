import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { Device } from '../types';

interface AddDeviceModalProps {
  onAdd: (device: Omit<Device, 'id'>) => void;
  onClose: () => void;
}

export const AddDeviceModal: React.FC<AddDeviceModalProps> = ({ onAdd, onClose }) => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceType, setDeviceType] = useState<'camera' | 'turnstile'>('camera');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (deviceName.trim()) {
      onAdd({
        name: deviceName,
        type: deviceType,
        active: false,
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Agregar dispositivo</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nombre del dispositivo"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tipo
            </label>
            <div className="flex">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  className="form-radio"
                  name="deviceType"
                  value="camera"
                  checked={deviceType === 'camera'}
                  onChange={() => setDeviceType('camera')}
                />
                <span className="ml-2">Cámara</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="deviceType"
                  value="turnstile"
                  checked={deviceType === 'turnstile'}
                  onChange={() => setDeviceType('turnstile')}
                />
                <span className="ml-2">Molinete</span>
              </label>
            </div>
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