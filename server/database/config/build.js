const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');

const sql = readFileSync(join(__dirname, 'init.sql')).toString();

connection
  .query(sql)
  .then(() => console.log('build created successfully!'))
  .catch((e) => console.error('failed to build', e.stack));

const dbBuild = () => {
  const sqlBuild = readFileSync(join(__dirname, 'init.sql')).toString();
  return connection.query(sqlBuild);
};

module.exports = dbBuild;
