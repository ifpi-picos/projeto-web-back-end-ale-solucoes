import { UsersRepository } from "../../../shared/repositories/users.repository"

export class DeleteUserByDocumentService {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async perform(company_document: string){
        const users = await this.usersRepository.deleteUserByDocument(company_document);

        return users;
      }
}
