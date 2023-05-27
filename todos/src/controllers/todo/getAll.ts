import { Request, Response, NextFunction } from "express";
import Todo from "../../models/todo";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

// get all todos of a user
const getAllTodo = (req:Request, res:Response, next:NextFunction) =>{}

export {
    getAllTodo
}
