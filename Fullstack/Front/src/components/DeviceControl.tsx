import React, { useState } from 'react';
import { Plus, Play, Square, RotateCw } from 'lucide-react';
import { DeviceCard } from './DeviceCard';
import { AddDeviceModal } from './AddDeviceModal';
import type { Device } from '../types/index';

export const DeviceControl: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [devices, setDevices] = useState<Device[]>([
    { id: 1, name: 'Camara 1', type: 'camera', active: true },
    { id: 2, name: 'Molinete 1', type: 'turnstile', active: false },
  ]);

  const toggleDeviceStatus = (id: number) => {
    setDevices(
      devices.map((device) =>
        device.id === id ? { ...device, active: !device.active } : device
      )
    );
  };

  const handleAddDevice = (device: Omit<Device, 'id'>) => {
    const newDevice: Device = {
      ...device,
      id: Math.max(0, ...devices.map((d) => d.id)) + 1,
    };
    setDevices([...devices, newDevice]);
    setShowModal(false);
  };

  const cameras = devices.filter((device) => device.type === 'camera');
  const turnstiles = devices.filter((device) => device.type === 'turnstile');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Control dispositivos</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={18} className="mr-2" />
          Agregar
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Camaras:</h2>
          <div className="space-y-4">
            {cameras.map((device) => (
              <DeviceCard
                key={device.id}
                device={device}
                onToggle={() => toggleDeviceStatus(device.id)}
              />
            ))}
            {cameras.length === 0 && (
              <p className="text-gray-500">No hay cámaras disponibles</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Molinetes:</h2>
          <div className="space-y-4">
            {turnstiles.map((device) => (
              <DeviceCard
                key={device.id}
                device={device}
                onToggle={() => toggleDeviceStatus(device.id)}
              />
            ))}
            {turnstiles.length === 0 && (
              <p className="text-gray-500">No hay molinetes disponibles</p>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <AddDeviceModal onAdd={handleAddDevice} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};