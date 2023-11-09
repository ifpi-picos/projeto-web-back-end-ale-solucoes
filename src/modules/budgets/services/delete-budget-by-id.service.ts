import { BudgetsRepository } from "../../../shared/repositories/budgets.repository"

export class DeleteBudgetByIdService {
    constructor(private readonly budgetsRepository: BudgetsRepository) {}

    public async perform(id: number){
        const budgets = await this.budgetsRepository.deleteBudgetById(id);

        return budgets;
      }
}
