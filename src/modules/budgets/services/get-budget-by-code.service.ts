import { BudgetsRepository } from "../../../shared/repositories/budgets.repository"

export class GetBudgetByCodeService {
    constructor(private readonly budgetsRepository: BudgetsRepository) {}

    public async perform(code: string){
        const budgets = await this.budgetsRepository.getBudgetByCode(code)

        return budgets;
      }
}
