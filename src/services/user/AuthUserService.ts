import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email, password}: AuthRequest){
        console.log("teste")
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if (!user){
            throw new Error ("Invalid User/Password.")
        }

        const passwordMatch = compare(password, user.password)
        
        if (!passwordMatch){
            throw new Error ("Invalid User/Password.")
        }
    }

}

export {AuthUserService}