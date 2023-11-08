import { TProduct, TProductUpdate } from './implements/products.types';

export interface ProductsRepository {
    create(product: TProduct): Promise<void>;
    getAll():Promise<TProduct>;
    deleteProductByCode(code: string):Promise<Boolean>;
    updateProductByCode(code: string, data: TProductUpdate):Promise<Boolean>;
    getProductByCode(code: string):Promise<TProduct | undefined>;
}
