import { Request, Response, NextFunction } from "express";
import { log } from "../../utils/logger";

const health = (req:Request, res:Response, next:NextFunction) =>{
    log.info("Todo MS is running...")
    return res.status(200).json({ message : "Todo Microservice is running"})
}

export {
    health
}