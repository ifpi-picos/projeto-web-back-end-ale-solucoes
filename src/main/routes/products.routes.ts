import { Router, response } from 'express';
import ProductsController from '../../modules/products/controllers/products.controller';

const router = Router();
router.post('/create', ProductsController.create);
router.get('/list-all', ProductsController.listAll);
router.delete('/delete/:code', ProductsController.delete);

export default router;