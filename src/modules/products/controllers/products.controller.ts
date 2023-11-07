import { Request, Response } from 'express';
import { HttpCode } from '../../../shared/errors/AppError';
import { TProduct } from '../../../shared/repositories/implements/products.types';
import { CreateProductService } from '../services/create-products.service';
import { ListAllProductsService } from '../services/list-all-products.service';
import { DeleteProductByCodeService } from '../services/delete-product-by-code.service';
import { UpdateProductByCodeService } from '../services/update-product-by-code.service';
import { ProductsDBRepository } from '../../../shared/repositories/implements/products.repository';


class ProductsController {

    static async create(request: Request, response: Response) {
      const product  = request.body as TProduct;
      const createProductsService = new CreateProductService(new ProductsDBRepository());
      const result = await createProductsService.perform(product);
    
      response.status(HttpCode.OK).json({
          response: 'successfull',
          message: 'Dados obtidos com sucesso',
          data: result,
          });
      }

      static async listAll(request: Request, response: Response){
        const listAllProductsService = new ListAllProductsService(new ProductsDBRepository());
        const result =  await listAllProductsService.perform()
    
        response.status(HttpCode.OK).json({
            response: 'successfull',
            message: 'Dados obtidos com sucesso',
            data: result,
          });
    
        }

        static async delete(request: Request, response: Response){
    
          const deleteProductByCodeService = new DeleteProductByCodeService(new ProductsDBRepository());
      
          const {code} = request.params;
          
          const result =  await deleteProductByCodeService.perform(code)
      
          response.status(HttpCode.OK).json({
              response: 'successfull',
              message: 'Dados obtidos com sucesso',
              data: result,
            });
          }

          static async update(request: Request, response: Response){
    
            const updateProductByCodeService = new UpdateProductByCodeService(new ProductsDBRepository());
        
            const {code} = request.params;
            const data = request.body;
        
            const result =  await updateProductByCodeService.perform(code, data);
        
            response.status(HttpCode.OK).json({
                response: 'successfull',
                message: 'Dados obtidos com sucesso',
                data: result,
              });
          }
}

export default ProductsController;