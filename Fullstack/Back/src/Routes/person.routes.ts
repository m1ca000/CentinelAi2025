import express from 'express';
import { getPersonsControllers, uploadPerson } from '../Controllers/person.controller'
import multer from 'multer'
import authMidd from '../Middleware/auth';

const router = express.Router();

//Configuración multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/subirFoto', upload.single('photo'), authMidd.verifyToken, uploadPerson);
router.get('/:institutionID', authMidd.verifyToken, getPersonsControllers);

export default router;