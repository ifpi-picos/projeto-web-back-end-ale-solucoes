import { ProductsRepository } from "../../../shared/repositories/products.repository"

export class DeleteProductByCodeService {
    constructor(private readonly productsRepository: ProductsRepository) {}

    public async perform(code: string){
        const products = await this.productsRepository.deleteProductByCode(code);

        return products;
      }
}
