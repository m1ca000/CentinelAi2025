import {getInstitutionsService, createInstitutionService} from '../Services/institution.service'
import { updateInstAdminService } from '../Services/admin.service';
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

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
  try {
    const {name} = req.body

    const createInst = await createInstitutionService(name)

    const updateAdmin = await updateInstAdminService(String(req.email), createInst.inst_ID)

    const newToken = jwt.sign(
      { email: req.email, institutionID: createInst.inst_ID },
      process.env.JWT_SECRET as string
    );

    return res.status(201).json({ message: 'Institución creada con éxito', createInst, token: newToken });
  } catch (err) {
    res.status(500).json({ error: 'Error de db'});
    throw err;
  }
}