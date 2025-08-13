import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const getAdminByEmailService = async (email: string) => {
    return await prisma.admin.findMany({
        where: { email },
    });
}

export const registerAdminService = async (email: string, name: string, password:string) => {
    return await prisma.admin.create({
        data: {
            email,
            name,
            password,
            institutionID: null
        }
    });
};

export const updateInstAdminService = async (email: string, institutionID: string) => {
    return await prisma.admin.update({
        where: { email },
        data: { institutionID }
    })
}