import { Request, Response, NextFunction } from "express";
import Todo from "../../models/todo";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const updateTodo = (req:Request, res:Response, next:NextFunction) =>{
    let { todoId } = req.params;
    let { text, completed } = req.body;

    // check if text is to update or completed field
    
    // console.log(todoId,text,completed)
    return res.status(200).json({text})
}

export {
    updateTodo
}