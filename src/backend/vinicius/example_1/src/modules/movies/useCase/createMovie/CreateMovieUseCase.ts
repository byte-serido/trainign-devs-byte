import { Movie } from "@prisma/client";
import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/prisma";
import { CreateMovieDTO } from "../../dto/CreateMovieDTO";

export class CreateMovieUseCase {
    async execute({
        title,
        duration,
        release_date,
    }: CreateMovieDTO): Promise<Movie> {
        const movieAlredyExists = await prisma.movie.findUnique({
            where:{
                title,
            },
        });

        if(movieAlredyExists){
            throw new AppError("Movie already exists!");
        }

        const movie = await prisma.movie.create({
            data:{
                title,
                duration,
                release_date,
            },
        });

        return movie;
    }
}
