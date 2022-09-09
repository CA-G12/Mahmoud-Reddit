const getPosts = require('./getPosts');
const signup = require('./signup');
const logIn = require('./login');
const logout = require('./logout');
const addPost = require('./addPost');
const getUserName = require('./getUserName');
const updatePostLike = require('./updatePostLike');

module.exports = {
  getPosts,
  signup,
  logIn,
  logout,
  addPost,
  getUserName,
  updatePostLike,
};
