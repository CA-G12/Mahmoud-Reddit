const supertest = require('supertest');
const router = require('../../server/router');

// eslint-disable-next-line no-undef
test('Home page routing test', (done) => {
  supertest(router).get('/')
    .expect(200)
    .end(done());
});

// eslint-disable-next-line no-undef
test('signup routing test', (done) => {
  supertest(router).get('/signup')
    .expect(200)
    .expect('Content-Type', /html/)
    .end(done());
});

// eslint-disable-next-line no-undef
test('NOT-FOUND page routing test', (done) => {
  supertest(router).get('/blablabla')
    .expect(404)
    .expect('Content-Type', /html/)
    .end(done());
});
