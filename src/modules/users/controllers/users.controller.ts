import { Request, Response } from 'express';
import { TUser } from '../../../shared/repositories/implements/users.types';
import { HttpCode } from '../../../shared/errors/AppError';
import { CreateUserService } from '../services/create-user.service';
import { UsersDBRepository } from '../../../shared/repositories/implements/users.repository';
import { ListAllUsersService } from '../services/list-all-users.service';
import {  GetUserByDocumentService } from '../services/get-user-by-document.service';
import { DeleteUserByDocumentService } from '../services/delete-user-by-document.service';
import { UpdateUserByDocumentService } from '../services/update-user-by-document.service';

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
        const result =  await listAllUsersService.perform()

        response.status(HttpCode.OK).json({
            response: 'successfull',
            message: 'Dados obtidos com sucesso',
            data: result,
          });

    }

    static async listOne(request: Request, response: Response){
    
        const getUserByDocumentService = new GetUserByDocumentService(new UsersDBRepository());

        const {document} = request.params;
        
        const result =  await getUserByDocumentService.perform(document)

        response.status(HttpCode.OK).json({
            response: 'successfull',
            message: 'Dados obtidos com sucesso',
            data: result,
          });
    }

    static async delete(request: Request, response: Response){
    
        const deleteUserByDocumentService = new DeleteUserByDocumentService(new UsersDBRepository());

        const {document} = request.params;
        
        const result =  await deleteUserByDocumentService.perform(document)

        response.status(HttpCode.OK).json({
            response: 'successfull',
            message: 'Dados obtidos com sucesso',
            data: result,
          });
    }

    static async update(request: Request, response: Response){
    
      const updateUserByDocumentService = new UpdateUserByDocumentService(new UsersDBRepository());

      const {document} = request.params;
      const data = request.body;
      console.log(data)
      const result =  await updateUserByDocumentService.perform(document, data);

      response.status(HttpCode.OK).json({
          response: 'successfull',
          message: 'Dados obtidos com sucesso',
          data: result,
        });
  }
}

export default UsersController;