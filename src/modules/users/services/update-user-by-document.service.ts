import { TUser, TUserUpdate } from "../../../shared/repositories/implements/users.types";
import { UsersRepository } from "../../../shared/repositories/users.repository"

export class UpdateUserByDocumentService {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async perform(company_document: string, data: TUserUpdate){
        
        const userUpdated = await this.usersRepository.updateUserByDocument(company_document, data);

        return userUpdated;
      }
}
