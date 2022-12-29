const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const app = express();

const db = new sqlite3.Database("./platform.db");

const mainSchema = () => {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS user (
        user_id INTEGER PRIMARY KEY,
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
        quantity INTEGER DEFAULT 0,
        brand TEXT,
        color TEXT,
        material TEXT,
        weight REAL,
        age_range TEXT,
        dimensions REAL
    )`
  ).run();
};

mainSchema();

app.use(express.static("public"));

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3001);
