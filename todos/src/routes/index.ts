import express, { Request, Response } from "express";
import { routesTodo } from "./todo";

const routes = express.Router();

// todo routes
routes.use("/todo", routesTodo);

// routes.use("/auth", routesUser);

export  default routes;
