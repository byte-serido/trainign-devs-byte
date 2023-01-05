import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/prisma";

export class GetMoviesReleaseDateUseCase{
    async execute(): Promise<Movie[]>{
        const movies = await prisma.movie.findMany({ //Ordena pela data de lançamento
            orderBy: {
                release_date: "desc",
            },
            include : {
                movie_rent: {
                    select: {
                        user: {
                            select: {
                                name: true,
                                email: true,
                            }
                        }
                    }
                }
            }
        });
        
        return movies;
    }
}
