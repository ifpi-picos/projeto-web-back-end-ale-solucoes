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

}