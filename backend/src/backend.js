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


// post hashed password for signup
app.post(
  "/signup", 
  express.urlencoded({ extended: false }),
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
        res.redirect("/home");
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
    console.log(req.body);
db.get( "SELECT * FROM user WHERE username = ?", req.body.username,
  (err, row) => {
    if (err) throw err;
    try {
      bcrypt.compare(req.body.password, row.password, (err, same) => {
        if (err) throw err;
        console.log(req.body.password, row.password);
        if (same) {
          req.session.user = { username: row.username };
          res.send("welcome!");
          // res.redirect("/home");
        } else {
          res.send("incorrect password/username");
        }
      });
    } catch (e) {
      console.log(e);
      res.status(500).send("Logged In");
    }
});
});

// function isAuthenticated (req, res, next) {
//   console.log(req.session.user)
//   if (req.session.user) 
//   return next();
//   else res.status(401).send();
// }

// post for creating product
app.post(
  "/addProducts",
  // isAuthenticated,
  express.json(),
  async function (req, res) {
    console.log(req.body);
    try {
      let newProduct = `INSERT INTO product(name, price, quantity, brand, color, material, weight, age_range, dimensions) VALUES (?,?,?,?,?,?,?,?,?)`;
      db.run(
        newProduct,
        [
          req.body.name,
          req.body.price,
          req.body.quantity,
          req.body.brand,
          req.body.color,
          req.body.material,
          req.body.weight,
          req.body.dimensions,
          req.body.age_range,
        ],
        (err) => {
          if (err) {
            throw err;
          }
          req.session.products = { name: req.body.name };
          res.json({ message: "Success"});
          
        }
      );
    } catch (e) {
      console.log(e);
      res.json({ message: "Error"});
    }
  }
);

// get product
app.get("/products", (req,res) => {
  db.get("SELECT * FROM product", (err, rows) => {
    if (err) throw err
  res.status(200).json( rows )
})
});

app.get("/currentUser", (req, res) => {
  res.status(200).json({username: req.session.user.username, createdDate: req.session.user.create_at})
})

// logout
app.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        res.send('Logout successful')
      }
    });
  } else {
    res.end()
  }
})

//Error handling
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).send('Something is broken');
});

app.listen(3001, () => console.log('Running on 3001'));
