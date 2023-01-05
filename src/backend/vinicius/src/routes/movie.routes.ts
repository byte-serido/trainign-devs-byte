import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCase/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCase/createMovieRent/CreateMovieRentController";
import { GetMoviesReleaseDateController } from "../modules/movies/useCase/getMoviesReleaseDate/getMoviesReleaseDateController";

const createMovieController = new CreateMovieController();
const getMoviesReleaseDateController = new GetMoviesReleaseDateController();
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release",getMoviesReleaseDateController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export {movieRoutes};
