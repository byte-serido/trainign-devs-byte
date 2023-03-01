import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export class projectController {
  async handle(req: Request, res: Response) {
    res.send({ ok: true, user: req.userId });
  }
}
