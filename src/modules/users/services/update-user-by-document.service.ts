import { TUser, TUserUpdate } from "../../../shared/repositories/implements/users.types";
import { UsersRepository } from "../../../shared/repositories/users.repository"

export class UpdateUserByDocumentService {
    constructor(private readonly usersRepository: UsersRepository) {}

    public async perform(document: string, data: TUserUpdate){
        
        const userUpdated = await this.usersRepository.updateUserByDocument(document, data);

        return userUpdated;
      }
}
