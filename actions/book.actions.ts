import Book, { BookType } from "@/models/book";
import { connectToDB } from "@/utils/database";

export async function getAllBooks(pageNumber: number = 1, pageSize: number = 20) {
  try {
    await connectToDB();

    const skipAmount = (pageNumber - 1) * pageSize;

    const books = await Book.find({ parentId: { $in: [null, undefined] } })
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(pageSize)
      .exec();

    const totalBooksCount = await Book.countDocuments({
      parentId: { $in: [null, undefined] },
    });

    const isNext = totalBooksCount > skipAmount + books.length;

    return { books, isNext };
  } catch (error) {
    throw new Error("Failed to get books");
  }
}

export async function getBook(id: string) {
  try {
    await connectToDB();

    const book = await Book.findById(id).populate("reviews");

    if (!book) {
      throw new Error("Book not found");
    }

    return book;
  } catch (error) {
    throw new Error("Failed to find book");
  }
}

export async function createBook({
  title,
  author,
  category,
  summary,
}: BookType) {
  try {
    await connectToDB();
    const newBook = await Book.create({ title, author, category, summary });
    return newBook;
  } catch (error) {
    throw new Error("Failed to create book");
  }
}