import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log("vvvvvvvvvv", process.env.MONGODB_PASSWORD);
const {
    MONGODB_USER,
    MONGODB_PASSWORD
  } = process.env;

  
const connectDB = async ()=> {
    await mongoose
        .connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.9dxmq5t.mongodb.net/?retryWrites=true&w=majority`)
        .then(()=>{
            console.log('MongoDb Connected');   
        })
        .catch((error)=>{
            console.log('Unable to connect MongoDb');
            console.log(error); 
            process.exit(1); 
        })
}

export default connectDB;
