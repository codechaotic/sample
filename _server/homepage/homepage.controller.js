(function() {

  module.exports = homepageController
  var manifest = require('../../manifest.json')

  function homepageController(app) {
    app.get('/', function(req, res) {
      res.render('homepage.jade');
    })
  }

})();
