const express = require("express");
const router = express.Router();
// var session = require("express-session");

// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

router.get("/", (req, res) => {
  res.status(200).json({
    username: req.session.user.username,
    email: req.session.user.email,
    createdDate: req.session.user.create_at,
  });
});

module.exports = router;
