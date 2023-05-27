import mongoose, { Schema } from "mongoose";
import ITodo from "../interfaces/todo";

const TodoSchema: Schema = new Schema({
  text: {
    type: String,
    required: [true, "Please add todo"],
  },
  completed: { type: Boolean, required: true, default: false },
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, "You are not logged in"],
  },
},
{
  timestamps : true
});

export default mongoose.model<ITodo>("Todo", TodoSchema);
