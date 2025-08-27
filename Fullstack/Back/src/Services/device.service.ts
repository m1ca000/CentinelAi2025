import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const getDevicesService = async (institutionID: string) => {
  return await prisma.device.findMany({
    where: { institutionID },
    include: { type: true }
  });
};

export const createDeviceService = async ( name: string, typeID: number, institutionID: string, state: string ) => {
  return await prisma.device.create({
    data: {
      name,
      typeID,
      institutionID,
      state
    }
  });
};

export const updateDeviceStateService = async (device_ID: number, state: string) => {
    return await prisma.device.update({
        where: { device_ID },
        data: {
          state,
        }
    });
}