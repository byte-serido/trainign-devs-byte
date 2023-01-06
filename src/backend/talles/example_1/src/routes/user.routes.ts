import { Router } from "express";
import { CreateUserController } from "../modules/users/userCase/createUser/CreateUserController";
import { GetAllUserController } from "../modules/users/userCase/getAllUsers/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);


export { userRoutes };