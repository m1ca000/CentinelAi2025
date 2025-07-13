import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const getAdminByEmailService = async (email: string) => {
    return await prisma.admin.findMany({
        where: { email },
    });
}

export const createAdminService = async (email: string, name: string, password:string) => {
    return await prisma.admin.create({
        data: {
            email,
            name,
            password,
            institutionID: null
        }
    });
};