import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestTimingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const start = process.hrtime();

    res.on('finish', () => {
      const diff = process.hrtime(start);
      const time = diff[0] * 1e3 + diff[1] * 1e-6; // Convert to milliseconds
      console.log(
        `[${new Date().toISOString()}] ${req.method} ${req.url} - ${time.toFixed(3)}ms`,
      );
    });

    next();
  }
}
