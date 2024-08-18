import { NextResponse } from "next/server";
import { addUser, findUserByEmail } from "../../../../lib/users";
export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and Password is required" },
        { status: 400 }
      );
    }

    const existingUser = findUserByEmail(email);

    if (existingUser) {
      return NextResponse.json(
        { message: "User Already Exists" },
        { status: 400 }
      );
    }
    addUser({ email, password });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
};
