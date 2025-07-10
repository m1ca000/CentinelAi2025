import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();
import cloudinary from 'cloudinary'
import dotenv from 'dotenv';

cloudinary.config({
  secure: true
});

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

export const uploadPhotoToCloudinary = async (fileBuffer) => {
    try {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(async (error, result) => {
        if (error) {
          return reject(error);
        }
        const imageURL = result.secure_url;
        resolve(imageURL);
        }).end(fileBuffer);
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
};

export const savePersonRegister = async (name, surname, photo) => {
    return await prisma.person.create({
        data: {
            name,
            surname,
            photo
        }
    });
}

export const getPersonsByInstitution = async (institutionID) => {
  return await prisma.person.findMany({
    where: { institutionID },
  })
}