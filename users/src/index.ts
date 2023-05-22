
import express from "express";
import { json } from "express";

const app = express();
app.use(json());

const PORT = 3000;

app.get("/health", (req, res)=>{
    res.sendStatus(200)
})

app.get("/api/users/currentuser", (req, res)=>{
    res.send("Hello there...")
})

app.listen(3000, ()=>{
    console.log(`hh Auth service is running on port ${PORT}`)
})