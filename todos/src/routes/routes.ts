import express, { Request, Response } from "express";
import controller from "../controllers/todo";

const router = express.Router();

router.get("/api/todo/health", (req:Request, res:Response)=>{      
    console.log("Todo MS is running...")
    return res.status(200).json({ message : "Todo Microservice is running"})
})

// todo create
router.post("/api/todo", controller.createTodo);

// todo get
router.get("/api/todo/:todoId", controller.getTodo);

// get all todos of a user
router.get("/api/todo", controller.getAllTodo);

// todo update  - update todo text , update completed status as true or false
router.patch("/api/todo/:todoId", controller.updateTodo);

// todo delete
router.delete("/api/todo/:todoId", controller.deleteTodo);


export  default router;
