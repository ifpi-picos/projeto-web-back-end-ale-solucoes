import { TUser } from './implements/users.types';

export interface UsersRepository {
    create(user: TUser): Promise<void>;
    getAll():Promise<TUser>;
    getUserByDocument(document: string):Promise<TUser | []>;
    deleteUserByDocument(document: string):Promise<Boolean>;
    
}
