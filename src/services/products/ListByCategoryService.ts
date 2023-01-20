import prismaClient from "../../prisma";

class ListByCateoryService{
    async execute(categoryId: string){

        const list = await prismaClient.product.findMany({
            where: {
                category_id: categoryId,
            },

            select:{
                name: true,
                price: true,
                description: true,
                banner: true,
                category_id: true,
                id: true,
            }
        })

        return list;
    }
}

export {ListByCateoryService};