const { Pool } = require('pg');

require('dotenv').config();

let DATABASE_URL = '';

if (process.env.NODE_ENV === 'production') {
  DATABASE_URL = process.env.DATABASE_URL;
} else if (process.env.NODE_ENV === 'development') {
  DATABASE_URL = process.env.DEV_DATABASE_URL;
} else if (process.env.NODE_ENV === 'test') {
  DATABASE_URL = process.env.TEST_DATABASE_URL;
} else {
  throw new Error('No Database URL!!!');
}

const connection = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = connection;
