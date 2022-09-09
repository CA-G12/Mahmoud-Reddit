const getPostsQuery = require('./getPostsQuery');
const addUserQuery = require('./addUserQuery');
const checkUserIfExistsQuery = require('./checkUserIfExistsQuery');
const addPostQuery = require('./addPostQuery');
const removePostLikeQuery = require('./removePostLikeQuery');
const addPostLikeQuery = require('./addPostLikeQuery');

module.exports = {
  getPostsQuery,
  addUserQuery,
  checkUserIfExistsQuery,
  addPostQuery,
  removePostLikeQuery,
  addPostLikeQuery,
};
