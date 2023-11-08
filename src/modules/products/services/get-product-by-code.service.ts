import { ProductsRepository } from "../../../shared/repositories/products.repository"

export class GetProductByCodeService {
    constructor(private readonly productsRepository: ProductsRepository) {}

    public async perform(code: string){
        const products = await this.productsRepository.getProductByCode(code)

        return products;
      }
}
