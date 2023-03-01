import { Router } from "express";
import { projectController } from "../modules/project/projectController";

const authMiddleware = require("../middlewares/auth");

const controller = new projectController();
const projectRoutes = Router();

projectRoutes.use(authMiddleware);
projectRoutes.get("/", controller.handle);

export { projectRoutes };
