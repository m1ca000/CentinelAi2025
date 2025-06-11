import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const getInstitutionsService = async () => {
  return await prisma.institution.findMany();
};

function institutionID (longitud = 8) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    for (let i = 0; i < longitud; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
};

export const createInstitutionService = async (name) => {
  const inst_ID = institutionID();
  return await prisma.institution.create({
    data: {
      inst_ID,
      name
    }
  });
};