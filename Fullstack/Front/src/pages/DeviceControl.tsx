import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { DeviceCard } from '../components/DeviceCard';
import { AddDeviceModal } from '../components/AddDeviceModal';
import type { Device } from '../types/index';
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext';

const API_URL_LOCAL = import.meta.env.VITE_API_URL_LOCAL;
const API_URL = import.meta.env.VITE_API_URL_DEPLOY;

export const DeviceControl: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [devices, setDevices] = useState<Device[]>([]);
  const { user, token } = useAuth();
  const institutionID = user?.institutionID; // Cambia esto según tu lógica para obtener el ID de la institución
  
  const handleRestrict = async (device: Device) => {
    try {
      const newStatus = device.active === 'active' ? 'inactive' : 'active';

      await axios.put(
        `${API_URL_LOCAL}/devices/updateState`,
        { device_ID: device.id, state: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setDevices(devices.map(d => d.id === device.id ? { ...d, active: newStatus } : d));
    } catch (err) {
      console.error("Error updating device:", err);
    }
  };

  const handleDelete = async (device: Device) => {
    if (window.confirm(`¿Seguro que querés eliminar a ${device.name}?`)) {
      try {
        await axios.delete(`${API_URL_LOCAL}/devices/deleteDevice`, {
          headers: { Authorization: `Bearer ${token}` },
          data: { device_ID: device.id },
        });

        setDevices(devices.filter(d => d.id !== device.id));
      } catch (err) {
        console.error("Error deleting device:", err);
      }
    }
  };

  // useEffect para obtener dispositivos al montar el componente
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get(`${API_URL_LOCAL}/devices/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
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
      }
    };
    fetchDevices();
  }, [institutionID]);

  const handleAddDevice = async (device: Omit<Device, 'id'>) => {
    try {
      const payload = {
        name: device.name,
        typeID: device.type === 'camera' ? 1 : 2, 
        state: device.active, 
      };
      
      // Realiza la solicitud POST al backend
      const response = await axios.post(`${API_URL_LOCAL}/devices/`, payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
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
                onRestrict={handleRestrict}
                onDelete={handleDelete}
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
                onRestrict={handleRestrict}
                onDelete={handleDelete}
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