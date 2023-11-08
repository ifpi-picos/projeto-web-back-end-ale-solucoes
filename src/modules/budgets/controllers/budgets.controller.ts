import { Request, Response } from 'express';
import { HttpCode } from '../../../shared/errors/AppError';
import { TBudget } from '../../../shared/repositories/implements/budgets.types';
import { CreateBudgetService } from '../services/create-budgets.service';
import { ListAllBudgetsService } from '../services/list-all-budgets.service';
import { DeleteBudgetByCodeService } from '../services/delete-budget-by-code.service';
import { UpdateBudgetByCodeService } from '../services/update-budget-by-code.service';
import { BudgetsDBRepository } from '../../../shared/repositories/implements/budgets.repository';
import { GetBudgetByCodeService } from '../services/get-budget-by-code.service';


class BudgetsController {

    static async create(request: Request, response: Response) {
      const budget  = request.body as TBudget;
      const createBudgetsService = new CreateBudgetService(new BudgetsDBRepository());
      const result = await createBudgetsService.perform(budget);
    
      response.status(HttpCode.OK).json({
          response: 'successfull',
          message: 'Dados obtidos com sucesso',
          data: result,
          });
      }

      static async listAll(request: Request, response: Response){
        const listAllBudgetsService = new ListAllBudgetsService(new BudgetsDBRepository());
        const result =  await listAllBudgetsService.perform()
    
        response.status(HttpCode.OK).json({
            response: 'successfull',
            message: 'Dados obtidos com sucesso',
            data: result,
          });
    
        }

        static async delete(request: Request, response: Response){
    
          const deleteBudgetByCodeService = new DeleteBudgetByCodeService(new BudgetsDBRepository());
      
          const {code} = request.params;
          
          const result =  await deleteBudgetByCodeService.perform(code)
      
          response.status(HttpCode.OK).json({
              response: 'successfull',
              message: 'Dados obtidos com sucesso',
              data: result,
            });
          }

          static async update(request: Request, response: Response){
    
            const updateBudgetByCodeService = new UpdateBudgetByCodeService(new BudgetsDBRepository());
        
            const {code} = request.params;
            const data = request.body;
        
            const result =  await updateBudgetByCodeService.perform(code, data);
        
            response.status(HttpCode.OK).json({
                response: 'successfull',
                message: 'Dados obtidos com sucesso',
                data: result,
              });
          }

          static async listOne(request: Request, response: Response){
    
            const getBudgetByCodeService = new GetBudgetByCodeService(new BudgetsDBRepository());
        
            const {code} = request.params;
            
            const result =  await getBudgetByCodeService.perform(code)
        
            response.status(HttpCode.OK).json({
                response: 'successfull',
                message: 'Dados obtidos com sucesso',
                data: result,
              });
            }
}

export default BudgetsController;