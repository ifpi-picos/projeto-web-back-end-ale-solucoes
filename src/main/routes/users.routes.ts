import { Router, response } from 'express';
import  UsersController  from '../../modules/users/controllers/users.controller';
import authMiddleware from '../../shared/middlewares/verifyToken.middleware';
const router = Router();
router.get('/verify-token/:document', UsersController.verifyToken);
router.post('/login', UsersController.login);
router.post('/create', UsersController.create);
router.get('/list-all', UsersController.listAll);
router.get('/list-one/:id', UsersController.listOne);
router.delete('/delete/:document', UsersController.delete);
router.put('/update/:document', UsersController.update);


export default router;