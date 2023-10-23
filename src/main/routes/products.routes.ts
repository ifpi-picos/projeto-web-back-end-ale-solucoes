import { Router, response } from 'express';
import ProductsController from '../../modules/products/controllers/products.controller';

const router = Router();
router.post('/create', ProductsController.create)


export default router;