import { NextRequest, NextResponse } from "next/server";
import { apiDelete } from "../../db";

// Handle DELETE requests
export async function DELETE(req, { params }) {
  const id = params.id;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const result = await apiDelete(id);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  }
}
