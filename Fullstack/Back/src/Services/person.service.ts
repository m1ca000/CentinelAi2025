import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();
import cloudinary from 'cloudinary'
import dotenv from 'dotenv';

export const savePersonRegister = async (name: string, surname: string, photo: string, institutionID: string, hierarchyID: number) => {
  return await prisma.person.create({
    data: {
      name,
      surname,
      photo,
      hierarchyID,
      institutionID
    }
  });
}

export const getPersonsByInstitution = async (institutionID: string) => {
  return await prisma.person.findMany({
    where: { institutionID },
  })
}