import "express-async-errors";
import express, { NextFunction, Request, Response, response } from "express";
import { routes } from "./routes";
import { AppErros } from "./errors/AppErros";

const app = express();

app.use(express.json());

app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppErros) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});

app.listen(3333, () => console.log("Server is running in port 3333"));