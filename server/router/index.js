const router = require('express').Router();
const { join } = require('path');
const { getPosts, signup } = require('../controllers')
router.get('/', (req, res) => {
  res.send('Hello world aaaaaaa');
});

// router.get('/signup', (req, res) => {
//   res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'signup.html'));
// });

router.route('/signup')
  .get(
    (req, res) => {
      res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'signup.html'));
    })
  .post(signup)

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'login.html'));
});

router.get('/posts', getPosts)

module.exports = router;
