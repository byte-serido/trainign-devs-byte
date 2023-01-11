import { User } from "@prisma/client";
import { LoginUserDto } from "../../dto/LoginUserDto";
import { prisma } from "../../../../prisma/prisma";
import { AppError } from "../../../../erros/AppError"

export class LoginUseCase {
    async execute({email, password}:LoginUserDto): Promise<User> {
        const userEmail = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if(!userEmail){
            throw new AppError("There's no user with that email");
        }

        const userPassword = await prisma.user.findFirst({
            where:{
                email,
                password,
            }
        });

        if(!userPassword){
            throw new AppError("There's no user with that password");
        }

        return userPassword;
    }
}
