import prismaClient from "../../prisma";

interface CategoryRequest{
    name: string,

}

class CreateCategoryService {
    async execute({name}: CategoryRequest){
        if (name === ""){
            throw new Error("Invalid Name.")
        }

        const categoryAlreadyExisists = await prismaClient.category.findFirst({
            where:{
                name: name,
            }
        })

        if (categoryAlreadyExisists){
            throw new Error("Category Already Exisists.")
        }
        
        const category = await prismaClient.category.create({
            data:{
                name: name,
            },
            select:{
                id: true,
                name: true,
            }
        })
        return category;
    }
}

export {CreateCategoryService}