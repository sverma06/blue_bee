const express = require("express");
const router = express.Router();

router.use('/login', require('./login'));
router.use('/signup', require('./signup'));
router.use('/currentUser', require('./currentUser'));
router.use('/logout', require('./logout'));
router.use('/products', require('./products'));
router.use('/cart', require('./cart'));

module.exports = router;