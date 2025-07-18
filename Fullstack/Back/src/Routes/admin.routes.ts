import express from 'express';
import { registerAdminController, loginAdminController } from "../Controllers/admin.controller";

const router = express.Router();

router.post('/registerAdmin', registerAdminController);
router.post('/loginAdmin', loginAdminController);

export default router;