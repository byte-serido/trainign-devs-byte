import { Request, Response } from "express";
import { GetMoviesByReleaseDataUseCase } from "./GetMoviesByReleaseDateUseCase";

export class GetMoviesByReleaseDataController{
    async handle(req: Request, res:Response) {

        const getMoviesByReleaseDataUseCase = new GetMoviesByReleaseDataUseCase();
        
        const result = await getMoviesByReleaseDataUseCase.execute();
    
        return res.status(201).json(result);
    }
}