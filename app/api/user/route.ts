import { getCurrentUser } from "@/actions/getCurrentUser";
import { findUser } from "@/actions/user.actions";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const user = await findUser(data);

    return new Response(JSON.stringify(user), {
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
