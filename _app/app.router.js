(function() {
  'use strict';

  var express = require('express'),
      router = module.exports = express.Router()

  router.get('/', function (req, res) {
    res.render('index.jade');
  })

  router.get('/blog', function (req, res) {
    res.render('blog.jade');
  })

})();
