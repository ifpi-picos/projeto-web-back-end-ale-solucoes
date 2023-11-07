import { ProductsRepository } from "../products.repository";	
import { Knex } from 'knex';
import { TProduct, TProductUpdate } from "./products.types";
import { localDb } from "../../database/pg-connection"

export class ProductsDBRepository implements ProductsRepository {

    conn: Knex<any, unknown[]>;
  
    constructor() {
      this.conn = localDb;
    }
  
      async create(product: TProduct): Promise<void> {
        await this.conn('products').insert(product);
      }
  
      async getUserByCode(code: string): Promise<TProduct | undefined> {
          const data = await this.conn('products')
            .select<TProduct>('*')
            .from('products')
            .where('code', code)
            .first();
      
          return data;
         }
  }