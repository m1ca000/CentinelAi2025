import express from 'express';
import { createAdminController } from "../Controllers/admin.controller";

const router = express.Router();

router.post('/createAdmin', createAdminController);

export default router;