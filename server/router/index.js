const router = require('express').Router();
const { join } = require('path');
const {
  getPosts,
  signup,
  logIn,
  logout,
  addPost,
  getUserName,
} = require('../controllers');

const verifyToken = require('../middleware/verify');

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

router.get('/homePage', verifyToken, (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', 'public', 'pages', 'homePage.html'));
});

router.post('/users/post', verifyToken, addPost);
router.get('/users/user-name', verifyToken, getUserName);
router.get('/logout', logout);

module.exports = router;
