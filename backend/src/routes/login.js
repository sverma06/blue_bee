const express = require("express");
const router = express.Router();
const { db } = require("../../src/database");
const bcrypt = require("bcrypt");

router.post(
  '/',
  express.urlencoded({ extended: false }),
  async function (req, res) {
    console.log(req.body);
    db.get(
      "SELECT * FROM user WHERE username = ?",
      req.body.username,
      (err, row) => {
        if (err) throw err;
        try {
          bcrypt.compare(req.body.password, row.password, (err, same) => {
            if (err) throw err;
            console.log(req.body.password, row.password);
            if (same) {
              req.session.user = {
                id: row.id,
                username: row.username,
                email: row.email,
              };
              res.redirect("/home");
            } else {
              res.send("incorrect password/username");
            }
          });
        } catch (e) {
          console.log(e);
          res.status(500).send("Logged In");
        }
      }
    );
  }
);

module.exports = router;
