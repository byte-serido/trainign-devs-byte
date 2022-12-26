import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppErros } from "../../../../errors/AppErros";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class CreateMovieUseCase {
    async execute({title, duration, release_date}: CreateMovieDTO): Promise<Movie> {
        const movieAlreadyExist = await prisma.movie.findUnique({
            where: {
                title,
            },
        });

        if (movieAlreadyExist) {
            throw new AppErros("Movie already exists!");
        }

        const movie = await prisma.movie.create({
            data: {
                title,
                duration,
                release_date,
            },
        });

        return movie;
    }       
}
