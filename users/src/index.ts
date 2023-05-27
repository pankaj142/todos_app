
import express from "express";
import router from "./routes/routes";
import connectDB  from "./config/configDb";

import dotenv from 'dotenv';

// env 
dotenv.config();

const app = express();

// express middleware
app.use(express.json());

// routes
app.use(router);

const PORT = process.env.PORT || 4000;

const startServer = async () =>{
    try{
        //connect to db
        await connectDB();
        
        app.listen(PORT, ()=>{
            console.log(`Users service is running on port ${PORT}`)
        })
    }catch(error){
        console.log(error);
    }
}

startServer();
