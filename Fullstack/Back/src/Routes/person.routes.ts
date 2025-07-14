import express from 'express';
import { getPersonsControllers, uploadPerson } from '../Controllers/person.controller'
import multer from 'multer'

const router = express.Router();

//Configuración multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/subirFoto', upload.single('photo'), uploadPerson);
router.get('/:institutionID', getPersonsControllers);

export default router;