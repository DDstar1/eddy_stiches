// Import the Vercel Postgres client
import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

// Migration function to create tables
export default async function migrate(req, res) {
  const client = await db.connect();

  try {
    // Create tags table
    await client.query(`
      CREATE TABLE IF NOT EXISTS tags (
        id SERIAL PRIMARY KEY,
        name TEXT UNIQUE NOT NULL
      );
    `);

    console.log("Tags table created successfully.");

    // Create images table to reference tags
    await client.query(`
      CREATE TABLE IF NOT EXISTS images (
        id SERIAL PRIMARY KEY,
        tagName TEXT,
        imageUrl TEXT NOT NULL,
        FOREIGN KEY (tagName) REFERENCES tags (name)
      );
    `);

    console.log("Images table created successfully.");

    // Create users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      );
    `);

    console.log("Users table created successfully.");

    // Insert the admin user
    await client.query(`
      INSERT INTO users (username, password)
      VALUES ('admin', '123456')
      ON CONFLICT (username) DO NOTHING;
    `);

    console.log("Admin user inserted successfully.");
  } catch (err) {
    console.error("Error during migration:", err.message);
  } finally {
    client.release();
  }

  NextResponse.json({ message: "Migration completed" });
}
