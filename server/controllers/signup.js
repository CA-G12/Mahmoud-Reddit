const addUserQuery = require('../database/queries/addUserQuery');
const checkUserIfExistsQuery = require('../database/queries/checkUserIfExistsQuery');
const bcrypt = require('bcrypt');
const signupSchema = require('../utils/validation/signupValidation');


const signup = (req, res) => {

    const { username, email, password, about,  imgLink} = req.body;

    // validation

    signupSchema.validateAsync({ username, email, password, about,  imgLink })
        .then(result => {
            console.log(result);

            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    res.json({msg: err});
                }

                checkUserIfExistsQuery(result.email)
                .then(result => {
                    if(!result.rows.length) {
                        addUserQuery(username, email, hash, about,  imgLink);
                        res.json({ msg: 'success' })
                    }else {
                        res.json({ msg: 'this email is already exists' })
                    }
                })
                
            })

        })
        .catch(err => console.log(err))
};

module.exports = signup;