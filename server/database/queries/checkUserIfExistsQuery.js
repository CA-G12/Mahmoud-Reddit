const connection = require('../config/connection');

const checkUserIfExistsQuery = (email) => connection.query('SELECT * FROM users WHERE users.email = $1', [email]);

module.exports = checkUserIfExistsQuery;
