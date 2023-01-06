import { User } from "@prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../erros/AppError";

export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDTO): Promise<User> {
    //verificar se usuário já existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    // criar usuário
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }
}
