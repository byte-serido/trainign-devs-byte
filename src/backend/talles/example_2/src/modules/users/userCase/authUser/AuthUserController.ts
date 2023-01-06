import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";

export class AuthUserController {
    async handle(req:Request, res:Response) {
        const {email,password} = req.body;

        const authUserUseCase = new AuthUserUseCase();

        const result = await authUserUseCase.execute({email,password})

        return res.status(201).json(result);
    }
}