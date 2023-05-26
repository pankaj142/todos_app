import mongoose, { Schema } from "mongoose";
import IUser from "../interfaces/user";

const UserSchema: Schema = new Schema({
  firstName: { type: String },
  lastName: { type:String},
  email: { type : String, unique:true},
  password: { type: String}
});

export default mongoose.model<IUser>('User', UserSchema);
