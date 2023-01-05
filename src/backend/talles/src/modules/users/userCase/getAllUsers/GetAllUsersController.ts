import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";


export class GetAllUserController {
    async handle(req: Request, res:Response) {

        const getAllUserUseCase = new GetAllUsersUseCase();
        
        const result = await getAllUserUseCase.execute()
    
        return res.status(201).json(result);
    
    }
}