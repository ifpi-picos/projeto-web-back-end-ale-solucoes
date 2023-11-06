import { UsersRepository } from "../../../shared/repositories/users.repository"

export class GetUserByDocumentService {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async perform(company_document: string){
        const users = await this.usersRepository.getUserByDocument(company_document)

        return users;
      }
}
