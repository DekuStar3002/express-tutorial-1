const saveUser = (id, fname, lname, email, password) => {
  return {
    id: id,
    fname: fname,
    lname: lname, 
    email: email,
    password: password,
    isDeleted: false,
  };
};

const getUser = (fname, lname) => {
  return {
    fname: fname,
    lname: lname,
  };
};

module.exports = { saveUser, getUser };