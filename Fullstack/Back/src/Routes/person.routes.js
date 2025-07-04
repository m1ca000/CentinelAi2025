import express from 'express';
import { subirFoto } from '../Controllers/person.controller';

const router = express.Router();

router.post('/subirFoto', subirFoto);

