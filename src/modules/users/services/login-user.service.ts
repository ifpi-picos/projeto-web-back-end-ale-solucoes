import { UsersRepository } from "../../../shared/repositories/users.repository"
import { generateToken } from "../../../shared/utils/generate-token"

export class LoginUserService  {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async perform(email: string, password: string, document: string, jwtSecret: string){
        const user = await this.usersRepository.getUserByDocument(document) 

        if(!user){
          throw new Error('Usuário na encontrado, tente novamente!')
        }
        if(user.email !== email || user.password !== password){
          throw new Error('Email ou senha inválidos, tente novamente!')
        }

        const token =  generateToken(email, password, jwtSecret)
        const userLogged = await this.usersRepository.saveToken(document, token);

        const result = {
          email: user.email,
          document: user.document,
          token: token
        }

        return result;
      }
}