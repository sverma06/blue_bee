const express = require("express");
const router = express.Router();
const { db } = require("../../src/database");

function isAuthenticated (req, res, next) {
  console.log(req.session.user)
  if (req.session.user)
  return next();
  else res.status(401).send();
}

router.post(
  "/",
  isAuthenticated,
  express.json(),
  async function (req, res) {
    console.log(req.body);
    try {
      let newProduct = `INSERT INTO product(name, price, owner_id, quantity, brand, color, material, weight, age_range, dimensions) VALUES (?,?,?,?,?,?,?,?,?,?)`;
      db.run(
        newProduct,
        [
          req.body.name,
          req.body.price,
          req.session.user.id,
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
          res.json({ message: "Success" });
        }
      );
    } catch (e) {
      console.log(e);
      res.json({ message: "Error" });
    }
  }
);

module.exports = router;
