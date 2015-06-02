(function() {
  'use strict';

  var express = require('express'),
      router = module.exports = express.Router()

  router.use('/post',require('./post/post.router'))

})();
