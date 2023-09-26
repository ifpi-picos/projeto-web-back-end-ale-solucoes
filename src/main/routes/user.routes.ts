import { Router, response } from 'express';
import  UsersController  from '../../modules/users/controllers/users.controller';

const router = Router();

router.post('/create', UsersController.create);
router.get('/list-all', UsersController.listAll)


export default router;