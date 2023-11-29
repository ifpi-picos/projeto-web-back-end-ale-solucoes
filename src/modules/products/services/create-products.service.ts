import { TProduct } from "../../../shared/repositories/implements/products.types";
import { ProductsRepository } from "../../../shared/repositories/products.repository";
export class CreateProductService {
    constructor (private readonly productsRepository: ProductsRepository) {}

        public async perform(product: TProduct) {
            const productAlreadyExists = await this.productsRepository.getProductByCode(product.code);
            if (productAlreadyExists) {
                throw new Error('Produto já cadastrado, tente novamente!');
            }
    
            const productCreated = await this.productsRepository.create(
              product
            );
            
            return productCreated;
        }
        
}