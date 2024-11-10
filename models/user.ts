import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  userName: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    query: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const user = mongoose.model<User>("User", userSchema);
