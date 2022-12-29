const express = require("express");
const router = express.Router();
const { db } = require("../../src/database");

router.get("/", (req, res) => {
  db.all("SELECT * FROM product", (err, rows) => {
    if (err) throw err;
    res.status(200).json(rows);
  });
});

router.get("/:id", (req, res) => {
  const fetchId = req.params.id;
  db.get("SELECT * FROM product WHERE id = ?", fetchId, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(rows);
    }
  });
  console.log("Product id", fetchId);
});

module.exports = router;
