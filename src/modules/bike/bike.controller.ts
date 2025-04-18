import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bikeServices } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
  const result = await bikeServices.createBikeToDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});
const getAllBikes = catchAsync(async (req, res) => {
  const result = await bikeServices.getAllBikesFromDB();
  sendResponse(res, {
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});
const getSingleBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;
  const result = await bikeServices.getSingleBikeFromDB(bikeId);
  sendResponse(res, {
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});
const updateBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;
  const result = await bikeServices.updateBikeInto(bikeId, req.body);
  sendResponse(res, {
    success: true,
    message: "Bike created successfully",
    data: result,
  });
});
const deleteBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;
  const result = await bikeServices.deleteBikeFromDB(bikeId);
  sendResponse(res, {
    success: true,
    message: "Bike created successfully",
    data: result,
  });
});

export const bikeController = {
  createBike,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
};
