(function() {
  'use strict';

  var path = require('path'),
      manifest = require(process.cwd() + '/manifest.json')

  module.exports = assets_helper

  function assets_helper(asset_name) {
    return path.join('/', manifest[asset_name])
  }

})();
