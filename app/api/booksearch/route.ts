import { searchBooks } from "@/actions/book.actions";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const books = await searchBooks(data.query);

    return new Response(JSON.stringify(books), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Failed to search for books:", error);
    return new Response("Failed to search for books", { status: 500 });
  }
}
