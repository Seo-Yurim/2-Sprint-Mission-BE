import { AppError } from './AppError';
import { NextFunction, Request, Response } from 'express';

const handleErrors: (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => void = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
  }

  // AppError가 아닌 경우
  return res.status(500).json({
    message: 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && {
      stack: (err as Error).stack
    })
  });
};

export { handleErrors };
