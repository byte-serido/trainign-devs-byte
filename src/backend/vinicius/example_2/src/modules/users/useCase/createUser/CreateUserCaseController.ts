import { Request, Response } from "express";
import { CreateUserCaseUser } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response){
        const {name, email, password} = req.body;

        const createUserCaseUser = new CreateUserCaseUser();

        const result = await createUserCaseUser.execute({name, email, password});

        return res.status(201).json(result); //Retorna o usuário com o status de que foi criado
    }
}
