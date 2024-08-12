// pages/api/tags.js
import { NextResponse } from "next/server";
import { apiCreateTag } from "../../db";

export async function POST(req, { params }) {
  try {
    const name = params.name;

    if (!name) {
      return NextResponse.json(
        { error: "Tag name is required" },
        { status: 400 }
      );
    }

    const result = await apiCreateTag(name);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to create tag:", error);
    return NextResponse.json(
      { error: "Failed to create tag" },
      { status: 500 }
    );
  }
}
