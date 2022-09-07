const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { checkUserIfExistsQuery } = require('../database/queries');
const logInSchema = require('../utils/validation/loginValidation');

const logIn = (req, res) => {
  const { email, password } = req.body;

  logInSchema.validateAsync({ email, password })
    .then((result) => result)
    .then(() => {
      checkUserIfExistsQuery(email)
        .then((data) => data.rows[0])
        .then((data) => {
          if (!data) {
            res.status(401).json({ msg: 'Auth failed. User not found.' });
          } else {
            bcrypt.compare(password, data.password)
              .then((result) => {
                if (result) {
                  jwt.sign({ isLogged: 'true', user_id: data.id, username: data.username }, process.env.SECRET_KEY, (err, token) => {
                    if (err) {
                      console.log({ error: err });
                    }

                    res.cookie('token', token);
                    res.status(200).json({ msg: 'Auth Successful' });
                  });
                } else {
                  res.status(403).json({ msg: 'Auth failed. Check email and password' });
                }
              });
          }
        });
    }).catch((err) => {
      console.log(err);
      res.status(500).send({ msg: 'Something went wrong in login' });
    // console.log(err.details.message);
    // res.json(err);
    });
};

module.exports = logIn;
