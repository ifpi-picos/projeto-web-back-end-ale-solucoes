import { UsersRepository } from "../../../shared/repositories/users.repository"

export class GetUserByDocumentService {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async perform(userId: number){
        const users = await this.usersRepository.getUserById(userId)

        return users;
      }
}
