import { db } from "./db";

// Migration function to create tables
export const migrate = () => {
  db.serialize(() => {
    // Create tags table
    db.run(
      `
        CREATE TABLE IF NOT EXISTS tags (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT UNIQUE NOT NULL
        );
      `,
      (err) => {
        if (err) {
          console.error("Error creating tags table:", err.message);
        } else {
          console.log("Tags table created successfully.");
        }
      }
    );

    // Create images table to reference tags
    db.run(
      `
        CREATE TABLE IF NOT EXISTS images (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          tagName TEXT,
          imageUrl TEXT NOT NULL,
          FOREIGN KEY (tagName) REFERENCES tags (name)
        );
      `,
      (err) => {
        if (err) {
          console.error("Error creating images table:", err.message);
        } else {
          console.log("Images table created successfully.");
        }
      }
    );

    // Create users table
    db.run(
      `
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL
        );
      `,
      (err) => {
        if (err) {
          console.error("Error creating users table:", err.message);
        } else {
          console.log("Users table created successfully.");
        }
      }
    );

    // Insert the admin user
    db.run(
      `
        INSERT OR IGNORE INTO users (username, password)
        VALUES ('admin', '123456');
      `,
      (err) => {
        if (err) {
          console.error("Error inserting admin user:", err.message);
        } else {
          console.log("Admin user inserted successfully.");
        }
      }
    );
  });
};

// Run the migration
migrate();
