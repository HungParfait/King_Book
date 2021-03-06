const Book = require('../models/books');

class SiteController {
  index(req, res) {
    const query = req.query;
    
    const queryString = new RegExp( query.q ,'i')

    Book.find({name: queryString}).skip((query.page - 1) * 16).limit(+query.limit).exec(function(err, names) {

      names = names.map(name => name.toObject());

      if (!err) res.json( {names} );
    })
  
}
}

module.exports = new SiteController();