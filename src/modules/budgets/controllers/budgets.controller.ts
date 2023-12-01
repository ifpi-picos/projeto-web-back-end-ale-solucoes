import { Request, Response } from 'express';
import { HttpCode } from '../../../shared/errors/AppError';
import { TBudget } from '../../../shared/repositories/implements/budgets.types';
import { CreateBudgetService } from '../services/create-budgets.service';
import { ListAllBudgetsService } from '../services/list-all-budgets.service';
import { DeleteBudgetByIdService } from '../services/delete-budget-by-id.service';
import { UpdateBudgetByIdService } from '../services/update-budget-by-id.service';
import { BudgetsDBRepository } from '../../../shared/repositories/implements/budgets.repository';
import { GetBudgetByIdService } from '../services/get-budget-by-id.service';


class BudgetsController {

  static async create(request: Request, response: Response) {
    const budget = request.body as TBudget;
    const createBudgetsService = new CreateBudgetService(new BudgetsDBRepository());
    const result = await createBudgetsService.perform(budget);
    console.log(result)
    response.status(HttpCode.OK).json({
      response: 'successfull',
      message: 'Dados obtidos com sucesso',
      data: result,
    });
  }

  static async listAll(request: Request, response: Response) {
    const listAllBudgetsService = new ListAllBudgetsService(new BudgetsDBRepository());
    const result = await listAllBudgetsService.perform()

    response.status(HttpCode.OK).json({
      response: 'successfull',
      message: 'Dados obtidos com sucesso',
      data: result,
    });

  }

  static async delete(request: Request, response: Response) {

    const deleteBudgetByIdService = new DeleteBudgetByIdService(new BudgetsDBRepository());

    const id: number = parseInt(request.params.id, 10);

    const result = await deleteBudgetByIdService.perform(id)

    response.status(HttpCode.OK).json({
      response: 'successfull',
      message: 'Dados obtidos com sucesso',
      data: result,
    });
  }

  static async update(request: Request, response: Response) {

    const updateBudgetByIdService = new UpdateBudgetByIdService(new BudgetsDBRepository());

    const id: number = parseInt(request.params.id, 10);
    const data = request.body;

    const result = await updateBudgetByIdService.perform(id, data);

    response.status(HttpCode.OK).json({
      response: 'successfull',
      message: 'Dados obtidos com sucesso',
      data: result,
    });
  }

  static async listOne(request: Request, response: Response) {

    const getBudgetByIdService = new GetBudgetByIdService(new BudgetsDBRepository());

    const id: number = parseInt(request.params.id, 10);

    const result = await getBudgetByIdService.perform(id)

    response.status(HttpCode.OK).json({
      response: 'successfull',
      message: 'Dados obtidos com sucesso',
      data: result,
    });
  }
}

export default BudgetsController;