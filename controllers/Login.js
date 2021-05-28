const Google_user = require('../models/google_users');

const axios = require('axios');

class SiteController {
    index(req, res) {
        axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${req.query.idToken}`)
            .then(function (response) {
                Google_user.findOne({ id: response.data.sub }, function (err, user) {
                    if (!err) {
                        if (!user) {
                            const newUser = new Google_user({
                                name: {
                                    first_name: response.data.given_name,
                                    last_name: response.data.family_name
                                },
                                email: response.data.email,
                                id: response.data.sub,
                                picture: response.data.picture
                            }).save();
                          res.json({name: 'hung'})
                       
                        }
                        else {
                          res.json({name: 'hanh'})
                        }
                    }
                })
            })
    }

}
module.exports = new SiteController;
