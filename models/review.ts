import mongoose, { Schema, Document, Types } from "mongoose";
import User, { UserDocument } from "./user";

export interface ReviewTypeOutside {
  id: string;
  score: number; // from 1 to 5
  text: string; 
  author: Types.ObjectId | UserDocument; // Reference ID
  date: Date;
}

export interface ReviewType {
  score: number; // from 1 to 5
  text: string; 
  author: Types.ObjectId | UserDocument; // Reference ID
  date: Date;
}

const reviewSchema = new mongoose.Schema({
  score: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Please provide a score from 1 to 5 for the review"],
  },
  text: {
    type: String,
    required: [true, "Please provide a text for the review"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export interface ReviewDocument extends ReviewType, Document {}

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema)
export default Review;
