import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { log } from "../utils/logger";

dotenv.config();

const {
    MONGODB_USER,
    MONGODB_PASSWORD
  } = process.env;

  
const connectDB = async ()=> {
    await mongoose
        .connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.9dxmq5t.mongodb.net/?retryWrites=true&w=majority`)
        .then(()=>{
            log.info('MongoDb Connected');   
        })
        .catch((error)=>{
            log.info('Unable to connect MongoDb');
            log.error(error); 
            process.exit(1); 
        })
}

export default connectDB;
