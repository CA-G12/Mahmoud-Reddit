const { verify } = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.redirect('/login');
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else res.redirect('/login');
};

module.exports = verifyToken;
