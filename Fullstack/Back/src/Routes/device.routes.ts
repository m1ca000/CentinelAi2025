import express from 'express';
import { getDevicesByInstitution, createDevice } from '../Controllers/device.controller';
import authMidd from '../Middleware/auth';

const router = express.Router();

router.get('/', authMidd.verifyToken, getDevicesByInstitution);
router.post('/', authMidd.verifyToken, createDevice);

export default router;
