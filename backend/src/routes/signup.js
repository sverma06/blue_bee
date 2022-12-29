const { db } = require("../../src/database");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post(
  "/",
  express.urlencoded({ extended: false }),
  async function (req, res) {
    console.log(req.body);
    const [password, confirmPassword] = req.body.password;
    if (password != confirmPassword) {
      res.status(400).send();
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      let newUser = `INSERT INTO user(username, email, password) VALUES (?,?,?)`;
      db.run(
        newUser,
        [req.body.username, req.body.email, hashedPassword],
        (err) => {
          if (err) {
            throw err;
          }
          req.session.user = { username: row.username, email: row.email };
          res.redirect("/home");
        }
      );
    } catch (e) {
      console.log(e);
      res.redirect("/signup");
    }
  }
);

module.exports = router;