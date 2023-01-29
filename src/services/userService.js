const { userUtil } = require('../utils/index');
const addUser = (fname, lname, email, password) => {
  try {
    if(userUtil.findUserWithEmail(email) !== -1) 
      return {
        status: false,
        statusCode: 400,
        message: 'user already present',
        data: [ userUtil.getUserById(userUtil.findUserWithEmail(email)) ],
      };
    const user = userUtil.saveUserToDB(fname, lname, email, password);
    return {
      status: true,
      statusCode: 201,
      message: 'user created',
      data: [ user ],
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500,
      message: 'unable to create user',
      data: error.message,
    };
  }
};

module.exports = { addUser };