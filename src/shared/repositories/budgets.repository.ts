import { TBudget, TBudgetUpdate } from './implements/budgets.types';

export interface BudgetsRepository {
    create(product: TBudget): Promise<void>;
    getAll():Promise<TBudget>;
    deleteBudgetByCode(code: string):Promise<Boolean>;
    updateBudgetByCode(code: string, data: TBudgetUpdate):Promise<Boolean>;
    getBudgetByCode(code: string):Promise<TBudget | undefined>;
}
