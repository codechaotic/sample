(function() {
  'use strict';

  var express = require('express'),
      router = module.exports = express.Router(),
      posts = require('./posts.model.js')

  router.get('/', function(req, res) {
    posts.getAll()
      .onResolve(function (err, data) {
        if (err) console.error(err)
        res.send(data)
      })
  })

  router.post('/add', function(req, res) {
    console.log(req.body);
    res.json(req.body);
  })

})();
