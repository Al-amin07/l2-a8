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
exports.bikeServiceServices = void 0;
const prismaProvider_1 = __importDefault(require("../../utils/prismaProvider"));
const createService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaProvider_1.default.serviceRecord.create({
        data: payload,
    });
    return result;
});
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaProvider_1.default.serviceRecord.findMany({});
    return result;
});
const getAllServicesByStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaProvider_1.default.serviceRecord.findMany({
        where: {
            AND: [
                {
                    status: {
                        in: ["pending", "in_progress"],
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
});
const getSingleService = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaProvider_1.default.serviceRecord.findUnique({
        where: {
            serviceId,
        },
    });
    return result;
});
const updateService = (serviceId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaProvider_1.default.serviceRecord.update({
        where: {
            serviceId,
        },
        data: {
            status: "done",
            completionDate: (payload === null || payload === void 0 ? void 0 : payload.completionDate) || new Date(),
        },
    });
    return result;
});
exports.bikeServiceServices = {
    createService,
    getAllServices,
    getSingleService,
    updateService,
    getAllServicesByStatus,
};
