(function() {
  "use strict";

  var argv = require('yargs').argv,
      build_dir = 'dist/',
      temp_dir = 'tmp/'

  module.exports = {
    manifest: temp_dir + 'manifest.json',
    build_dir: build_dir,
    asset_dir: build_dir + 'public/',
    app: {
      src: '_app/'
    },
    client: {
      src: '_client/',
      filename: 'client.js'
    },
    theme: {
      src: '_theme/',
      sass_includes: ['bower_components/foundation/scss']
    },
    vend: {
      filter: /.*.(js|css)$/,
    },
    page: {
      src: '_page/'
    }
  }

})();
