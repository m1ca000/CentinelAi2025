import React from 'react';
import { Play, Square, RotateCw } from 'lucide-react';
import type { Device } from '../types';

interface DeviceCardProps {
  device: Device;
  onToggle: () => void;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({ device, onToggle }) => {
  const handleAction = async (action: string) => {
    console.log(`${action} ${device.name}`);

    // Replace with your actual backend URL
    const apiUrl = 'http://localhost:3000/led';

    let status = null;
    if (action === 'encender') {
      status = '1';
    } else if (action === 'apagar') {
      status = '0';
    }

    if (status !== null) {
      try {
        await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ state: status })
        });

        onToggle(); // Optional: update device status visually
      } catch (error) {
        console.error('Error sending LED status:', error);
      }
    }
  };

  
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <div className="font-medium">{device.name}</div>
        <div className={`text-sm ${device.active ? 'text-green-600' : 'text-gray-500'}`}>
          {device.active ? 'Activo' : 'Inactivo'}
        </div>
      </div>
      
      <div className="flex bg-gray-200 p-2">
        <button
          onClick={() => handleAction('encender')}
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white rounded py-1 px-3 text-sm mr-2 transition-colors"
        >
          <Play size={16} className="mr-1" />
          Prender
        </button>
        
        <button
          onClick={() => handleAction('apagar')}
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded py-1 px-3 text-sm mr-2 transition-colors"
        >
          <Square size={16} className="mr-1" />
          Apagar
        </button>
        
        <button
          onClick={() => handleAction('eliminar')}
          className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white rounded py-1 px-3 text-sm transition-colors"
        >
          <RotateCw size={16} className="mr-1" />
          Eliminar
        </button>
      </div>
    </div>
  );
};