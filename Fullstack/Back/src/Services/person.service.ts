import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();
import dotenv from 'dotenv';
import cloudinary from '../Config/cloudinary';
import { Readable } from 'stream'

export const uploadImage = (fileBuffer: Buffer): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error || !result) return reject(error);
        resolve(result.secure_url);
      }
    );

    Readable.from(fileBuffer).pipe(uploadStream);
  });
};

export const savePersonRegister = async (name: string, surname: string, photo: string, institutionID: string, status: string) => {
  return await prisma.person.create({
    data: {
      name,
      surname,
      photo,
      institutionID,
      status
    }
  });
}

export const getPersonsByInstitution = async (institutionID: string) => {
  return await prisma.person.findMany({
    where: { institutionID },
  })
}

export const updatePersonStateService = async (person_ID: number, status: string) => {
    return await prisma.person.update({
        where: { person_ID },
        data: {
          status,
        }
    });
}

export const deletePersonService = async (person_ID: number) => {
    return await prisma.person.delete({
        where: { person_ID }
    });
};

export const getPersonsIA = async () => {
  return await prisma.person.findMany({})
}

export const getPersonsById = async (person_ID: number) => {
  return await prisma.person.findMany({
    where: { person_ID },
  })
}