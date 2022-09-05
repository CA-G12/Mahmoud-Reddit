const joi= require('joi')

const signupSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(20).alphanum().required(),
    about: joi.string().required(),
    imgLink: joi.string().required()
 })

 module.exports = signupSchema;