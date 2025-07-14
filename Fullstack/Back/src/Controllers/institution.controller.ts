import {getInstitutionsService, createInstitutionService} from '../Services/institution.service'
import { Request, Response } from 'express'

export const getInstitutionController = async (req: Request, res: Response) => {
  try {
      const institution = await getInstitutionsService();
      res.json(institution);
    } catch (err) {
      res.status(500).json({ error: 'Error de db' });
      throw err;
    }
};
export const createInstitution = async (req: Request, res: Response) => {
  const {name} = req.body
  try {
    const createInst = await createInstitutionService(name)
    return res.status(201).json({ message: 'Institución creada con exito', createInst });
  } catch (err) {
    res.status(500).json({ error: 'Error de db'});
    throw err;
  }
}