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

      async getAll(): Promise<any> {
        const data = await this.conn('products')
        .select('*')
        .from('products')
        .where('deleted', false); 

        return data; 
    }
  
      async getUserByCode(code: string): Promise<TProduct | undefined> {
          const data = await this.conn('products')
            .select<TProduct>('*')
            .from('products')
            .where('code', code)
            .first();
      
          return data;
         }

         async deleteProductByCode(code: string): Promise<Boolean> {
          const data = await this.conn('products')
            .select<TProduct>('*')
            .from('products')
            .where('code', code)
            .where('deleted', false)
            .first()
            .delete();
      
          return data ? true : false ;
         }   

         async updateProductByCode(code: string, data: TProductUpdate): Promise<Boolean> {
          const result = await this.conn('products')
            .select<TProduct>('*')
            .from('products')
            .where('code', code)
            .where('deleted', false)
            .first()
            .update(data);
  
          return result ? true : false ;
         }

         async getProductByCode(code: string): Promise<TProduct | undefined> {
          const data = await this.conn('products')
            .select<TProduct>('*')
            .from('products')
            .where('code', code)
            .where('deleted', false)
            .first();
      
          return data;
         }
  }