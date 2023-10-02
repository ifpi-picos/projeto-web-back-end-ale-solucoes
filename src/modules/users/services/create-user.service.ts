import { TUser } from "../../../shared/repositories/implements/users.types";
import { UsersRepository } from "../../../shared/repositories/users.repository";
import { generateToken } from "../../../shared/utils/generate-token";

export class CreateUserService {
    constructor(private readonly usersRepository: UsersRepository) {}
    
    public async perform(user: TUser) {
        // const userAlreadyExists = await this.usersRepository.findByDocument(user.document);
        // if (userAlreadyExists) {
        //     throw new Error('User already exists');
        // }
        const userCreated = await this.usersRepository.create(
          user
        );
        return userCreated;
    }

}