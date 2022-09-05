const connection = require('../config/connection')

const getPostsQuery =()=>{

    return connection.query('select * from posts')
};

module.exports = getPostsQuery;