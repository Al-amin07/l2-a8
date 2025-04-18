import status from "http-status";
import prisma from "../../utils/prismaProvider";
import AppError from "../error/AppError";
import { Customer } from "./../../../generated/prisma/index.d";
const createCustomer = async (payload: Customer) => {
  const isCustomerExist = await prisma.customer.findUnique({
    where: {
      email: payload?.email,
    },
  });
  if (isCustomerExist) {
    throw new AppError(status.CONFLICT, "Customer already exists");
  }
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

const getAllCustomers = async () => {
  const result = await prisma.customer.findMany({});
  return result;
};
const getSingleCustomer = async (customerId: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });
  return result;
};
const deleteCustomer = async (customerId: string) => {
  await prisma.customer.delete({
    where: {
      customerId,
    },
  });
  return null;
};

const updateCustomer = async (
  customerId: string,
  payload: Partial<Customer>
) => {
  const result = await prisma.customer.update({
    where: {
      customerId,
    },
    data: payload,
  });
  return result;
};

export const customerServices = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
