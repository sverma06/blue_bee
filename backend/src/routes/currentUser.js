const express = require("express");
const router = express.Router();
const authorization = require("../authenticated/authenticated");
const authenticate = authorization.isAuthenticated;

router.get("/", authenticate, (req, res) => {
  res.status(200).json({
    username: req.session.user.username,
    email: req.session.user.email,
    createdDate: req.session.user.create_at,
  });
});

module.exports = router;
