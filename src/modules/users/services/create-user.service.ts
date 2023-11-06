import { TUser } from "../../../shared/repositories/implements/users.types";
import { UsersRepository } from "../../../shared/repositories/users.repository";

export class CreateUserService {
    constructor(private readonly usersRepository: UsersRepository) {}
    
    public async perform(user: TUser) {
        const userAlreadyExists = await this.usersRepository.getUserByDocument(user.company_document);
        if (userAlreadyExists) {
            throw new Error('Usuário já cadastrado, tente novamente!');
        }

        const userCreated = await this.usersRepository.create(
          user
        );
        return userCreated;
    }

}