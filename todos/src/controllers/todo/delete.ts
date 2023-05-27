import { Request, Response, NextFunction } from "express";
import Todo from "../../models/todo";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const deleteTodo = (req:Request, res:Response, next:NextFunction) =>{}


export {
    deleteTodo
}