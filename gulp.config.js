(function() {
  "use strict";

  var argv = require('yargs').argv

  var build =  argv.dev ? 'build/dev/' : 'build/dist/',
      source = '_app/',
      temp = 'build/tmp/',
      bower = source + 'bower_components/'

  var asset_src_path = source + 'public/',
      asset_temp_path = temp + 'public/',
      asset_dest_path = build + 'public/',
      asset_manifest = temp + 'manifest.json',
      views_src_path = source + 'views/',
      views_dest_path = build + 'views/'

  var ALL = '**/*'

  module.exports = {
    build: {
      views: {
        src: [asset_manifest, views_src_path + ALL],
        dest: views_dest_path
      },
      rev: {
        src: asset_temp_path + ALL,
        dest: asset_dest_path,
        manifest: asset_manifest
      },
      clone: {
        src: [
          source + ALL,
          '!' + asset_src_path + ALL, '!' + asset_src_path,
          '!' + views_src_path + ALL, '!' + views_src_path,
          '!' + bower + ALL, '!' + bower
        ],
        dest: build
      }
    },
    asset: {
      client: {
        src: asset_src_path + 'client/client.js',
        filename: 'js/client.js',
        dest: asset_temp_path
      },
      bower: {
        src: source,
        filter: /.*.(js|css)$/,
        dest: asset_temp_path
      },
      theme: {
        src: asset_src_path + 'theme/theme.scss',
        sass_includes: [bower + 'foundation/scss'],
        filename: 'css/theme.css',
        dest: asset_temp_path
      }
    },
    install: {
      bower: {
        src: source + 'bower.json'
      },
      npm: {
        src: source + 'package.json'
      }
    }
  }

})();
