const { Pool } = require('pg');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

const connection = new Pool({
  connectionString: process.env.DEV_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = connection;
