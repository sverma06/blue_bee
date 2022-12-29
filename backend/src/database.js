const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./platform.db");

// tables
const mainSchema = () => {
    db.prepare(
      `CREATE TABLE IF NOT EXISTS user (
          id INTEGER PRIMARY KEY,
          username TEXT NOT NULL,
          email TEXT NOT NULL,
          password TEXT DEFAULT 0,
          create_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
      )`
    ).run();
    db.prepare(
      `CREATE TABLE IF NOT EXISTS product (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          price REAL DEFAULT 0,
          owner_id INTEGER NOT NULL,
          quantity INTEGER DEFAULT 0,
          brand TEXT,
          color TEXT,
          material TEXT,
          weight REAL,
          age_range TEXT,
          dimensions REAL,
          FOREIGN KEY(owner_id) REFERENCES user(id)
      )`
    ).run();
    db.prepare(
      `CREATE TABLE IF NOT EXISTS users_cart (
        id INTEGER PRIMARY KEY,
        user_id INTEGER NOT NULL,
        product_id INTGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES user(id),
        FOREIGN KEY (product_id) REFERENCES product(id)
      )`
    ).run();
  };
  
  mainSchema();

module.exports = { db, mainSchema };
