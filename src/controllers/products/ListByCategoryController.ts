import { Request, Response } from "express";
import { ListByCateoryService } from "../../services/products/ListByCategoryService";

class ListByCategoryController{
    async handle(req: Request, res: Response){
        const {categoryId} = req.params;

        const listByCategoryService = new ListByCateoryService();

        const response = await listByCategoryService.execute(categoryId);
        console.log(response)
        return res.json(response);
    }
}

export {ListByCategoryController};