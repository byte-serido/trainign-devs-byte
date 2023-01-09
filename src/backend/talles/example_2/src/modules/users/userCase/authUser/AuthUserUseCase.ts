import { User} from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AuthUserDTO } from "../../dtos/AuthUserDTO";
import { AppErros } from "../../../../errors/AppErros";
import bcrypt from 'bcrypt';

export class AuthUserUseCase {
    async execute({email,password}: AuthUserDTO):Promise<User> {
        const userVerified = await prisma.user.findUnique({

            where: {
                email,
            },
        });

        if (!userVerified) {
            throw new AppErros("User with that email or password does not exist");
        }
        
        const userPassword = await prisma.user.findFirst({
            
            where: {
                email,
                password,

        }});


        if (!userPassword) {
            throw new AppErros("User with that email or password does not exist");
        }

        
        
        return userPassword;

        }
    }