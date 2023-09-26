import { UsersRepository } from "../../../shared/repositories/users.repository"

export class ListAllUsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async perform(){
        const users = await this.usersRepository.getAll()
        return users
      }
}
