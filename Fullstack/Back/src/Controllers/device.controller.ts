import { getDevicesService, createDeviceService, updateDeviceStateService, deleteDeviceService, getActiveDevicesService } from '../Services/device.service';
import { Request, Response } from 'express';

export const getDevicesByInstitution = async (req: Request, res: Response) => {
  try {
    const devices = await getDevicesService(String(req.institutionID));
    res.json(devices);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los dispositivos' });
    throw err;
  }
};

export const createDevice = async (req: Request, res: Response) => {
  try {
    const { name, typeID, state } = req.body;
    const device = await createDeviceService(name, typeID, String(req.institutionID), state);
    res.status(201).json(device);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el dispositivo' });
    throw err;
  }
};

export const updateDeviceState = async (req: Request, res: Response) => {
  try {
    const { device_ID, state } = req.body;
    const updatedDevice = await updateDeviceStateService(device_ID, state);
    res.json({ message: 'Estado del dispositivo actualizado con éxito', device: updatedDevice });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar el estado del dispositivo' });
    throw err;
  }
};

export const deleteDevice = async (req: Request, res: Response) => {
  try {
    const { device_ID } = req.body;
    await deleteDeviceService(device_ID);
    res.json({ message: 'Dispositivo eliminado con éxito' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el dispositivo' });
    throw err;
  }
};

export const getActiveDevicesController = async (req: Request, res: Response) => {
    try {
        const inst = req.institutionID;
        if (!inst) {
            return res.status(400).json({ error: 'Faltan datos requeridos' });
        }
        const activeDevices = await getActiveDevicesService(inst);
        return res.status(200).json(activeDevices);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los dispositivos' });
        throw err;
    }
};