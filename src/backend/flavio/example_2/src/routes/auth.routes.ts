import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

import { LoginUserController } from "../modules/users/useCases/loginUser/loginUserController";

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const authRoutes = Router();

authRoutes.post("/register", createUserController.handle);
authRoutes.post("/login", loginUserController.handle);

export { authRoutes };
