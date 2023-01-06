import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { movieRoutes } from "../../../../routes/movie.routes";

export class GetMoviesByReleaseDataUseCase {
    async execute():Promise<Movie[]> {
        const movies = await prisma.movie.findMany({
            orderBy: {
                release_date: "desc",
            },
        include: {
            movie_rent: {
                select: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                        },
                    },
                },
            },
        },    
        });

        return movies;
    }
}