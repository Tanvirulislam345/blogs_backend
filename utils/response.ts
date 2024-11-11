import { Response } from "express";

// Success Response Helper
export const sendResponse = (
  res: Response,
  data: any,
  message: string = "Success",
  statusCode: number = 200
) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};
