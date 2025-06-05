import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const getDevicesService = async (institutionID) => {
  return await prisma.device.findMany({
    where: { institutionID },
    include: { type: true }
  });
};

export const createDeviceService = async ({ name, typeID, institutionID }) => {
  return await prisma.device.create({
    data: {
      name,
      typeID,
      institutionID
    }
  });
};
