import express from 'express';
import { uploadActivityController, updateActivityController, getActivitiesController } from '../Controllers/activity.controller';
import authMidd from '../Middleware/auth';

const router = express.Router();

router.post('/upload', authMidd.verifyToken, uploadActivityController);
router.put('/:activityID', authMidd.verifyToken, updateActivityController);
router.get('/:institutionID', authMidd.verifyToken, getActivitiesController);

export default router;
