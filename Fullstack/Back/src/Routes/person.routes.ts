import express from 'express';
import { getPersonsControllers, uploadPerson, getLastRecognizedController, updatePersonStateController, deletePerson, getPersonsControllersIA } from '../Controllers/person.controller'
import multer from 'multer'
import authMidd from '../Middleware/auth';

const router = express.Router();

//Configuración multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
export const config = {
  api: {
    bodyParser: false,
  },
};

router.post('/subirFoto', upload.single('photo'), authMidd.verifyToken, uploadPerson);
router.get('/', authMidd.verifyToken, getPersonsControllers);
router.get('/lastRecognized', authMidd.verifyToken, getLastRecognizedController);
router.put('/updateState', authMidd.verifyToken, updatePersonStateController);
router.delete('/deletePerson', authMidd.verifyToken, deletePerson);
router.get('/getPersonsIA', getPersonsControllersIA);

export default router;