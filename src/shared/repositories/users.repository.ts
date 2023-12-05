import { TUser, TUserUpdate } from './implements/users.types';

export interface UsersRepository {
    create(user: TUser): Promise<void>;
    getAll():Promise<TUser>;
    getUserById(userId: number):Promise<TUser | undefined>;
    getUserByDocument(company_document: string):Promise<TUser | undefined>;
    deleteUserByDocument(company_document: string):Promise<Boolean>;
    updateUserByDocument(company_document: string, data: TUserUpdate):Promise<Boolean>;
    saveToken(company_document: string, token: string):Promise<void>;
    verifyTokenUser(company_document: string):Promise<TUser | undefined>;
}
