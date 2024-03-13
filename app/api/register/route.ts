import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import bcrypt from "bcrypt";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectToDB();

  try {
    const { name, username, email, password } = await req.json();
    const ifUserExists = await User.findOne({ email });

    if (ifUserExists) {
      return NextResponse.json({ warning: "User already exists", status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    newUser.toJSON();
    delete newUser.password;

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      user: newUser,
    });
  } catch {
    return NextResponse.json({
      error: "Error when trying to register a user",
    });
  }
}
