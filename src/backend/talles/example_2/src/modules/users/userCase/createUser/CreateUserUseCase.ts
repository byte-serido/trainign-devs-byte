import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppErros } from "../../../../errors/AppErros";

export class CreateUserUseCase {
    async execute({name, email, password}: CreateUserDTO): Promise<User> {
        const userAlreadyExist = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (userAlreadyExist) {
            throw new AppErros("User already exists!");
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });

        return user;
    }       
}
