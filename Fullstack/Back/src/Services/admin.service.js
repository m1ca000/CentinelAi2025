import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const getAdminByEmailService = async (email) => {
    return await prisma.admin.findMany({
        where: { email },
    });
}

export const createAdminService = async (email, name, password) => {
    return await prisma.admin.create({
        data: {
            email,
            name,
            password,
            institutionID: null
        }
    });
};