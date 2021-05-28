const Book = require('../models/books');


class SiteController {
  index(req, res) {
    
    Book.distinct('category', function (err, book) {
      
      if(!err) res.render('home', { book } );

    });

}
}
module.exports = new SiteController();