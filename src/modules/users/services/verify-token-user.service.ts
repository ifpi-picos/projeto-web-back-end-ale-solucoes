import { UsersRepository } from "../../../shared/repositories/users.repository"
import * as jwt from "jsonwebtoken";
import { isTokenExpired } from "../../../shared/utils/verify-token";

export class VerifyTokenUserService {
    constructor( private readonly usersRepository: UsersRepository) {}
    
    async perform(jwtSecret:string, company_document: string) {
        const user = await this.usersRepository.verifyTokenUser(company_document);
        if(!user){
            throw new Error('Usuário não encontrado, tente novamente!');
        }
        if(user.token === undefined){
            throw new Error('Token não encontrado, tente novamente!');
        }

        const tokenVerify = isTokenExpired(jwtSecret, user.token);

        return tokenVerify;
    }
}