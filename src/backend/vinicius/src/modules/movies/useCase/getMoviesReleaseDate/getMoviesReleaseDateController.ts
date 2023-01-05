import { Request, Response } from "express";
import { GetMoviesReleaseDateUseCase } from "./getMoviesReleaseDateUseCase";

export class GetMoviesReleaseDateController{
    async handle(req: Request, res: Response){

        const getMoviesReleaseDateUseCase = new GetMoviesReleaseDateUseCase();

        const result = await getMoviesReleaseDateUseCase.execute();

        return res.status(201).json(result);
    }
}
