const express = require("express");
var session = require("express-session");
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

//Error handling
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send("Something is broken");
});

app.use(routes);

app.listen(3001, () => console.log("Running on 3001"));
