import { BudgetsRepository } from "../../../shared/repositories/budgets.repository"

export class ListAllBudgetsService {
    constructor(private readonly budgetsRepository: BudgetsRepository) {}

    public async perform(){
        const budgets = await this.budgetsRepository.getAll()
        return budgets
      }
}
