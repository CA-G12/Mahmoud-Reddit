const connection = require('../config/connection');

const addPostLikeQuery = ({ userId, postId }) => connection.query('INSERT INTO likes (post_id, user_id) VALUES($1, $2)', [postId, userId]);

module.exports = addPostLikeQuery;
