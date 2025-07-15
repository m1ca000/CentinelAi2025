import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();
import dotenv from 'dotenv';

export const savePersonRegister = async (name: string, surname: string, photo: string, institutionID: string) => {
  return await prisma.person.create({
    data: {
      name,
      surname,
      photo,
      institutionID
    }
  });
}

export const getPersonsByInstitution = async (institutionID: string) => {
  return await prisma.person.findMany({
    where: { institutionID },
  })
}