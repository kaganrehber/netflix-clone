import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and Password are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    if (password !== user.password) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    cookies().set("key", JSON.stringify(user));

    return NextResponse.json(
      { data: user, message: "Login successful" },

      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred during login" },
      { status: 500 }
    );
  }
};
