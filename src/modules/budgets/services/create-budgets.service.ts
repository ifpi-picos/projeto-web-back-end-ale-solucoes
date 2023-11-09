import { TBudget } from "../../../shared/repositories/implements/budgets.types";
import { BudgetsRepository } from "../../../shared/repositories/budgets.repository";
export class CreateBudgetService {
    constructor (private readonly budgetsRepository: BudgetsRepository) {}

        public async perform(budget: TBudget) {
            const budgetCreated = await this.budgetsRepository.create(
              budget
            );
            return budgetCreated;
        }
        
}