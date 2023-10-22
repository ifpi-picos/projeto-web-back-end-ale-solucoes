import { UsersRepository } from "../../../shared/repositories/users.repository"
import { generateToken } from "../../../shared/utils/generate-token"

export class LoginUserService  {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async perform(password: string, document: string, jwtSecret: string){
        const user = await this.usersRepository.getUserByDocument(document) 
        
        if(!user){
          throw new Error('Usuário na encontrado, tente novamente!')
        }
        if(user.document !== document || user.password !== password){
          throw new Error('Email ou senha inválidos, tente novamente!')
        }

        let token = generateToken(document, user.email, jwtSecret)

        await this.usersRepository.saveToken(document, token);

        const result = {
          document: user.document,
          token: token
        }

        return result;
      }
}