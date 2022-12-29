const express = require("express");
const router = express.Router();

router.use('/login', require('./login'));
router.use('/signup', require('./signup'));
router.use('/currentUser', require('./currentUser'));
router.use('/logout', require('./logout'));
router.use('/addProducts', require('./addProducts'));
router.use('/products', require('./productsList'));
router.use('/cart', require('./cart'));

module.exports = router;