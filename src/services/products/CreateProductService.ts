import prismaClient from "../../prisma";

interface CreateProductRequest {
    categoryId: string,
    name: string,
    price: string,
    description?: string,
    banner?: string,
}

class CreateProductService {
    async execute ({categoryId, name, price, description, banner}: CreateProductRequest){
        const productAlreadyExisits = await prismaClient.product.findFirst({
            where:{
                name,
            }
        })
        
        if(productAlreadyExisits){
            throw new Error("Product Already Exisits.");
        }
        
        const product = await prismaClient.product.create({
            data: {
                name,
                price,
                description,
                banner,
                category_id : categoryId
            },
            select:{
                name: true,
                price: true,
                description: true,
                category_id: true
            }

        })
        
        return product;
    }
}

export {CreateProductService}