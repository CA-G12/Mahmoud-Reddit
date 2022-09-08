const connection = require('../config/connection');

const addPostQuery = (content, image, createdBy, timestapm) => connection.query('INSERT INTO posts (content, image, created_by, timestapm) VALUES($1, $2, $3, $4)', [content, image, createdBy, timestapm]);

module.exports = addPostQuery;
