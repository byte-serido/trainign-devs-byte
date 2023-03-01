import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { generateToken } from "../../../../config/generateToken";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, username, password } = req.body;

    try {
      //Verificando se o usuário já existe
      if (await prisma.user.findUnique({ where: { email: email } })) {
        return res.status(400).send({ error: "User already exists!" });
      }

      const createUserUseCase = new CreateUserUseCase();

      const result = await createUserUseCase.execute({
        name,
        email,
        username,
        password,
      });

      //Deixando a senha vazia para não retorna-la
      result.password = "";

      return res.send({
        result,
        token: generateToken({ id: result.id }),
      });
    } catch (error) {
      return res.status(400).send({ error: "Registration failed" });
    }
  }
}
