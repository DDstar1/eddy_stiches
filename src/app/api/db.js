import path from "path";
import sqlite3 from "sqlite3";

// DATABASE INITIALIZER//
const dbPath = path.join(process.cwd(), "profile.db");
export const db = new sqlite3.Database(
  dbPath,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the profile database.");
    }
  }
);

// GET IMAGES FUNCTION FROM DB
export function apiGet(tag) {
  return new Promise((resolve, reject) => {
    const query =
      tag === "all"
        ? "SELECT * FROM images"
        : "SELECT * FROM images WHERE tagName = ?";

    // Determine the parameters to pass
    const params = tag === "all" ? [] : [tag];

    db.all(query, params, (err, rows) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(rows);
    });
  });
}

// DEL IMAGE FUNCTION FROM DB
export const apiDelete = async (id) => {
  const query = "DELETE FROM images WHERE id = ?";
  return await new Promise((resolve, reject) => {
    db.run(query, [id], function (err) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve({ deletedID: id });
      }
    });
  });
};

// ADD IMAGES TO DB
export const apiPost = async (tag, imageUrl) => {
  const query = "INSERT INTO images (tagName, imageUrl) VALUES (?, ?)";
  return await new Promise((resolve, reject) => {
    db.run(query, [tag, imageUrl], function (err) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve({ id: this.lastID });
      }
    });
  });
};

// GET TAGS
export function apiGetTags() {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM tags";
    db.all(query, [], (err, rows) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(rows);
    });
  });
}

// CREATE TAGS
export const apiCreateTag = async (name) => {
  const query = "INSERT INTO tags (name) VALUES (?)";
  return await new Promise((resolve, reject) => {
    db.run(query, [name], function (err) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve({ id: this.lastID, name });
      }
    });
  });
};

// GROUP TAGS
export const apiGetAllTagImages = async () => {
  const query = `
    SELECT tags.name AS tagName, images.imageUrl
    FROM tags
    JOIN images ON tags.name = images.tagName;
  `;

  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject("Error fetching tags with images: " + err.message);
      } else {
        // Group images by tag name
        const result = rows.reduce((acc, row) => {
          if (!acc[row.tagName]) {
            acc[row.tagName] = [];
          }
          acc[row.tagName].push(row.imageUrl);
          return acc;
        }, {});

        resolve(result);
      }
    });
  });
};

// CHANGE PASSWORD
export const changePassword = (newPassword) => {
  return new Promise((resolve, reject) => {
    db.run(
      `
        UPDATE users
        SET password = ?
        WHERE username = ?
      `,
      [newPassword, "admin"],
      function (err) {
        if (err) {
          console.error("Error updating password:", err.message);
          reject("Failed to update password.");
        } else if (this.changes === 0) {
          reject("User not found.");
        } else {
          resolve("Password updated successfully.");
        }
      }
    );
  });
};

// CHECK LOGIN DETAILS
export const apiCheckLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    db.get(
      `
        SELECT * FROM users
        WHERE username = ? AND password = ?
      `,
      [username, password],
      (err, row) => {
        if (err) {
          console.error("Error checking login details:", err.message);
          reject("Failed to check login details.");
        } else if (!row) {
          reject("Invalid username or password.");
        } else {
          resolve("Login successful.");
        }
      }
    );
  });
};
