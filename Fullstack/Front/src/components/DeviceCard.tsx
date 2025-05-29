import React from 'react';
import { Play, Square, RotateCw } from 'lucide-react';
import type { Device } from '../types';

interface DeviceCardProps {
  device: Device;
  onToggle: () => void;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({ device, onToggle }) => {
  const handleAction = (action: string) => {
    console.log(`${action} ${device.name}`);
    
    if (action === 'start' && !device.active) {
      onToggle();
    } else if (action === 'stop' && device.active) {
      onToggle();
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
          onClick={() => handleAction('start')}
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white rounded py-1 px-3 text-sm mr-2 transition-colors"
        >
          <Play size={16} className="mr-1" />
          Start
        </button>
        
        <button
          onClick={() => handleAction('stop')}
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded py-1 px-3 text-sm mr-2 transition-colors"
        >
          <Square size={16} className="mr-1" />
          Stop
        </button>
        
        <button
          onClick={() => handleAction('restart')}
          className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white rounded py-1 px-3 text-sm transition-colors"
        >
          <RotateCw size={16} className="mr-1" />
          Restart
        </button>
      </div>
    </div>
  );
};