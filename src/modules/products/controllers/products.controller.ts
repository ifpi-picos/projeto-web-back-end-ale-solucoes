import { Request, Response } from 'express';
import { HttpCode } from '../../../shared/errors/AppError';
import { TProduct } from '../../../shared/repositories/implements/products.types';
import { CreateProductService } from '../services/create-products.service';
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
}

export default ProductsController;