const database = require('../database');
const { userModel } = require('../models/index');
const findUserWithId = (id) => {
  return database.users.findIndex( user => user.id === id );
};

const findUserWithEmail = (email) => {
  return database.users.findIndex( user => user.email === email );
};

const getUserById = (id) => {
  return database.users.filter( user => user.id === id ).map( user => userModel.getUser(user.fname, user.lname));
};


const getAllUsers = () => {
  return database.users.map( user => userModel.getUser(user.fname, user.lname) );
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

module.exports = { findUserWithId, findUserWithEmail, saveUserToDB, getUserById, getAllUsers };