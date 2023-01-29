const extractBodyContentMiddleware = (req, res, next) => {
  req.fname = req.body.fname;
  req.lname = req.body.lname;
  req.email = req.body.email;
  req.password = req.body.password;
  next();
};

module.exports = { extractBodyContentMiddleware };