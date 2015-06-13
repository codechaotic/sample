(function() {
  'use strict';

  var mongoose = require('mongoose'),
      post_schema = new mongoose.Schema({
        title: { type: String, required: true },
        content: { type: String, required: true },
        featured: { type: Boolean, required: true }
      }),
      post = mongoose.model('Post', post_schema),
      exports = module.exports = { }

  exports.getAll = getAll

  function getAll(cb) {
    return post.find().exec(cb)
  }

})();
