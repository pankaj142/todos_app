import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import mongoose from "mongoose";

const register = (req:Request, res:Response, next:NextFunction) => {
    console.log("crating new user")
    let {firstName, lastName, email, password} = req.body;
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName:firstName,
        lastName:lastName,
        password:password
    })

    return user.save()
        .then((newUser)=>{
            console.log("New User created...")
            return res.status(201).json({user:newUser});
        })
        .catch((error)=>{
            console.log(error);
            return  res.status(500).json({
                error
            })
        })
};


const login = (req:Request, res:Response, next:NextFunction) => {
    console.log("logging in user...")
    let {id} = req.body;

    return User.findOne({_id:id})
        .then((user)=>{
            if(user){
                console.log(`User ${id} found`)
                return res.status(200).json({user})
            }else{
                console.log(`User with this id ${id} not found, register...`)
                return register(req, res, next);
            }
        })
        .catch((error)=>{
            console.log("login error", error)
            return res.status(500).json({
                error
            })
        })
};


const read = (req:Request, res:Response, next:NextFunction) => {
    const _id = req.params.userId;

    console.log(`Reading user for id ${_id}`);

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
            console.log(error);
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
