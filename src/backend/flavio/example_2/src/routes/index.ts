import { Router } from "express";
import { userRoutes } from "./user.routes";
import { movieRoutes } from "./movie.routes";
import { projectRoutes } from "./project.routes";
import { authRoutes } from "./auth.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", movieRoutes);

routes.use("/auth", authRoutes);
routes.use("/projects", projectRoutes);

export { routes };
