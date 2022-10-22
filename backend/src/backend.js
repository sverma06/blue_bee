const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const app = express();

const db = new sqlite3.Database("./platform.db");

const mainSchema = () => {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS mainTable (
        id INTEGER PRIMARY KEY,
        product TEXT NOT NULL,
        price INTEGER DEFAULT 0,
        quantity INTEGER DEFAULT 0
    )`
  ).run();
};

mainSchema();

app.use(express.static("public"));

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3001);
