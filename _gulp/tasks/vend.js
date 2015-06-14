(function() {
  "use strict";

  var gulp = require('gulp'),
      bower_files = require('main-bower-files')

  gulp.task('vend', ['bower'], vend )
  gulp.task('watch-vend', ['vend'], watchVend)

  function vend() {
    var src = bower_files({
          filter: config.vend.filter
        }),
        options = {
          base: '.'
        }
    return gulp.src( src, options )
      .pipe(helpers.createAssets())
  }

  function watchVend() {
    var src = bower_files({
          filter: config.vend.filter
        })
    gulp.watch( src, ['vend'] )
      .on('change', helpers.changeHandler('vendor asset'))
  }

})();
