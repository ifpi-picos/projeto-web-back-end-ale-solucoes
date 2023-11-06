import { UsersRepository } from "../../../shared/repositories/users.repository"
import { generateToken } from "../../../shared/utils/generate-token"

export class LoginUserService  {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async perform(password: string, company_document: string, jwtSecret: string){
        const user = await this.usersRepository.getUserByDocument(company_document) 
        
        if(!user){
          throw new Error('Usuário na encontrado, tente novamente!')
        }
        if(user.company_document !== company_document || user.password !== password){
          throw new Error('Email ou senha inválidos, tente novamente!')
        }

        let token = generateToken(company_document, user.email, jwtSecret)

        await this.usersRepository.saveToken(company_document, token);

        const result = {
          document: user.company_document,
          token: token
        }

        return result;
      }
}