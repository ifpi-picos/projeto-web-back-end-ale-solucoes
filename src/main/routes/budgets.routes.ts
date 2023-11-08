import { Router, response } from 'express';
import BudgetsController from '../../modules/budgets/controllers/budgets.controller';

const router = Router();
router.post('/create', BudgetsController.create);
router.get('/list-all', BudgetsController.listAll);
router.delete('/delete/:code', BudgetsController.delete);
router.put('/update/:code', BudgetsController.update);
router.get('/list-one/:code', BudgetsController.listOne);

export default router;