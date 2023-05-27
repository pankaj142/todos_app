import { Request, Response, NextFunction } from "express";

const health = (req:Request, res:Response, next:NextFunction) =>{
    console.log("Todo MS is running...")
    return res.status(200).json({ message : "Todo Microservice is running"})
}

export {
    health
}