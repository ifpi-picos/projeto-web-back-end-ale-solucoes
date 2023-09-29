import { UsersRepository } from "../users.repository";	
import { Knex } from 'knex';
import { TUser, TUserUpdate } from "./users.types";
import { localDb } from "../../database/pg-connection"
export class UsersDBRepository implements UsersRepository {

  conn: Knex<any, unknown[]>;

  constructor() {
    this.conn = localDb;
  }

    
    async create(user: TUser): Promise<void> {
      await this.conn('users').insert(user);
    }
    async getAll(): Promise<any>{
      try {
        const data = await this.conn('users').select('*').from('users').where('deleted', false);
        return data; // Return the rows
      } catch (error) {
        console.error(error); // Handle any errors
        throw error; // Optionally rethrow the error
      }
    }

    async getUserByDocument(document: string): Promise<TUser> {

        const data = await this.conn('users')
          .select<TUser>('*')
          .from('users')
          .where('document', document)
          .where('deleted', false)
    
       return data;
       }

       async deleteUserByDocument(document: string): Promise<Boolean> {

        const data = await this.conn('users')
          .select<TUser>('*')
          .from('users')
          .where('document', document)
          .where('deleted', false)
          .first()
          .delete();
        console.log(data);
       return data ? true : false ;
       }

       async updateUserByDocument(document: string, data: TUserUpdate): Promise<Boolean> {
        const result = await this.conn('users')
          .select<TUser>('*')
          .from('users')
          .where('document', document)
          .where('deleted', false)
          .first()
          .update(data);

       return result ? true : false ;
       }
    
}