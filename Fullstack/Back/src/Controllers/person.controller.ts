import { savePersonRegister, getPersonsByInstitution, uploadImage, updatePersonStateService, deletePersonService, getPersonsIA, getPersonsById } from "../Services/person.service";
import { Request, Response } from "express";
import axios from "axios";
import { deleteActivityService } from "../Services/activity.service";
import { uploadActivity } from "../Controllers/activity.controller";

const AI_URL = process.env.AI_URL || "http://127.0.0.1:8000";

export const uploadPerson = async (req: Request, res: Response) => {
    try {
        if (!req.file || !req.file.buffer) {
            return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
        }
        const imageUrl = await uploadImage(req.file.buffer);
        const person = await savePersonRegister(req.body.name, req.body.surname, imageUrl, String(req.institutionID), req.body.status);

        return res.status(201).json({ message: 'Persona registrada con exito', person });
    } catch(err) {
        throw err
    }
}

export const getPersonsControllersIA = async (req: Request, res: Response) => {
    try {
        const Persons = await getPersonsIA();
        res.json(Persons);
    } catch(err) {
        res.status(500).json({ error: 'Error al obtener las personas' });
        throw err
    }
}

export const getLastRecognizedController = async (req: Request, res: Response) => {
    try {
        const Person = await getPersonsById(req.body.person_ID);
        if (Person.length === 0) {
            return res.status(404).json({ error: "Persona no encontrada" });
        }
        const activity = await uploadActivity(req.body.person_ID);
        res.json(Person[0]);
    } catch (err) {
        console.error("Error en getLastRecognizedController:", err);
        res.status(500).json({ error: "Error al consultar el último reconocido" });
    }
};

export const getPersonsControllers = async (req: Request, res: Response) => {
    try {
        const Persons = await getPersonsByInstitution(String(req.institutionID));
        res.json(Persons);
    } catch(err) {
        res.status(500).json({ error: 'Error al obtener las personas' });
        throw err
    }
}

export const updatePersonStateController = async (req: Request, res: Response) => {
    try {
        const { person_ID, status } = req.body;
        if (!person_ID || !status) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        await updatePersonStateService(person_ID, status);
        res.json({ message: 'Estado de la persona actualizado con éxito' });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el estado de la persona' });
        throw err;
    }
}; 

export const deletePerson = async (req: Request, res: Response) => {
  try {
    const { person_ID } = req.body;

    await deleteActivityService(person_ID);
    await deletePersonService(person_ID);
    
    res.json({ message: 'Persona eliminada con éxito' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la persona' });
    throw err;
  }
};