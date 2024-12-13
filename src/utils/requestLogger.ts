import { NextFunction, Request, Response } from 'express';

const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log(
    `[REQUEST] ${req.method} ${req.url} - Body: ${JSON.stringify(req.body)}`
  );
  next();
};

export default requestLogger;
