import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleDuplicateError = (err: any, res: Response) => {
  res.status(StatusCodes.CONFLICT).json({
    status: false,
    message: err.message,
    error: err,
  });
};
