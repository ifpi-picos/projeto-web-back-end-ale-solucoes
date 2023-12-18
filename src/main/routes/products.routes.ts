import { Router, response } from 'express';
import ProductsController from '../../modules/products/controllers/products.controller';
import authMiddleware from '../../shared/middlewares/verifyToken.middleware';
const router = Router();
router.post('/create', ProductsController.create);
router.get('/list-all',authMiddleware, ProductsController.listAll);
router.delete('/delete/:code', ProductsController.delete);
router.put('/update/:code', ProductsController.update);
router.get('/list-one/:code', ProductsController.listOne);

export default router;
