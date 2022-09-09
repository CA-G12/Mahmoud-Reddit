/* eslint-disable no-undef */
require('dotenv').config();
const connection = require('../../server/database/config/connection');
const dbBuild = require('../../server/database/config/build');
const {
  getPostsQuery,
  addPostQuery,
  addUserQuery,
  checkUserIfExistsQuery,
} = require('../../server/database/queries');

beforeAll(() => dbBuild());

test('test get all posts query', () => {
  getPostsQuery()
    .then((data) => {
      expect(data.rows[0].username).toBe('test1');
    });
});

test('test add posts query', () => {
  addPostQuery({ content: 'dummy content' })
    .then((data) => {
      expect(data.rows[0]).toMatchObject({ content: 'dummy content' });
    });
});

test('test add user query', () => {
  addUserQuery({
    username: 'mahmoud',
    email: 'mahmoud@gmail.com',
    password: 'password',
    about: 'doing test',
  })
    .then((data) => {
      expect(data.rows[0]).toMatchObject({
        username: 'mahmoud',
        email: 'mahmoud@gmail.com',
        password: 'password',
        about: 'doing test',
      });
    });
});

test('test check user if exists query', () => {
  checkUserIfExistsQuery({ email: 'mahmoud@gmail.com' })
    .then((data) => {
      expect(data.rows[0]).toMatchObject({ email: 'mahmoud@gmail.com' });
    });
});

afterAll(() => connection.end());
