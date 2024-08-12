import { NextResponse } from "next/server";
import { apiGetAllTagImages } from "../db"; // Adjust the path to your database file

export async function GET(req) {
  try {
    const groups = await apiGetAllTagImages();

    return NextResponse.json(groups);
  } catch (error) {
    console.error("Failed to fetch images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
