import { TUser } from "../../../shared/repositories/implements/users.types";
import { UsersRepository } from "../../../shared/repositories/users.repository";
import { generateToken } from "../../../shared/utils/generate-token";

export class CreateUserService {
    constructor(private readonly usersRepository: UsersRepository) {}
    
    public async perform(user: TUser) {
        const userAlreadyExists = await this.usersRepository.getUserByDocument(user.company_document);
        if (userAlreadyExists) {
            throw new Error('Usuário já cadastrado, tente novamente!');
        }

        let token = generateToken(user.company_document, user.email, '12345')
        user.token = token;
        const userCreated = await this.usersRepository.create(
          user
        );
        return userCreated;
    }

}