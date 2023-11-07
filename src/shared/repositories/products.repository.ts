import { TProduct, TProductUpdate } from './implements/products.types';

export interface ProductsRepository {
    create(product: TProduct): Promise<void>;
    getUserByCode(code: string):Promise<TProduct | undefined>;
}
