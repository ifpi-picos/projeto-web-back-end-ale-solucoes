class ProductsController {
    static async create(request: Request, response: Response) {
        const createProductService = new CreateUserService(new ProductsDBRepository())
    }
}