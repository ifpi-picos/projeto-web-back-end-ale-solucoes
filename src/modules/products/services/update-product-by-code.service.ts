import { TProduct, TProductUpdate } from "../../../shared/repositories/implements/products.types";
import { ProductsRepository } from "../../../shared/repositories/products.repository"

export class UpdateProductByCodeService {
    constructor(private readonly productRepository: ProductsRepository) {}

    public async perform(code: string, data: TProductUpdate){
        
        const productUpdated = await this.productRepository.updateProductByCode(code, data);

        return productUpdated;
      }
}
