import { Request, Response } from 'express';
import { TUser } from '../../../shared/repositories/implements/users.types';
import { HttpCode } from '../../../shared/errors/AppError';
import { CreateUserService } from '../services/create-user.service';
import { UsersDBRepository } from '../../../shared/repositories/implements/users.repository';
import { ListAllUsersService } from '../services/list-all-users.service';
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
    static async listAll(request: Request, response: Response){
        const listAllUsersService = new ListAllUsersService(new UsersDBRepository());
        const dados =  await listAllUsersService.perform()
        console.log('12')

        response.status(HttpCode.OK).json({
             dados
        })

    }
}

export default UsersController;