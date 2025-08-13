import { getDevicesService, createDeviceService } from '../Services/device.service';
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