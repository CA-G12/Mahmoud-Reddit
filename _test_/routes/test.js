/* eslint-disable no-undef */
const supertest = require('supertest');
const router = require('../../server/router');

test('Home page routing test', (done) => {
  supertest(router).get('/')
    .expect(200)
    .end(done());
});

test('signup routing test', (done) => {
  supertest(router).get('/signup')
    .expect(200)
    .expect('Content-Type', /html/)
    .end(done());
});

test('NOT-FOUND page routing test', (done) => {
  supertest(router).get('/blablabla')
    .expect(404)
    .expect('Content-Type', /html/)
    .end(done());
});
