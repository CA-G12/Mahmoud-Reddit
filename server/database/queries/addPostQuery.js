const connection = require('../config/connection');

const addPostQuery = (content, image, createdBy) => connection.query('INSERT INTO posts (content, image, created_by) VALUES($1, $2, $3)', [content, image, createdBy]);

module.exports = addPostQuery;
