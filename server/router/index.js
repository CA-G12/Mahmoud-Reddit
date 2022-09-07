const router = require('express').Router();
const { join } = require('path');
const jwt = require('jsonwebtoken');
const {
  getPosts, signup, logIn, logout,
} = require('../controllers');

router.get('/', (req, res) => {
  res.send('Hello world aaaaaaa');
});

router.route('/signup')
  .get(
    (req, res) => {
      res.status(200).sendFile(join(__dirname, '..', '..', 'public', 'pages', 'signup.html'));
    },
  )
  .post(signup);

router.route('/login')
  .get(
    (req, res) => {
      res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'login.html'));
    },
  )
  .post(logIn);

router.get('/posts', getPosts);

router.get('/homePage', (req, res, next) => {
  if (req.cookies.token) {
    jwt.verify(req.cookies.token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.clearCookie('token').redirect('/');
      } else {
        res.status(200).sendFile(join(__dirname, '..', '..', 'public', 'pages', 'homePage.html'));
      }
    });
  } else {
    console.log(req.cookies);
    res.redirect('/');
  }
});

router.get('/logout', logout);

module.exports = router;
