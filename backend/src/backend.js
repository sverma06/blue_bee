// import DB from "sqlite3";

const express = require("express")
const app = express()

const sqlite3 = require("sqlite3").verbose();
// let sql;

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
})

const mainSchema = () => {
    db.prepare(
       `CREATE TABLE IF NOT EXISTS mainTable (
        id INTEGER PRIMARY KEY,
        product TEXT NOT NULL,
        price INTEGER DEFAULT 0,
        quantity INTEGER DEFAULT 0
    )`
    ).run();
}

mainSchema();

app.use(express.static("public"))

const userRouter = require('./routes/users')

app.use("/users", userRouter)

app.listen(3001)



