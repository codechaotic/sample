(function() {
  'use strict';

  var express = require('express'),
      router = module.exports = express.Router(),
      posts = require('./posts.model.js')

  router.get('/', function(req, res) {
    posts.getAll(function(err,doc) {
      if(err) throw err
      res.json(doc)
    })

  })

  router.post('/add', function(req, res) {

  })

})();
