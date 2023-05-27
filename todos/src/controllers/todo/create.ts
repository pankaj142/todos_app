import { Request, Response, NextFunction } from "express";
import Todo from "../../models/todo";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const createTodo = (req:Request, res:Response, next:NextFunction) =>{
    try{
        let { text } = req.body;

        //get userId from jwt token
        let userId = new ObjectId()

        const todo = new Todo({
            _id: new mongoose.Types.ObjectId(),
            text: text,
            userId : userId,
            completed : false
        })
        todo.save()
            .then((newTodo)=>{
                console.log("New todo created...");
                return res.status(201).json({ todo: newTodo })
            })
            .catch((error)=>{
                return res.status(500).json({
                    message: error.message
                })
            })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            error
        })
    }
    
}

export {createTodo} ;