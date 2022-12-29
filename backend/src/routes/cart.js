const express = require("express");
const router = express.Router();
const { db } = require("../../src/database");
const authorization = require("../authenticated/authenticated");
const authenticate = authorization.isAuthenticated;

router.get("/", authenticate, (req, res) => {
  db.all(
    "SELECT product.* FROM product JOIN users_cart ON users_cart.product_id = product.id WHERE users_cart.user_id= ?",
    [req.session.user.id],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(rows);
      }
    }
  );
});

router.post("/", authenticate, express.json(), async (req, res) => {
  let newCart = `INSERT INTO users_cart (user_id, product_id) VALUES (?,?)`;
  db.run(newCart, [req.session.user.id, req.body.product_id], (err) => {
    if (err) {
      throw err;
    }
    res.json({ message: "Success" });
  });
});

router.delete("/:product_id", (req, res) => {
  db.run(
    `DELETE FROM users_cart WHERE product_id= ?`,
    req.params.product_id,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.status(200).json({ deletedID: this.changes });
    }
  );
});

module.exports = router;
