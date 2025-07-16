import { uploadActivityService, updateActivityService, getActivitiesService } from "../Services/activity.service";
import { Request, Response } from "express";

export const uploadActivityController = async (req: Request, res: Response) => {
    try {
        const { institutionID, personID } = req.body;
        if (!institutionID || !personID) {
            return res.status(400).json({ error: 'Faltan datos requeridos' });
        }
        const activity = await uploadActivityService(institutionID, personID);
        return res.status(201).json({ message: 'Actividad registrada con éxito', activity });
    } catch (err) {
        res.status(500).json({ error: 'Error de db'});
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
        const { institutionID } = req.params;
        if (!institutionID) {
            return res.status(400).json({ error: 'Falta el ID de la institución' });
        }
        const activities = await getActivitiesService(institutionID);
        return res.status(200).json(activities);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las actividades' });
        throw err;
    }
}   