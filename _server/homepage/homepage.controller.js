(function() {

  var express = require('express'),
      router = module.exports = express.Router()

  router.get('/', function(req, res) {
    res.render('homepage.jade');
  })

})();
