import React, { useState, useEffect } from 'react';
import { Plus, Play, Square, RotateCw } from 'lucide-react';
import { DeviceCard } from './DeviceCard';
import { AddDeviceModal } from './AddDeviceModal';
import type { Device } from '../types/index';
import axios from 'axios'

export const DeviceControl: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(true)
  const institutionID = "0mrcyLbA"; // Cambia esto según tu lógica para obtener el ID de la institución
  // useEffect para obtener dispositivos al montar el componente
  useEffect(() => {
    const fetchDevices = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://centinel-ai2025.vercel.app/devices/${institutionID}`);
        const formattedDevices: Device[] = response.data.map((device: any) => ({
        id: device.device_ID,
        name: device.name,
        type: device.typeID === 1 ? 'camera' : 'turnstile',
        active: device.state
        }));

        setDevices(formattedDevices);
      } catch (error) {
        console.error('Error al obtener dispositivos:', error);
        throw error
      } finally {
        setLoading(false);
      }
    };
    fetchDevices();
  }, [institutionID]);

  

  const toggleDeviceStatus = (id: number) => {
    setDevices(
      devices.map((device) =>
        device.id === id ? { ...device, active: !device.active } : device
      )
    );
  };

  const handleAddDevice = async (device: Omit<Device, 'id'>) => {
    try {
      const payload = {
        name: device.name,
        typeID: device.type === 'camera' ? 1 : 2, 
        institutionID: "0mrcyLbA",
        state: device.active, 
      };
      
      // Realiza la solicitud POST al backend
      const response = await axios.post('https://centinel-ai2025.vercel.app/devices/', payload);
      
      const newDevice: Device = {
        id: response.data.device_ID,
        name: response.data.name,
        type: device.type,
        active: response.data.state,
      };
      setDevices([...devices, newDevice]);
      setShowModal(false);
    } catch (err) {
      console.error ('Error al agregar dispositivo')
      throw err
    }
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