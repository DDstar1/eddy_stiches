import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { apiPost } from "../db"; // Adjust import based on your project structure

// const UPLOAD_DIR = path.resolve(process.cwd(), "public/uploads");

export const POST = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const filename = searchParams.get("filename");
    const tag = searchParams.get("tag");

    console.log(tag);

    // const file = formData.get("image");
    // const tag = formData.get("tag");
    // console.log(searchParams);

    const blob = await put(filename, req.body, {
      access: "public",
    });
    console.log("avdds");
    const blob_url = blob.url;
    // Save the file info to the database
    await apiPost(tag, blob_url);

    return NextResponse.json({ success: true, url: blob_url });
  } catch (error) {
    console.error("Error handling file upload:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
};

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
