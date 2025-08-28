import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const uploadActivityService = async ( institutionID: string, personID: number) => {
    return await prisma.activity.create({
        data: {
            dateTime_in: new Date(),
            institutionID,
            personID
        }
    });
}

export const updateActivityService = async (activity_ID: number) => {
    return await prisma.activity.update({
        where: { activity_ID},
        data: {
            dateTime_out: new Date(),
        }
    });
}

export const getActivitiesService = async (institutionID: string) => {
    return await prisma.activity.findMany({
        where: { institutionID },
        include: { person: true }
    });
};

export const deleteActivityService = async (personID: number) => {
    return await prisma.activity.deleteMany({
        where: { personID }
    });
};