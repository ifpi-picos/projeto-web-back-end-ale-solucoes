import { UsersRepository } from "../../../shared/repositories/users.repository"
import { generateToken } from "../../../shared/utils/generate-token"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export class LoginUserService  {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async perform(password: string, company_document: string, jwtSecret: string){
        const user = await this.usersRepository.getUserByDocument(company_document) 
        console.log(user, 'user')
        if(!user){
          throw new Error('Usuário não encontrado, tente novamente!')

        }
        
        const verifyPassword = await bcrypt.compare(password, user.password)
        console.log(verifyPassword, 'verifyPassword')
        if(!verifyPassword){
          throw new Error('Usuário ou senha incorreta, tente novamente!')
        }

        const token = jwt.sign({ document: user.company_document }, jwtSecret, {
          expiresIn: "1h",
        });


        await this.usersRepository.saveToken(company_document, token);
      
        const result = {
          document: user.company_document,
          token: token,
          id: user.id,
        }

        return result;
      }
}