import express from 'express';
import { getDevicesByInstitution, createDevice, updateDeviceState, deleteDevice, getActiveDevicesController } from '../Controllers/device.controller';
import authMidd from '../Middleware/auth';

const router = express.Router();

router.get('/', authMidd.verifyToken, getDevicesByInstitution);
router.post('/', authMidd.verifyToken, createDevice);
router.put('/updateState', authMidd.verifyToken, updateDeviceState);
router.delete('/deleteDevice', authMidd.verifyToken, deleteDevice);
router.get('/active', authMidd.verifyToken, getActiveDevicesController);

export default router;
