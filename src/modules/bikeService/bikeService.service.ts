import prisma from "../../utils/prismaProvider";
import {
  ServiceRecord,
  ServiceStatus,
} from "./../../../generated/prisma/index.d";
const createService = async (payload: ServiceRecord) => {
  const result = await prisma.serviceRecord.create({
    data: payload,
  });
  return result;
};

const getAllServices = async () => {
  const result = await prisma.serviceRecord.findMany({});
  return result;
};
const getAllServicesByStatus = async () => {
  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          status: {
            in: ["pending", "in_progress"] as ServiceStatus[],
          },
        },
        {
          serviceDate: {
            lt: new Date(new Date().setDate(new Date().getDate() - 7)),
          },
        },
      ],
    },
  });
  console.log({ result: new Date().setDate(new Date().getDate() - 7) });
  return result;
};
const getSingleService = async (serviceId: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });
  return result;
};
const updateService = async (
  serviceId: string,
  payload: Partial<ServiceRecord>
) => {
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: {
      status: "done" as ServiceStatus,
      completionDate: payload?.completionDate || new Date(),
    },
  });
  return result;
};

export const bikeServiceServices = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  getAllServicesByStatus,
};
