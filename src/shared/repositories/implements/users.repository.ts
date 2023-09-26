import { UsersRepository } from "../users.repository";	
import { Knex } from 'knex';
import { TUser } from "./users.types";
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
        const rows = await this.conn('users').select('*').from('users').where('deleted', false);
        return rows; // Return the rows
      } catch (error) {
        console.error(error); // Handle any errors
        throw error; // Optionally rethrow the error
      }
    }


}