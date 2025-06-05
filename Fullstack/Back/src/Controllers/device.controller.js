import { getDevicesService, createDeviceService } from '../Services/device.service.js';

export const getDevicesByInstitution = async (req, res) => {
  try {
    const devices = await getDevicesService(req.params.institutionID);
    res.json(devices);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los dispositivos' });
    throw err;
  }
};

export const createDevice = async (req, res) => {
  try {
    const device = await createDeviceService(req.body);
    res.status(201).json(device);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el dispositivo' });
  }
};
