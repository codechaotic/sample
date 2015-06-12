(function() {
  "use strict";

  var argv = require('yargs').argv

  var build_dir = 'dist/',
      source_dir = '_app/',
      temp_dir = 'tmp/',
      bower_dir = source_dir + 'bower_components/',
      node_dir = source_dir + 'node_modules/'

  var asset_src_path = source_dir + 'public/',
      asset_temp_path = temp_dir + 'public/',
      asset_dest_path = build_dir + 'public/',
      views_src_path = source_dir + 'views/'

  var ALL = '**/*'

  module.exports = {
    app: {
      dest: build_dir,
      src: source_dir,
      views: {
        src: views_src_path + ALL
      },
      files: {
        src: [
          source_dir + ALL,
          '!' + asset_src_path + ALL, '!' + asset_src_path,
          '!' + views_src_path + ALL, '!' + views_src_path,
          '!' + bower_dir + ALL, '!' + bower_dir,
          '!' + node_dir + ALL, '!' + node_dir
        ]
      },
      modules: {
        src: node_dir + ALL
      }
    },
    asset: {
      manifest: temp_dir + 'manifest.json',
      dest: asset_dest_path,
      client: {
        src: asset_src_path + 'client/client.js',
        temp: asset_temp_path + 'client/',
        watch: asset_src_path + 'client/' + ALL
      },
      bower: {
        src: source_dir,
        temp: asset_temp_path + 'bower/',
        filter: /.*.(js|css)$/
      },
      theme: {
        src: asset_src_path + 'theme/theme.scss',
        temp: asset_temp_path + 'theme/',
        watch: asset_src_path + 'theme/' + ALL,
        sass_includes: [bower_dir + 'foundation/scss']
      }
    },
    install: {
      bower_file: source_dir + 'bower.json',
      npm_file: source_dir + 'package.json'
    }
  }

})();
