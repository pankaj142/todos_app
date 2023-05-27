import { Document } from "mongoose";

export default interface ITodo extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}