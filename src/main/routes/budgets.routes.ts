import { Router, response } from 'express';
import BudgetsController from '../../modules/budgets/controllers/budgets.controller';
import authMiddleware from '../../shared/middlewares/verifyToken.middleware';

const router = Router();
router.post('/create', authMiddleware, BudgetsController.create);
router.get('/list-all', BudgetsController.listAll);
router.delete('/delete/:id', BudgetsController.delete);
router.put('/update/:id', BudgetsController.update);
router.get('/list-one/:id', BudgetsController.listOne);

export default router;