import { uploadPhotoToCloudinary, getPersonsByInstitution } from "../Services/person.service.js";

export const uploadPerson = async (req, res) => {
    try {
        const file = req.file.buffer;
        const photo = await uploadPhotoToCloudinary(file);
        return res.status(201).json({ message: 'Persona registrada con exito', photo });
    } catch(err) {
        throw err
    }
}

export const getPersonsControllers = async (req, res) => {
    try {
        const Persons = getPersonsByInstitution(req.params.institutionID)
        res.json(Persons);
    } catch(err) {
        res.status(500).json({ error: 'Error al obtener las personas' });
        throw err
    }
}