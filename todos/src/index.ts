
import express from "express";
import routes from "./routes/index";
import connectDB  from "./config/configDb";
import {logger} from "./utils/logger/index.log";

import dotenv from 'dotenv';

// env 
dotenv.config();

const app = express();

// express middleware
app.use(express.json());

// routes
app.use("/api",routes);

const PORT = process.env.PORT || 4001;


const startServer = async () => {
    try{ 
        //connect to db
        await connectDB()
        app.listen(PORT, () => {
            logger.info(`Todo service is running on port ${PORT}`)
        })
    }catch(error){
        logger.error(error)
    }
}

startServer();
