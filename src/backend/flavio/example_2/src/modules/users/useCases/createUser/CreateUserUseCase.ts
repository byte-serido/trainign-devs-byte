import { User } from "@prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { prisma } from "../../../../prisma/client";
//import { AppError } from "../../../../erros/AppError";

import bcrypt from "bcrypt";

export class CreateUserUseCase {
  async execute({
    name,
    email,
    username,
    password,
  }: CreateUserDTO): Promise<User> {
    //Criptografando a senha
    const hash = await bcrypt.hash(password, 10);
    password = hash;

    // criar usuário
    const user = await prisma.user.create({
      data: {
        name,
        email,
        username,
        password,
      },
    });

    return user;
  }
}
