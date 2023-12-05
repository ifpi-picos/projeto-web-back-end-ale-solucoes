import { BudgetsRepository } from "../budgets.repository";	
import { Knex } from 'knex';
import { TBudget, TBudgetUpdate } from "./budgets.types";
import { localDb } from "../../database/pg-connection"

export class BudgetsDBRepository implements BudgetsRepository {

    conn: Knex<any, unknown[]>;
  
    constructor() {
      this.conn = localDb;
    }
  
      async create(budget: TBudget, base64: string): Promise<void> {
        const data = new Date();
        await this.conn('budgets').insert({
          budget_name: budget.budget_name,
          created_by: budget.created_by,
          budget_pdf: base64,
          created_at: data,
          value: budget.value_with_discount,
        });
      }

      async getAll(): Promise<any> {
        const data = await this.conn('budgets')
        .select('*')
        .from('budgets')
        .where('deleted', false); 

        return data; 
    }

         async deleteBudgetById(id: number): Promise<Boolean> {
          const data = await this.conn('budgets')
            .select<TBudget>('*')
            .from('budgets')
            .where('id', id)
            .where('deleted', false)
            .first()
            .delete();
      
          return data ? true : false ;
         }   

         async updateBudgetById(id: number, data: TBudgetUpdate): Promise<Boolean> {
          const result = await this.conn('budgets')
            .select<TBudget>('*')
            .from('budgets')
            .where('id', id)
            .where('deleted', false)
            .first()
            .update(data);
  
          return result ? true : false ;
         }

         async getBudgetById(id: number): Promise<TBudget | undefined> {
          const data = await this.conn('budgets')
            .select<TBudget>('*')
            .from('budgets')
            .where('id', id)
            .where('deleted', false)
            .first();
      
          return data;
         }
  }