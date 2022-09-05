const connection = require('../config/connection');

const addUserQuery = (username, email, password, about,  imgLink) => {
    return connection.query('INSERT INTO users (username, email, about, password, image) VALUES($1, $2, $3, $4, $5)', [username, email, about, password, imgLink])
};

module.exports = addUserQuery;