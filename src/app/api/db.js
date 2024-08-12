import path from "path";
import sqlite3 from "sqlite3";

import { db } from "@vercel/postgres";

// DATABASE INITIALIZER//
// const dbPath = path.join(process.cwd(), "profile.db");
// export const db = new sqlite3.Database(
//   dbPath,
//   sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
//   (err) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log("Connected to the profile database.");
//     }
//   }
// );
// GET IMAGES FUNCTION FROM DB
export async function apiGet(tag) {
  const query =
    tag === "all"
      ? "SELECT * FROM images"
      : "SELECT * FROM images WHERE tagName = $1";

  // Determine the parameters to pass
  const params = tag === "all" ? [] : [tag];

  try {
    const { rows } = await db.query(query, params);
    return rows;
  } catch (err) {
    console.error("Error fetching images:", err.message);
    throw new Error(err.message);
  }
}

// DEL IMAGE FUNCTION FROM DB
export const apiDelete = async (id) => {
  const query = "DELETE FROM images WHERE id = $1";

  try {
    await db.query(query, [id]);
    return { deletedID: id };
  } catch (err) {
    console.error("Error deleting image:", err.message);
    throw new Error(err.message);
  }
};

// ADD IMAGES TO DB
export const apiPost = async (tag, imageUrl) => {
  const query =
    "INSERT INTO images (tagName, imageUrl) VALUES ($1, $2) RETURNING id";

  try {
    const { rows } = await db.query(query, [tag, imageUrl]);
    return { id: rows[0].id };
  } catch (err) {
    console.error("Error adding image:", err.message);
    throw new Error(err.message);
  }
};

// GET TAGS
export async function apiGetTags() {
  const query = "SELECT * FROM tags";

  try {
    const { rows } = await db.query(query);
    return rows;
  } catch (err) {
    console.error("Error fetching tags:", err.message);
    throw new Error(err.message);
  }
}

// CREATE TAGS
export const apiCreateTag = async (name) => {
  const query = "INSERT INTO tags (name) VALUES ($1) RETURNING id";

  try {
    const { rows } = await db.query(query, [name]);
    return { id: rows[0].id, name };
  } catch (err) {
    console.error("Error creating tag:", err.message);
    throw new Error(err.message);
  }
};

// GROUP TAGS
export const apiGetAllTagImages = async () => {
  const query = `
    SELECT tags.name AS tagName, images.imageUrl
    FROM tags
    JOIN images ON tags.name = images.tagName;
  `;

  try {
    const { rows } = await db.query(query);
    // Group images by tag name
    const result = rows.reduce((acc, row) => {
      if (!acc[row.tagName]) {
        acc[row.tagName] = [];
      }
      acc[row.tagName].push(row.imageUrl);
      return acc;
    }, {});

    return result;
  } catch (err) {
    console.error("Error fetching tags with images:", err.message);
    throw new Error(err.message);
  }
};

// CHANGE PASSWORD
export const changePassword = async (newPassword) => {
  const query = `
    UPDATE users
    SET password = $1
    WHERE username = $2
  `;

  try {
    const { rowCount } = await db.query(query, [newPassword, "admin"]);
    if (rowCount === 0) {
      throw new Error("User not found.");
    }
    return "Password updated successfully.";
  } catch (err) {
    console.error("Error updating password:", err.message);
    throw new Error("Failed to update password.");
  }
};

// CHECK LOGIN DETAILS
export const apiCheckLogin = async (username, password) => {
  const query = `
    SELECT * FROM users
    WHERE username = $1 AND password = $2
  `;

  try {
    const { rows } = await db.query(query, [username, password]);
    if (rows.length === 0) {
      throw new Error("Invalid username or password.");
    }
    return "Login successful.";
  } catch (err) {
    console.error("Error checking login details:", err.message);
    throw new Error("Failed to check login details.");
  }
};
