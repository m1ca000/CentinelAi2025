import express from 'express';
import { uploadActivityController, updateActivityController, getActivitiesController, getActivityDayController } from '../Controllers/activity.controller';
import authMidd from '../Middleware/auth';

const router = express.Router();

router.post('/upload', authMidd.verifyToken, uploadActivityController);
router.put('/:activityID', authMidd.verifyToken, updateActivityController);
router.get('/', authMidd.verifyToken, getActivitiesController);
router.get('/day', authMidd.verifyToken, getActivityDayController);

export default router;
