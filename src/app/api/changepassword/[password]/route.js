// pages/api/tags.js
import { NextResponse } from "next/server";
import { changePassword } from "../../db";

export async function GET(req, { params }) {
  try {
    const pass = params.password;

    console.log(pass);

    if (!pass) {
      return NextResponse.json(
        { error: "password is required" },
        { status: 400 }
      );
    }

    const result = await changePassword(pass);
    return NextResponse.json(`Admin Password has being changed to ss${pass}`);
  } catch (error) {
    console.error("Failed to change Password", error);
    return NextResponse.json(
      { error: "Failed to change password." },
      { status: 500 }
    );
  }
}
