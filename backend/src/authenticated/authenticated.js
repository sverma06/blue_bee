function isAuthenticated(req, res, next) {
  console.log(req.session.user);
  if (req.session.user) return next();
  else res.status(401).send();
};

module.exports = { isAuthenticated }