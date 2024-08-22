import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async () => {
  try {
    cookies().delete("key");

    return NextResponse.json({ message: "Logout successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred during logout" },
      { status: 500 }
    );
  }
};
