import prisma from "../../utils/prismaProvider";
import { Bike } from "./../../../generated/prisma/index.d";
const createBikeToDB = async (payload: Bike) => {
  const result = await prisma.bike.create({
    data: payload,
  });

  return result;
};
const getAllBikesFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};
const getSingleBikeFromDB = async (bikeId: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });
  return result;
};
const updateBikeInto = async (bikeId: string, payload: Partial<Bike>) => {
  const result = await prisma.bike.update({
    where: {
      bikeId,
    },
    data: payload,
  });
  return result;
};

const deleteBikeFromDB = async (bikeId: string) => {
  const result = await prisma.bike.delete({
    where: {
      bikeId,
    },
  });
  return null;
};

export const bikeServices = {
  createBikeToDB,
  getSingleBikeFromDB,
  updateBikeInto,
  deleteBikeFromDB,
  getAllBikesFromDB,
};
