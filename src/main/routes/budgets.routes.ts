import { Router, response } from 'express';
import BudgetsController from '../../modules/budgets/controllers/budgets.controller';

const router = Router();
router.post('/create', BudgetsController.create);
router.get('/list-all', BudgetsController.listAll);
router.delete('/delete/:id', BudgetsController.delete);
router.put('/update/:id', BudgetsController.update);
router.get('/list-one/:id', BudgetsController.listOne);

export default router;