const { Pool } = require('pg');

require('dotenv').config();

const connection = new Pool({
  connectionString: process.env.DEV_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = connection;
