import User from "@/models/user";
import Review from "@/models/review";
import { connectToDB } from "@/utils/database";

export async function findUser(email: string) {
  try {
    await connectToDB();

    const user = await User.findOne({ email })
      .populate({
        path: "reviews",
        model: Review,
        options: {
          sort: { date: -1 }, // Ordenar por date de forma descendente (más reciente a más antigua)
        },
      })
      .exec();

    if (!user) {
      console.log("Failed to get user");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get user");
  }
}
