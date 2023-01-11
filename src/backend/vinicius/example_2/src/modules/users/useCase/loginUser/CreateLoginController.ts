import { LoginUseCase } from "./CreateLoginUseCase";
import { Request, Response } from "express";

export class LoginController {
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const loginUseCase = new LoginUseCase();

        const result = await loginUseCase.execute({email, password});

        return res.status(201).json(result);
    }
}
