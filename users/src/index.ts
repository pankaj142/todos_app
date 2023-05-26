
import express,{ json } from "express";
import router from "./routes/routes";
import connectDB  from "./config/configDb";

import dotenv from 'dotenv';

dotenv.config();

// export const YOUR_ATTRIBUTE = process.env.YOUR_ATTRIBUTE!;

console.log("xxxxxx", process.env.MONGODB_PASSWORD);


const app = express();
app.use(json());

// routes
app.use(router);

const PORT = process.env.PORT || 4000;

//connect to db
connectDB()


app.get("/health", (req, res)=>{
    res.sendStatus(200)
})

app.get("/api/users/currentuser", (req, res)=>{
    res.send("Hello there...")
})

app.listen(PORT, ()=>{
    console.log(`hh Auth service is running on port ${PORT}`)
})