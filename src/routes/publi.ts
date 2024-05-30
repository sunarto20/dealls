import express from "express";
import { UserController } from "../controller/user";

export const publicRouter = express.Router();

publicRouter.post("/api/v1/users", UserController.register);
