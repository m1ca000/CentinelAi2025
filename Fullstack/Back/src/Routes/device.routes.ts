import express from 'express';
import { getDevicesByInstitution, createDevice, updateDeviceState } from '../Controllers/device.controller';
import authMidd from '../Middleware/auth';

const router = express.Router();

router.get('/', authMidd.verifyToken, getDevicesByInstitution);
router.post('/', authMidd.verifyToken, createDevice);
router.put('/updateState', authMidd.verifyToken, updateDeviceState);

export default router;
