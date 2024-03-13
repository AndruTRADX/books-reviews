import Review, { ReviewType } from "@/models/review";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { getCurrentUser } from "./getCurrentUser";
import Book from "@/models/book";

export async function createReview({
  score,
  author,
  text,
  bookID,
}: {
  score: string;
  author: string;
  text: string;
  bookID: string;
}): Promise<ReviewType | null> {
  try {
    await connectToDB();

    const currentUser = await getCurrentUser();

    if (!currentUser || !currentUser.user || !currentUser.user.email) {
      throw new Error("No user or user email");
    }

    const user = await User.findOne({ email: currentUser.user.email });

    if (!user) {
      throw new Error("User not found");
    }

    const createdReview = await Review.create({ score: parseInt(score), author: user._id, text });

    await User.findByIdAndUpdate(user._id, {
      $push: { reviews: createdReview._id },
    });

    await Book.findByIdAndUpdate(bookID, {
      $push: { reviews: createdReview._id },
    });

    return createdReview;
  } catch (error) {
    return null;
  }
}

export async function editReview(id: string, { score, text }: ReviewType): Promise<void> {
  try {
    await connectToDB();

    await Review.findByIdAndUpdate(id, { score, text });
  } catch (error) {
    throw new Error("Failed to update review");
  }
}

export async function deleteReview(id: string): Promise<void> {
  try {
    await connectToDB();

    await Review.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete review");
  }
}
