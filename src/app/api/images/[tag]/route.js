import { NextResponse } from "next/server";
import { apiGet } from "../../db"; // Adjust the path to your database file

export async function GET(req, { params }) {
  const tag = params.tag;
  console.log(tag);

  try {
    const images = await apiGet(tag);
    return NextResponse.json(images);
  } catch (error) {
    console.error("Failed to fetch images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
