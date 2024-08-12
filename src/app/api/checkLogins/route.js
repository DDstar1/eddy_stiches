import { NextRequest, NextResponse } from "next/server";
import { apiCheckLogin } from "../db"; // Import the login check function

export async function POST(req) {
  try {
    // Parse the JSON body to extract the username and password
    const { username, password } = await req.json();

    // Ensure both username and password are provided
    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    // Call the apiCheckLogin function to validate credentials
    const isValid = await apiCheckLogin(username, password);

    // Return success response if valid, otherwise return an error
    if (isValid) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error checking login:", error);
    return NextResponse.json(
      { error: "Incorrect Username or Password" },
      { status: 500 }
    );
  }
}
