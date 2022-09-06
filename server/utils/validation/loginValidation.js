const joi = require('joi');

const logInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).max(20).alphanum()
    .required(),
});

module.exports = logInSchema;
