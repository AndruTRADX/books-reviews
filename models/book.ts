import mongoose from "mongoose";
import { Schema, Document, Types } from "mongoose";
import { ReviewDocument } from "./review";

export interface BookType {
  title: string;
  author: string;
  category: string;
  summary: string;
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for the book"],
  },
  author: {
    type: String,
    required: [true, "Please provide the author of the book"],
  },
  category: {
    type: String,
    required: [true, "Please provide the category of the book"],
  },
  summary: {
    type: String,
    required: [true, "Please provide a summary of the book"],
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

export interface BookDocument extends BookType, Document {
  reviews: Types.DocumentArray<ReviewDocument>;
}

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema)
export default Book;