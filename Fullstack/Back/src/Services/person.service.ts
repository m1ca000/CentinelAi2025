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