import express from 'express';
import { getPersonsControllers, uploadPerson } from '../Controllers/person.controller.js'

const router = express.Router();

router.post('/subirFoto', uploadPerson);
router.get('/:institutionID', getPersonsControllers);

export default router;