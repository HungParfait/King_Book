const User = require('../models/users');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.getMethod = function (req, res) {
    res.render('login');
};


module.exports.postMethod =  function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email }, function (err, user) {

        if (err) return res.status(500).json({ message: 'Something went wrong.' });

        if (!user) {
            res.status(404).json({ message: "User doesn't exist" })
            return;
        }

        const isPassCorrect = bcrypt.compareSync(password, user.password);

        if (!isPassCorrect) {
          //  res.status(400).json({ message: 'In correct password' })
            res.render('login',({error: ['incorrect password']}));
           // res.status(400).json({ message: 'In correct password' })

            
            return;
        }

        const token = jwt.sign({ email: user.email }, 'duchung-email', { expiresIn: '1h' });
        res.cookie('c_user',token);
        res.json({message: 'success'})
        
    }
    )
}
