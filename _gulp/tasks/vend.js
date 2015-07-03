(function() {
  "use strict";

  var gulp = require('gulp'),
      bower_files = require('main-bower-files'),
      asset = require('./tools/asset'),
      logger = require('./tools/logger')

  gulp.task('vend', ['bower'], vend )
  gulp.task('watch-vend', ['vend'], watchVend)

  function vend() {
    var src = bower_files({
          filter: createFilter()
        }),
        options = {
          base: '.'
        }
    return gulp.src( src, options )
      .pipe(asset.bust())
      .pipe(gulp.dest(config.asset_dir))
      .pipe(asset.dump())
  }

  function createFilter() {
    var ext = []
    for(var key in config.vend.routes) {
      ext = ext.concat(config.vend.routes[key])
    }
    return new RegExp('.*.(' + ext.join('|') + ')$')
  }

  function watchVend() {
    var src = bower_files({
          filter: config.vend.filter
        })
    gulp.watch( src, ['vend'] )
      .on('change', logger('vendor file'))
  }

})();
