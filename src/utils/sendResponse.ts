import { Response } from "express";
interface IResponse<T> {
  success: boolean;
  message: string;
  statusCode?: number;
  data?: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
}
const sendResponse = <T>(res: Response, data: IResponse<T>) => {
  res.status(data?.statusCode || 200).json({
    success: data?.success,
    message: data?.message,
    data: data?.data,
    meta: data?.meta,
  });
};

export default sendResponse;
