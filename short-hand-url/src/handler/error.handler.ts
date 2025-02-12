/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Request, type Response, type NextFunction } from "express";

export const errorHandle = (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const HttpStatus = error.statusCode || 500;
  const message = error.message || "Internal server error";

  res.status(HttpStatus).json({
    success: false,
    statusCode: HttpStatus,
    message,
    error: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};
