import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const { email, name, password } = await req.json();
    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "Email and Password is required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User Already Exists" },
        { status: 400 }
      );
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

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
