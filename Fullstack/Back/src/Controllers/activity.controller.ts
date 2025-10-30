import { uploadActivityService, updateActivityService, getActivitiesService, getActivityDayService } from "../Services/activity.service";
import { getPersonsById } from "../Services/person.service";
import { Request, Response } from "express";

export const uploadActivity = async (personID: number) => {
    try {
        const personFromIA = await getPersonsById(personID);
        const inst = personFromIA[0].institutionID; 
        if (!inst || !personFromIA) {
            return { error: 'Faltan datos requeridos' };
        }
        const activity = await uploadActivityService(inst, personFromIA[0].person_ID);
        return { message: 'Actividad registrada con éxito', activity };
    } catch (err) {
        return { error: 'Error de db' };
        throw err;
    }
}

export const updateActivityController = async (req: Request, res: Response) => {
    try {
        const { activityID } = req.params;
        if (!activityID) {
            return res.status(400).json({ error: 'Falta el ID de la actividad' });
        }
        const updatedActivity = await updateActivityService(Number(activityID));
        return res.status(200).json({ message: 'Actividad actualizada con éxito', updatedActivity });
    } catch (err) {
        res.status(500).json({ error: 'Error de db' });
        throw err;
    }
}

export const getActivitiesController = async (req: Request, res: Response) => {
    try {
        const inst = req.institutionID;
        if (!inst) {
            return res.status(400).json({ error: 'Falta el ID de la institución' });
        }
        const activities = await getActivitiesService(inst);
        return res.status(200).json(activities);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las actividades' });
        throw err;
    }
}

export const getActivityDayController = async (req: Request, res: Response) => {
    try {
        const inst = req.institutionID;
        const date = new Date(req.query.date as string);
        if (!inst || !date) {
            return res.status(400).json({ error: 'Faltan datos requeridos' });
        }
        const activities = await getActivityDayService(inst, date);
        return res.status(200).json(activities);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las actividades del día' });
        throw err;
    }
};