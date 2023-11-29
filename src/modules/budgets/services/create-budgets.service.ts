import { TBudget } from "../../../shared/repositories/implements/budgets.types";
import { BudgetsRepository } from "../../../shared/repositories/budgets.repository";
import { generatePdf } from "../../../shared/utils/generate-pdf";

export class CreateBudgetService {
  constructor(private readonly budgetsRepository: BudgetsRepository) { }

  public async perform(budget: TBudget) {

    const test= await generatePdf(budget);
    // const budgetCreated = await this.budgetsRepository.create(
    //   budget
    // );
    return true;
  }

}