const connection = require('../config/connection');

const removePostLikeQuery = ({ likeId }) => connection.query('DELETE FROM likes WHERE id = $1', [likeId]);

module.exports = removePostLikeQuery;
