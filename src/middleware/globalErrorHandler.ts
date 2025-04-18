import { NextFunction, Request, Response } from "express";

export default function globalErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err?.statusCode || 500;
  const message = err?.message || "Something went wrong";
  const stack = process.env.NODE_ENV === "production" ? null : err?.stack;
  res.status(statusCode).json({
    success: false,
    message,
    stack,
    error: err,
  });
}
