import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCase/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCase/createMovieRent/createMovieRentController";
import { GetMoviesByReleaseDataController } from "../modules/movies/useCase/getMoviesByReleaseDate/GetMoviesByReleaseDateController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const getMoviesByReleaseDataController  = new GetMoviesByReleaseDataController 

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);
movieRoutes.get("/release", getMoviesByReleaseDataController.handle);


export { movieRoutes };