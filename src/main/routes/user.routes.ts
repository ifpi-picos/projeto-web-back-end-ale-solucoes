import { Router } from 'express';
import  UsersController  from '../../modules/users/controllers/users.controller';

const router = Router();

router.post('/create-user', UsersController.create);

export default router;