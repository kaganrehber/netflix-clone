import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const secretKey = "gehenna";

export const GET = async (req: Request) => {
  try {

    const cookieHeaders = req.headers.get("cookie");
    const authToken = req.headers
      .get("cookie")
      ?.split("; ")
      .find((c) => c.startsWith("auth-token="))
      ?.split("=")[1];

    if (!authToken) {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 401 }
      );
    }

    const decodedToken = jwt.verify(authToken, "");

    const user = { id: decodedToken., name: "User's name" };
  } catch (error) {}
};
