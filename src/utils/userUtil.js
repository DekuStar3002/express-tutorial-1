const database = require('../database');
const { userModel } = require('../models/index');
const findUserWithId = (id) => {
  return database.users.findIndex( user => user.id === id );
};

const findUserWithEmail = (email) => {
  return database.users.findIndex( user => user.email === email );
};

const getUserById = (id) => {
  return database.users.reduce( user => user.id === id );
};

const saveUserToDB = (fname, lname, email, password) => {
  const userBody = userModel.saveUser(
    database.id,
    fname,
    lname,
    email, 
    password
  );
  database.id = (database.id + 1);
  database.users = [ ...database.users, userBody ];
  return userBody;
};

module.exports = { findUserWithId, findUserWithEmail, saveUserToDB, getUserById };