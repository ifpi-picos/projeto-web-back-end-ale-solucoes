import { UsersRepository } from "../../../shared/repositories/users.repository"

export class GetUserByDocumentService {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async perform(document: string){
        const users = await this.usersRepository.deleteUserByDocument(document)

        return users
      }
}
