import { BudgetsRepository } from "../../../shared/repositories/budgets.repository"

export class GetBudgetByIdService {
    constructor(private readonly budgetsRepository: BudgetsRepository) {}

    public async perform(id: number){
        const budgets = await this.budgetsRepository.getBudgetById(id)

        return budgets;
      }
}
