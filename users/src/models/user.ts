import mongoose, { Schema } from "mongoose";
import IUser from "../interfaces/user";

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: [true, "Please provide firstName"] },
  lastName: { type: String },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide email"],
  },
  password: { type: String, required: [true, "Please provide password"] },
},
{
  timestamps : true
});

export default mongoose.model<IUser>("User", UserSchema);
