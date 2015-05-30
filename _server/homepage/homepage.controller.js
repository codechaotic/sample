(function() {

  module.exports = homepageController
  var manifest = require('../../rev-manifest.json')

  function homepageController(app) {
    app.get('/', function(req, res) {
      res.render('homepage.view.jade', { assets: manifest });
    })
  }

})();
