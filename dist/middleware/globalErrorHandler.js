"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = globalErrorHandler;
function globalErrorHandler(err, req, res, next) {
    const statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || 500;
    const message = (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong";
    const stack = process.env.NODE_ENV === "production" ? null : err === null || err === void 0 ? void 0 : err.stack;
    res.status(statusCode).json({
        success: false,
        message,
        stack,
        error: err,
    });
}
