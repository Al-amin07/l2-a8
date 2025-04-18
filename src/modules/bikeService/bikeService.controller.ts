import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bikeServiceServices } from "./bikeService.service";

const createServices = catchAsync(async (req, res) => {
  const result = await bikeServiceServices.createService(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await bikeServiceServices.getAllServices();
  sendResponse(res, {
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});
const getAllServicesByStatus = catchAsync(async (req, res) => {
  const result = await bikeServiceServices.getAllServicesByStatus();
  sendResponse(res, {
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});
const getSingleService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await bikeServiceServices.getSingleService(serviceId);
  sendResponse(res, {
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});
const updateService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await bikeServiceServices.updateService(serviceId, req.body);
  sendResponse(res, {
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});
export const bikeServiceController = {
  createServices,
  getAllServices,
  getSingleService,
  updateService,
  getAllServicesByStatus,
};
