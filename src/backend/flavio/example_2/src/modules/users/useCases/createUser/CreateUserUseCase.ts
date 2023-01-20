import { User } from "@prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../erros/AppError";

import { bcrypt } from "bcrypt";

export class CreateUserUseCase {
  async execute({
    name,
    email,
    username,
    password,
  }: CreateUserDTO): Promise<User> {
    //verificar se usuário já existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    //Criptografando a senha
    //const bcrypt = require("bcrypt");
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
