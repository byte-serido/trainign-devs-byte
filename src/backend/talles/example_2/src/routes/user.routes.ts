import { Router } from "express";
import { CreateUserController } from "../modules/users/userCase/createUser/CreateUserController";
import { GetAllUserController } from "../modules/users/userCase/getAllUsers/GetAllUsersController";
import { AuthUserController } from "../modules/users/userCase/authUser/AuthUserController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUserController();
const authUserController = new AuthUserController();

const userRoutes = Router();

userRoutes.post("/auth", authUserController.handle);
userRoutes.post("/create", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);


export { userRoutes };