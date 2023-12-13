import { Request, Response } from 'express';
import { TUser } from '../../../shared/repositories/implements/users.types';
import { HttpCode } from '../../../shared/errors/AppError';
import { CreateUserService } from '../services/create-user.service';
import { UsersDBRepository } from '../../../shared/repositories/implements/users.repository';
import { ListAllUsersService } from '../services/list-all-users.service';
import { GetUserByDocumentService } from '../services/get-user-by-document.service';
import { DeleteUserByDocumentService } from '../services/delete-user-by-document.service';
import { UpdateUserByDocumentService } from '../services/update-user-by-document.service';
import { LoginUserService } from '../services/login-user.service';
import { VerifyTokenUserService } from '../services/verify-token-user.service';
import bcrypt from 'bcrypt';

class UsersController {
  static async login(request: Request, response: Response) {
    const loginUserService = new LoginUserService(new UsersDBRepository());

    const {company_document, password} = request.body;
    let {jwtsecret} = request.headers;
    jwtsecret = '12345'
    const result = await loginUserService.perform(password, company_document, jwtsecret as string);

    response.status(HttpCode.OK).json({
      response: 'successfull',
      message: 'Dados obtidos com sucesso',
      data: result,
    });

  }
  
  static async create(request: Request, response: Response) {
    const  user  = request.body as TUser;
    const createUsersService = new CreateUserService(new UsersDBRepository()); 
    user.password = await bcrypt.hash(user.password, 10);

    const result = await createUsersService.perform(user);

    response.status(HttpCode.OK).json({
        response: 'successfull',
        message: 'Dados obtidos com sucesso',
        data: result,
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

    const {id} = request.params;
  
    const result =  await getUserByDocumentService.perform(Number(id))

    response.status(HttpCode.OK).json({
        response: 'successfull',
        message: 'Dados obtidos com sucesso',
        data: result,
      });
    }

  static async delete(request: Request, response: Response){
    
    const deleteUserByDocumentService = new DeleteUserByDocumentService(new UsersDBRepository());

    const {company_document} = request.params;
    
    const result =  await deleteUserByDocumentService.perform(company_document)

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

    const result =  await updateUserByDocumentService.perform(document, data);

    response.status(HttpCode.OK).json({
        response: 'successfull',
        message: 'Dados obtidos com sucesso',
        data: result,
      });
  }

  static async verifyToken(request: Request, response: Response){
    const verifyTokenUserService = new VerifyTokenUserService(new UsersDBRepository());
    const {company_document} = request.params
    let {token} = request.headers;

    const result = await verifyTokenUserService.perform(token as string, company_document);
    
    response.status(HttpCode.OK).json({
      response: 'successfull',
      message: 'Dados obtidos com sucesso',
      data: result,
    });
  }
}

export default UsersController;