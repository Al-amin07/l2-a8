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
exports.customerServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prismaProvider_1 = __importDefault(require("../../utils/prismaProvider"));
const AppError_1 = __importDefault(require("../error/AppError"));
const createCustomer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isCustomerExist = yield prismaProvider_1.default.customer.findUnique({
        where: {
            email: payload === null || payload === void 0 ? void 0 : payload.email,
        },
    });
    if (isCustomerExist) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "Customer already exists");
    }
    const result = yield prismaProvider_1.default.customer.create({
        data: payload,
    });
    return result;
});
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaProvider_1.default.customer.findMany({});
    return result;
});
const getSingleCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaProvider_1.default.customer.findUnique({
        where: {
            customerId,
        },
    });
    return result;
});
const deleteCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaProvider_1.default.customer.delete({
        where: {
            customerId,
        },
    });
    return null;
});
const updateCustomer = (customerId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaProvider_1.default.customer.update({
        where: {
            customerId,
        },
        data: payload,
    });
    return result;
});
exports.customerServices = {
    createCustomer,
    getAllCustomers,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer,
};
