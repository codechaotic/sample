(function() {
  'use strict';

  var express = require('express'),
      router = module.exports = express.Router()

  router.get('/add', function (req, res) {
    res.render('posts.add.jade');
  })

})();