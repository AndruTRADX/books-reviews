import mongoose, { Schema, Document, Types } from "mongoose";
import Review, { ReviewDocument } from "./review";

export interface UserDocument extends Document {
  name: string;
  username: string;
  password: string;
  image: string;
  email: string;
  role: "user" | "moderator";
  reviews: Types.DocumentArray<ReviewDocument>;
}

const userSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: [true, "please write your name"],
  },
  username: {
    type: String,
    required: [true, "please provide your username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "please provide a valid your email"],
    unique: true,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "moderator"],
    default: "user",
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review',
  }],
});

const User = mongoose.models.User || mongoose.model<UserDocument>("User", userSchema);
export default User;
