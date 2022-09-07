const connection = require('../config/connection');

const getPostsQuery = () => connection.query('SELECT users.username ,posts.* FROM posts INNER JOIN users ON posts.created_by = users.id');

module.exports = getPostsQuery;
