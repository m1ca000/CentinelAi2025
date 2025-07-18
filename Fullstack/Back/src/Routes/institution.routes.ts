import express from 'express';
import { getInstitutionController, createInstitution } from '../Controllers/institution.controller';
import authMidd from '../Middleware/auth';

const router = express.Router();

router.get('/', authMidd.verifyToken, getInstitutionController);
router.post('/', authMidd.verifyToken, createInstitution);

export default router;
