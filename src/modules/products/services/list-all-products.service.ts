import { ProductsRepository } from "../../../shared/repositories/products.repository"

export class ListAllProductsService {
    constructor(private readonly productsRepository: ProductsRepository) {}

    public async perform(){
        const products = await this.productsRepository.getAll()
        return products
      }
}
