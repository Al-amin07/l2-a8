"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeServiceController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const bikeService_service_1 = require("./bikeService.service");
const createServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bikeService_service_1.bikeServiceServices.createService(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Service record created successfully",
        data: result,
    });
}));
const getAllServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bikeService_service_1.bikeServiceServices.getAllServices();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Service records fetched successfully",
        data: result,
    });
}));
const getAllServicesByStatus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bikeService_service_1.bikeServiceServices.getAllServicesByStatus();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result,
    });
}));
const getSingleService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const result = yield bikeService_service_1.bikeServiceServices.getSingleService(serviceId);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Service record fetched successfully",
        data: result,
    });
}));
const updateService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const result = yield bikeService_service_1.bikeServiceServices.updateService(serviceId, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: "Service marked as completed",
        data: result,
    });
}));
exports.bikeServiceController = {
    createServices,
    getAllServices,
    getSingleService,
    updateService,
    getAllServicesByStatus,
};
