import { deleteReview } from "@/actions/review.actions";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    await deleteReview(body.id);

    return new NextResponse("Made correctly");
  } catch (error) {
    console.log(error);
  }
}
