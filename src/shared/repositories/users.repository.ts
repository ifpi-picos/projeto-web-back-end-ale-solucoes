import { TUser } from './implements/users.types';

export interface UsersRepository {
    create(user: TUser): Promise<void>;
    getAll():Promise<void>
    
}
