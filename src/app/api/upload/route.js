import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { apiPost } from "../db"; // Adjust import based on your project structure

const UPLOAD_DIR = path.resolve(process.cwd(), "public/uploads");

export const POST = async (req) => {
  try {
    // Get the form data
    const formData = await req.formData();
    const file = formData.get("image");

    console.log(file);
    console.log("hgchhchch");

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" });
    }

    // Generate a unique filename
    const filename = `${uuidv4()}-${file.name}`;
    const filePath = path.resolve(UPLOAD_DIR, filename);

    // Ensure the upload directory exists
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    // Convert the file to a buffer and save it
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    // Extract the tag from form data (you may need to adjust this based on your form structure)
    const tag = formData.get("tag");

    // Save the file info to the database
    await apiPost(tag, `/uploads/${filename}`);

    return NextResponse.json({ success: true, name: filename });
  } catch (error) {
    console.error("Error handling file upload:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
};
