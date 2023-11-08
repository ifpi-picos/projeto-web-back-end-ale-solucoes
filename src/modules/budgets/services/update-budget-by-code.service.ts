import { TBudget, TBudgetUpdate } from "../../../shared/repositories/implements/budgets.types";
import { BudgetsRepository } from "../../../shared/repositories/budgets.repository"

export class UpdateBudgetByCodeService {
    constructor(private readonly budgetRepository: BudgetsRepository) {}

    public async perform(code: string, data: TBudgetUpdate){
        
        const budgetUpdated = await this.budgetRepository.updateBudgetByCode(code, data);

        return budgetUpdated;
      }
}
