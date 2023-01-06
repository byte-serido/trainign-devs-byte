import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/prisma";
import { CreateMovieRentDTO } from "../../dto/CreateMovieRentDTO";

export class CreateMovieRentUseCase{
    //Verificando se o filme já existe
    async execute({movieId, userId}: CreateMovieRentDTO): Promise<void>{
        const movieExists = await prisma.movie.findUnique({
            where: {
                id: movieId,
            }
        });
        
        if(!movieExists){
            throw new AppError("Movie does not exists!");
        }

        // Vai buscar no primeiro caso onde o id de filme é igual ao id do filme buscado
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where: {
                movieId,
            },
        });

        if(movieAlreadyRented){
            throw new AppError("Movie alredy rented!");
        }

        const userExists = await prisma.user.findUnique({
            where:{
                id: userId
            }
        });

        if(!userExists){
            throw new Error("User does not exists!");
        }

        await prisma.movieRent.create({
            data: {
                movieId,
                userId,
            },
        });
    }
}
