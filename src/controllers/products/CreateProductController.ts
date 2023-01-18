import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

class CreateProductController{
    async handle(req: Request, res: Response){
        const{
            categoryId,
            name,
            price,
            description,
            banner,
         } = req.body

         if (!req.file){
            throw new Error("Error upload file.")
         }
         const {originalname, filename} = req.file

         const createProductService = new CreateProductService();

         const product = await createProductService.execute({
            categoryId,
            name,
            price,
            description,
            banner: "",
        });

        return res.json(product);
    }
}

export {CreateProductController};