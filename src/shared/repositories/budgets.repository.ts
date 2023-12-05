import { TBudget, TBudgetUpdate } from './implements/budgets.types';

export interface BudgetsRepository {
    create(product: TBudget, base64: string): Promise<void>;
    getAll():Promise<TBudget>;
    deleteBudgetById(id: number):Promise<Boolean>;
    updateBudgetById(id: number, data: TBudgetUpdate):Promise<Boolean>;
    getBudgetById(id: number):Promise<TBudget | undefined>;
}
