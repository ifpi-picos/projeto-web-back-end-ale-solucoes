import { BudgetsRepository } from "../../../shared/repositories/budgets.repository"

export class DeleteBudgetByCodeService {
    constructor(private readonly budgetsRepository: BudgetsRepository) {}

    public async perform(code: string){
        const budgets = await this.budgetsRepository.deleteBudgetByCode(code);

        return budgets;
      }
}
