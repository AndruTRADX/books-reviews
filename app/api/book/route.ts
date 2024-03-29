import { createBook } from "@/actions/book.actions";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const res = await createBook(body);

    return new NextResponse("Made correctly");
  } catch (error) {
    console.log(error);
  }
}
