(function() {
  "use strict";

  var argv = require('yargs').argv,
      path = require('path'),
      src_dir = '_src/',
      build_dir = 'dist/',
      temp_dir = 'tmp/'

  module.exports = {
    root_dir: __dirname + '/',
    manifest: temp_dir + 'manifest.json',
    build_dir: build_dir,
    asset_dir: build_dir + 'public/',
    app: {
      src: src_dir + 'app/'
    },
    client: {
      src: src_dir + 'client/',
      filename: 'client.js'
    },
    theme: {
      src: src_dir + 'theme/',
      sass_includes: ['bower_components/foundation/scss']
    },
    vend: {
      routes: { // directory: [ ... file extensions ... ]
        'fonts': [ 'eot','svg','ttf', 'woff','woff2','otf'],
        'css': [ 'css' ],
        'js': [ 'js' ]
      }
    },
    page: {
      src: src_dir + 'page/'
    }
  }

})();
