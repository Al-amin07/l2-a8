import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { customerServices } from "./customer.service";

const createCustomer = catchAsync(async (req, res) => {
  const result = await customerServices.createCustomer(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});
const getAllCustomer = catchAsync(async (req, res) => {
  const result = await customerServices.getAllCustomers();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});
const getSingleCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerServices.getSingleCustomer(customerId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});
const updateCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;

  const result = await customerServices.updateCustomer(customerId, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});
const deleteCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  await customerServices.deleteCustomer(customerId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customer deleted successfully",
  });
});

export const customerControllers = {
  createCustomer,
  getAllCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
