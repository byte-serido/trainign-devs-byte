import { Request, Response } from "express";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";

export class CreateMovieRentController{
    async handle(req: Request, res:Response) {
        const { movieID, userID } = req.body;

        const createMovieRentUseCase = new CreateMovieRentUseCase();
        
        await createMovieRentUseCase.execute({movieID,userID});
    
        return res.status(201).send();
    }
}