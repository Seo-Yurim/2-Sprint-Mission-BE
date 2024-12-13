import { NextFunction, Request, Response } from 'express';

interface ResponseData {
  id: string;
  content: string;
  createdAt: string;
}

const responseLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.on('finish', () => {
    const data: ResponseData = res.locals.data || ({} as ResponseData);
    console.log(`[RESPONSE] ${res.statusCode} - Body: ${JSON.stringify(data)}`);
  });
  next();
};

export default responseLogger;
