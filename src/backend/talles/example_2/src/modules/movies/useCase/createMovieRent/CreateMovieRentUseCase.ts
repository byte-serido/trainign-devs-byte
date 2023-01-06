import { AppErros } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
    async execute({movieID, userID}: CreateMovieRentDTO):Promise<void> {

        const movieExists = await prisma.movie.findUnique({
            where: {
                id: movieID,
            },
        });

        if (!movieExists) {
            throw new AppErros("Movie does not exists!");
        }

        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where: {
                movieID,
            },
        });

        if (movieAlreadyRented) {
            throw new AppErros("Movie already rented!");
            
        }

        const userExists = await prisma.user.findUnique({

            where: {
                id: userID,
            },
        });

        if (!userExists) {
            throw new AppErros("User does not exists!");
        }

        await prisma.movieRent.create({
            data: {
                movieID,
                userID,
            },
        });
    }

}