import { createReview } from "@/actions/review.actions";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await createReview(body);

    return new NextResponse("Made correctly");
  } catch (error) {
    console.log(error);
  }
}
