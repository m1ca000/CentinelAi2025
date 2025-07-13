import express from 'express';
import { getDevicesByInstitution, createDevice } from '../Controllers/device.controller.js';

const router = express.Router();

router.get('/:institutionID', getDevicesByInstitution);
router.post('/', createDevice);

export default router;
