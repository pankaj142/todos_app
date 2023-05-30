import express, { Request, Response } from "express";
import controller from "../controllers/user";
import { log } from "../utils/logger";

const router = express.Router();

router.get("/api/user/health", (req:Request, res:Response)=>{      
    log.info("Users MS is running...")
    return res.status(200).json({ message : "User Microservice is running"})
})

router.post("/api/user/register", controller.register);
router.post("/api/user/login", controller.login);
router.get("/api/user/:userId", controller.read);

export  default router;
