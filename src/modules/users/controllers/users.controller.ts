import { Request, Response } from 'express';
import { TUser } from '../../../shared/repositories/implements/users.types';
import { HttpCode } from '../../../shared/errors/AppError';
import { CreateUserService } from '../services/create-user.service';
import { UsersDBRepository } from '../../../shared/repositories/implements/users.repository';

class UsersController {
    static async create(request: Request, response: Response) {
        const  user  = request.body as TUser;
        const createUsersService = new CreateUserService(new UsersDBRepository());
        const createdUser = await createUsersService.perform(user);
        response.status(HttpCode.OK).json({
            response: 'successfull',
            message: 'Dados obtidos com sucesso',
            data: {},
          });
      
    }
}

export default UsersController;