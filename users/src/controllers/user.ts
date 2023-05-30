import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { log } from "../utils/logger";

const register = (req:Request, res:Response, next:NextFunction) => {
    log.info("crating new user")
    let {firstName, lastName, email, password} = req.body;
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    })

    return user.save()
        .then((newUser)=>{
            log.info("New User created...")
            return res.status(201).json({user:newUser});
        })
        .catch((error)=>{
            log.error(error);
            return  res.status(500).json({
                error
            })
        })
};


const login = (req:Request, res:Response, next:NextFunction) => {
    log.info("logging in user...")
    let {id} = req.body;
    let _id = new ObjectId(id)
    return User.findOne({_id})
        .then((user)=>{
            if(user){
                log.info(`User ${id} found`)
                return res.status(200).json({user})
            }else{
                log.error(`User with this id ${id} not found, register...`)
                return res.status(404).json({message : "User mot found with this id"})
            }
        })
        .catch((error)=>{
            log.info("login error", error)
            return res.status(500).json({
                error
            })
        })
};


const read = (req:Request, res:Response, next:NextFunction) => {
    const id = req.params.userId;
    let _id = new ObjectId(id)
    log.info(`Reading user for id ${_id}`);

    return User.findById(_id)
        .then((user)=>{
            if(user){
                return res.status(200).json({user})
            }else{
                return res.status(404).json({
                    message: "Not found"
                })
            }
        })
        .catch((error)=>{
            log.error(error);
            return res.status(500).json({
                error
            })
        })

};


export default {
    register,
    login,
    read,
};
