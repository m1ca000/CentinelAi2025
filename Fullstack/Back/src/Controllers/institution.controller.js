import {getInstitutionsService, createInstitutionService} from '../Services/institution.service.js'

export const getInstitutionController = async (req, res) => {
  try {
      const institution = await getInstitutionsService();
      res.json(institution);
    } catch (err) {
      res.status(500).json({ error: 'Error de db' });
      throw err;
    }
};
export const createInstitution = async (req, res) => {
  const {name} = req.body
  try {
    const createInst = await createInstitutionService(name)
  } catch (err) {
    res.status(500).json({ error: 'Error de db'});
    throw err;
  }
}