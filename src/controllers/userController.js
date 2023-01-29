const { userService } = require('../services/index');
const saveUser = (req, res) => {
  const fname = req.fname;
  const lname = req.lname;
  const email = req.email;
  const password = req.password;
  const response = userService.addUser(fname, lname, email, password);
  if(response.statusCode === 500)
    res.status(500).json({
      status: response.status,
      message: response.message,
      error: response.data,
    });
  res.status(response.statusCode).json({
    status: response.status,
    message: response.message,
    data: response.data,
  });
};

module.exports = { saveUser };