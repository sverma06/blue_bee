const sqlite3 = require("sqlite3").verbose();
const express = require("express");
var session = require('express-session')
const bcrypt = require("bcrypt");

const app = express();

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

const userRouter = require("./routes/users");

app.use(express.static("public"));

app.use("/users", userRouter);

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

// // get form for login
// app.get("/login", function (req, res) {
//   res.send(
//     '<form action="/login" method="post">' +
//       'Username: <input name="username"><br>' +
//       'Password: <input name="password" type="password"><br>' +
//       '<input type="submit" text="Login"></form>'
//   );
// });

// // get form for signup
// app.get("/signup", function (req, res) {
//   res.send(
//     '<form action="/signup" method="post">' +
//       'Username: <input name="username"><br>' +
//       'Email: <input name="email" type="email"><br>' +
//       'Password: <input name="password" type="password"><br>' +
//       'Password again: <input name="password" type="password"><br>' +
//       '<input type="submit" text="Signup"></form>'
//   );
// });

// post hashed password for signup
app.post("/signup", express.urlencoded({ extended: false }),
  async function (req, res) {
    console.log(req.body)
    const [password, confirmPassword] = req.body.password
    if(password != confirmPassword) {
      res.status(400).send()
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      let newUser = `INSERT INTO user(username, email, password) VALUES (?,?,?)`;
      db.run(newUser, [req.body.username, req.body.email, hashedPassword], (err) => {
        if(err) {
          throw err;
        }
        req.session.user = { username: req.body.username };
        res.redirect("/");
      });
    } catch (e) {
      console.log(e);
      res.redirect("/signup");
    }
  }
);

// post for login
app.post("/login", express.urlencoded({ extended: false }),
  async function (req, res) {
db.get( "SELECT * FROM user WHERE username = ?", req.body.username,
  (err, row) => {
    if (err) throw err;
    try {
      bcrypt.compare(req.body.password, row.password, (err, same) => {
        if (err) throw err;
        console.log(req.body.password, row.password);
        if (same) {
          res.send("welcome!");
          req.session.user = { username: row.username };
        } else {
          res.send("incorrect password/username");
        }
      });
    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
});
});

// logout
app.get("/logout", (req,res) => {
  req.session.user = null;
  res.status(200).send();
})

//Error handling
app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send('Something is broken');
});

app.listen(3001, () => console.log('Running on 3001'));
