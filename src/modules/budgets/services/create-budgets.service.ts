import { TBudget } from "../../../shared/repositories/implements/budgets.types";
import { BudgetsRepository } from "../../../shared/repositories/budgets.repository";
export class CreateBudgetService {
    constructor (private readonly budgetsRepository: BudgetsRepository) {}

        public async perform(budget: TBudget) {
            const budgetAlreadyExists = await this.budgetsRepository.getBudgetByCode(budget.code);
            if (budgetAlreadyExists) {
                throw new Error('Orçamento já cadastrado, tente novamente!');
            }
    
            const budgetCreated = await this.budgetsRepository.create(
              budget
            );
            return budgetCreated;
        }
        
}