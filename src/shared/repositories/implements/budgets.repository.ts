import { BudgetsRepository } from "../budgets.repository";	
import { Knex } from 'knex';
import { TBudget, TBudgetUpdate } from "./budgets.types";
import { localDb } from "../../database/pg-connection"

export class BudgetsDBRepository implements BudgetsRepository {

    conn: Knex<any, unknown[]>;
  
    constructor() {
      this.conn = localDb;
    }
  
      async create(budget: TBudget): Promise<void> {
        await this.conn('budgets').insert(budget);
      }

      async getAll(): Promise<any> {
        const data = await this.conn('budgets')
        .select('*')
        .from('budgets')
        .where('deleted', false); 

        return data; 
    }

         async deleteBudgetByCode(code: string): Promise<Boolean> {
          const data = await this.conn('budgets')
            .select<TBudget>('*')
            .from('budgets')
            .where('code', code)
            .where('deleted', false)
            .first()
            .delete();
      
          return data ? true : false ;
         }   

         async updateBudgetByCode(code: string, data: TBudgetUpdate): Promise<Boolean> {
          const result = await this.conn('budgets')
            .select<TBudget>('*')
            .from('budgets')
            .where('code', code)
            .where('deleted', false)
            .first()
            .update(data);
  
          return result ? true : false ;
         }

         async getBudgetByCode(code: string): Promise<TBudget | undefined> {
          const data = await this.conn('budgets')
            .select<TBudget>('*')
            .from('budgets')
            .where('code', code)
            .where('deleted', false)
            .first();
      
          return data;
         }
  }