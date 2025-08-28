import express from 'express';
import { getDevicesByInstitution, createDevice, updateDeviceState, deleteDevice } from '../Controllers/device.controller';
import authMidd from '../Middleware/auth';

const router = express.Router();

router.get('/', authMidd.verifyToken, getDevicesByInstitution);
router.post('/', authMidd.verifyToken, createDevice);
router.put('/updateState', authMidd.verifyToken, updateDeviceState);
router.delete('/deleteDevice', authMidd.verifyToken, deleteDevice);

export default router;
