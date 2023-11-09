import { TBudget, TBudgetUpdate } from "../../../shared/repositories/implements/budgets.types";
import { BudgetsRepository } from "../../../shared/repositories/budgets.repository"

export class UpdateBudgetByIdService {
    constructor(private readonly budgetRepository: BudgetsRepository) {}

    public async perform(id: number, data: TBudgetUpdate){
        
        const budgetUpdated = await this.budgetRepository.updateBudgetById(id, data);

        return budgetUpdated;
      }
}
