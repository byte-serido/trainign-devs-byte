import { User } from "@prisma/client";
import { CreateUserDto } from "../../dto/CreateUserDto";
import { prisma } from "../../../../prisma/prisma";
import { AppError } from "../../../../erros/AppError"

export class CreateUserCaseUser{
    async execute({name, email}:CreateUserDto): Promise<User> { // Promise representa o eventual sucesso ou falha de uma operação assincrona
        const userAlreadyExists = await prisma.user.findUnique({ // Caso o usuário já exista, busque ele
            where: {
                email,
            },
        });

        if(userAlreadyExists){
            throw new AppError("User already exists!");
        }

        const user = await prisma.user.create({
            data:{
                name,
                email,
            },
        });

        return user;
    }
}
