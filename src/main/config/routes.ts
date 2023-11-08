import 'express-async-errors';
import express, { Router, Request, Response, NextFunction } from 'express';
import { errorHandler } from '../../shared/errors/ErrorHandler';
import usersRoutes from '../routes/users.routes';
import productsRoutes from '../routes/products.routes';
import budgetsRoutes from '../routes/budgets.routes';
const router = Router();

router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/budgets', budgetsRoutes);
// error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, res);
});

export default router;
