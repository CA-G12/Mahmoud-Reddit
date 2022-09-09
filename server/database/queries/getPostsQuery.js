const connection = require('../config/connection');

// eslint-disable-next-line quotes
const getPostsQuery = () => connection.query(`SELECT users.username ,posts.*, array_agg(jsonb_build_object('userId', likes.user_id, 'id', likes.id )) AS post_likes FROM posts INNER JOIN users ON posts.created_by = users.id LEFT JOIN likes ON likes.post_id = posts.id GROUP BY posts.id, users.username`);

module.exports = getPostsQuery;
