import express from 'express';
import { getInstitutionController, createInstitution } from '../Controllers/institution.controller.js';

const router = express.Router();

router.get('/', getInstitutionController);
router.post('/', createInstitution);

export default router;
