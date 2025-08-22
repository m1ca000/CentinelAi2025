import { savePersonRegister, getPersonsByInstitution, uploadImage } from "../Services/person.service";
import { Request, Response } from "express";
import axios from "axios";

const AI_URL = process.env.AI_URL || "http://127.0.0.1:8000";

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
        // Mandar a IA (ngrok)
        await axios.post(`${AI_URL}/update_faces`, Persons );

        res.json(Persons);
    } catch(err) {
        res.status(500).json({ error: 'Error al obtener las personas' });
        throw err
    }
}

export const getLastRecognizedController = async (req: Request, res: Response) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/last_recognized");

        res.json(response.data);
    } catch (err) {
        console.error("Error en getLastRecognizedController:", err);
        res.status(500).json({ error: "Error al consultar el último reconocido" });
    }
};