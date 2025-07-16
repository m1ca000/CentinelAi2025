import express from 'express';
import { uploadActivityController, updateActivityController, getActivitiesController } from '../Controllers/activity.controller';

const router = express.Router();

router.post('/upload', uploadActivityController);
router.put('/:activityID', updateActivityController);
router.get('/:institutionID', getActivitiesController);

export default router;
