import migrate from "../migrations";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await migrate(req, res);
    return NextResponse.json({ message: "Migration successful" });
  } catch (error) {
    return NextResponse.json({
      error: "Migration failed",
      details: error.message,
    });
  }
}
