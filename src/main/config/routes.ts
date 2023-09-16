import 'express-async-errors';
import express, { Router, Request, Response, NextFunction } from 'express';
import { errorHandler } from '../../shared/errors/ErrorHandler';
import usersRoutes from '../routes/user.routes';

const router = Router();

router.use('/users', usersRoutes);


// error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, res);
});

export default router;
