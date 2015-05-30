(function() {
  "use strict";

  var argv = require('yargs').argv,
      path = require('path')

  var base =  argv.dev ? 'build/dev' : 'build/dist',
      assets_dir = '_assets',
      client_dir = '_client',
      server_dir = '_server'

  module.exports = config()

  function config() {
    return {
      is_dev: argv.dev || false,
      build_dir: base,
      server: {
        dir: server_dir,
        src: path.join(server_dir,'**','*'),
        dest: path.join(base,'server')
      },
      client: {
        dir: client_dir,
        src: [
          path.join(client_dir,'**', '*.module.js'),
          path.join(client_dir,'**', '*.controller.js')
        ],
        dest: path.join(base, 'assets'),
        filename: 'client.js'
      },
      sass: {
        dir: path.join(assets_dir,'sass'),
        src: path.join(assets_dir,'sass','**', '*.scss'),
        dest: path.join(base,'assets'),
        opts: {
          style: 'expanded',
          includePaths: ['bower_components/foundation/scss']
        }
      },
      bower: {
        src: 'bower.json',
        dest: path.join(base, 'assets' )
      },
      modules:{
        src: 'package.json',
        dest: base
      }
    }
  }

})();
