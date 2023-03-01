import { Movie } from "@prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../erros/AppError";

export class CreateMovieUseCase {
  async execute({
    title,
    duration,
    release_date,
  }: CreateMovieDTO): Promise<Movie> {
    //verificar se filme já existe
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title,
      },
    });

    if (movieAlreadyExists) {
      throw new AppError("Movie already exists!");
    }

    // criar filme
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
