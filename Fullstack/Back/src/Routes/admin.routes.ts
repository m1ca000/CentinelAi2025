import express from 'express';
import { createAdminController } from "../Controllers/admin.controller.js";

const router = express.Router();

router.post('/createAdmin', createAdminController);

export default router;