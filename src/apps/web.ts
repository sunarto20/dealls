import express from "express";
import { publicRouter } from "../routes/publi";
import { ErrorMiddleware } from "./middleware/error";

export const route = express();

route.use(express.json());

route.use(publicRouter);

route.use(ErrorMiddleware);
