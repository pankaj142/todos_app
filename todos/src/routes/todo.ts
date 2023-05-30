import express, { Request, Response } from "express";

import { createTodo } from "../controllers/todo/create";
import { updateTodo } from "../controllers/todo/update";
import { getTodo } from "../controllers/todo/get";
import { getAllTodo } from "../controllers/todo/getAll";
import { deleteTodo } from "../controllers/todo/delete";
import { health } from "../controllers/todo/health";

const routesTodo = express.Router();


// todo create
routesTodo.post("/", createTodo);

// todo get
routesTodo.get("/:todoId", getTodo);

// get all todos of a user
routesTodo.get("/", getAllTodo);

// todo update  - update todo text , update completed status as true or false
routesTodo.patch("/:todoId", updateTodo);

// todo delete
routesTodo.delete("/:todoId", deleteTodo);

routesTodo.get("/health", health);

export  {routesTodo};
