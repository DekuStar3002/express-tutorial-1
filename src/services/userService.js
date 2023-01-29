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

const getAllUsers = () => {
  try {
    const userData = userUtil.getAllUsers();
    return {
      status: true,
      statusCode: 200,
      message: 'fetched all users data',
      data: userData,
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500,
      message: 'unable to get users data',
      data: error.message,
    };
  }
};

const getUserById = (id) => {
  try {
    if(userUtil.findUserWithId(id) === -1)
      return {
        status: false,
        statusCode: 404,
        message: `unable to get user with id ${id}`,
        data: []
      };
    const user = userUtil.getUserById(id);
    return {
      status: false,
      statusCode: 200,
      message: `found user with id ${id}`,
      data: user
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500,
      message: 'unable to get user data',
      data: error.message,
    };
  }
};

module.exports = { addUser, getAllUsers, getUserById };