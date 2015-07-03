(function() {
  "use strict";

  var gulp = require('gulp'),
      logger = require('./tools/logger')

  gulp.task('app', app)
  gulp.task('watch-app', ['app'], watchApp)

  function app() {
    var src = config.app.src + '**/*',
        dest = config.build_dir,
        options = {
          base: config.app.src
        }
    return gulp.src(src, options)
      .pipe(gulp.dest(dest))
  }

  function watchApp() {
    var src = config.app.src + '**/*'
    gulp.watch( src, ['app'] )
      .on('change', logger('app file'))
      .on('change', lib.application.restart)
  }

})();
