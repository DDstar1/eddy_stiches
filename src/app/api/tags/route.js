import { NextResponse } from "next/server";
import { apiGetTags } from "../db";

export async function GET(req) {
  try {
    const images = await apiGetTags();
    return NextResponse.json(images);
  } catch (error) {
    console.error("Failed to fetch images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
