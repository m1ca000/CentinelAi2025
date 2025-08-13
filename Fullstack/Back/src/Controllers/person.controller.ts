import { savePersonRegister, getPersonsByInstitution, uploadImage } from "../Services/person.service";
import { Request, Response } from "express";

export const uploadPerson = async (req: Request, res: Response) => {
    try {
        if (!req.file || !req.file.buffer) {
            return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
        }
        const imageUrl = await uploadImage(req.file.buffer);
        const person = await savePersonRegister(req.body.name, req.body.surname, imageUrl, String(req.institutionID));
        
        return res.status(201).json({ message: 'Persona registrada con exito' });
    } catch(err) {
        throw err
    }
}

export const getPersonsControllers = async (req: Request, res: Response) => {
    try {
        const Persons = await getPersonsByInstitution(String(req.institutionID))
        res.json(Persons);
    } catch(err) {
        res.status(500).json({ error: 'Error al obtener las personas' });
        throw err
    }
}