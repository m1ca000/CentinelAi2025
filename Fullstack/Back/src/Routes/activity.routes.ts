import express from 'express';
import { uploadActivity, updateActivityController, getActivitiesController, getActivityDayController } from '../Controllers/activity.controller';
import authMidd from '../Middleware/auth';

const router = express.Router();

//router.post('/upload', authMidd.verifyToken, uploadActivity);
router.put('/:activityID', authMidd.verifyToken, updateActivityController);
router.get('/', authMidd.verifyToken, getActivitiesController);
router.get('/day', authMidd.verifyToken, getActivityDayController);

export default router;
