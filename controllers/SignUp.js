const User = require('../models/users');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.getMethod = function (req, res) {
    res.render('signup');
};


module.exports.postMethod =  function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email }, function (err, user) {

        if (err) return res.status(500).json({ message: 'Something went wrong.' });

        if (user) return res.status(404).json({ message: "Existing user" })
            
        const hashPassword =  bcrypt.hashSync(password, 12);

        const newUser = new User( {
                email: email,
                password: hashPassword
            }).save();
        })
        res.json({message: 'success'})
    }
