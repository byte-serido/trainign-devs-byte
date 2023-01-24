import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { generateToken } from "../../../../config/generateToken";
export const prisma = new PrismaClient();
import bcrypt from "bcrypt";

export class LoginUserController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    // testando se usuario existe
    if (!user) {
      return res.status(400).send({ error: "User nor found" });
    }

    // testando a senha
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: "Invalid passoword" });
    }

    //deixando senha vazia
    user.password = " ";

    res.send({
      user,
      token: generateToken({ id: user.id }),
    });
  }
}
