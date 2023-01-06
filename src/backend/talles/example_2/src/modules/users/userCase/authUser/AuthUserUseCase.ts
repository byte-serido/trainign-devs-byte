import { User, prisma } from "@prisma/client";
import { AuthUserDTO } from "../../dtos/AuthUserDTO";
import { AppErros } from "../../../../errors/AppErros";
import bcrypt from 'bcrypt';

export class AuthUserUseCase {
    async execute({email, password}: AuthUserDTO):Promise<User> {
        const userVerified = await prisma.user.findUnique({

            where: {
                email,
            },
            select:{
                password,
            },
        });

        if (!userVerified) {
            throw new AppErros("User with that email or password does not exist");
        }

            // if (!await bcrypt.compare(password, .password)) {
            //     throw new AppErros("invalid Password");
            // }

        throw new AppErros(" ", 200);
    }
}