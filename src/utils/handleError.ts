import { NextFunction } from 'express';
import { AppError } from './AppError';
import { Prisma } from '@prisma/client';

export const handleError = (err: unknown, next: NextFunction) => {
  if (err instanceof Error && err.name === 'StructError') {
    return next(new AppError(400, err.message));
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return next(new AppError(404, 'Resource not found'));
  }

  if (err instanceof Error && err.message.includes('Validation')) {
    return next(new AppError(400, 'Validation error'));
  }

  if (err instanceof Error && err.message.includes('Unauthorized')) {
    return next(new AppError(401, 'Unauthorized'));
  }

  if (err instanceof Error && err.message.includes('Forbidden')) {
    return next(new AppError(403, 'Forbidden'));
  }

  return next(new AppError(500, 'Internal Server Error'));
};
