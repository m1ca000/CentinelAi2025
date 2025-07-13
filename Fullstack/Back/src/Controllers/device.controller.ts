import { getDevicesService, createDeviceService } from '../Services/device.service.js';
import { Request, Response } from 'express';

export const getDevicesByInstitution = async (req: Request, res: Response) => {
  try {
    const devices = await getDevicesService(req.params.institutionID);
    res.json(devices);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los dispositivos' });
    throw err;
  }
};

export const createDevice = async (req: Request, res: Response) => {
  try {
    const { name, typeID, institutionID, state } = req.body;
    const device = await createDeviceService(name, typeID, institutionID, state);
    res.status(201).json(device);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el dispositivo' });
    throw err;
  }
};