(function() {
  "use strict";

  var argv = require('yargs').argv,
      build_dir =  argv.dev ? 'build/dev' : 'build/dist',
      source_dir = '_app',
      asset_path = '/public'

  module.exports = {
    source_dir: source_dir,
    build: {
      src: [
        source_dir + '/**/*',
        '!' + source_dir + asset_path,
        '!' + source_dir + asset_path + '/**/*',
        '!' + source_dir + '/bower_components',
        '!' + source_dir + '/bower_components/**/*'
      ],
      dest: build_dir
    },
    install: {
      bowerJson: source_dir + '/bower.json',
      packageJson: source_dir + '/package.json'
    },
    asset: {
      src: source_dir + asset_path,
      dest: build_dir + asset_path
    },
    sass: {
      src: source_dir + asset_path + '/sass/style.scss',
      opts: {
        style: 'expanded',
        includePaths: ['_app/bower_components/foundation/scss']
      }
    },
    client: {
      src: [
        source_dir + asset_path + '/client/**/*.modules.js',
        source_dir + asset_path + '/client/**/*.controller.js'
      ],
      dest: 'client.js'
    }
  }

})();
