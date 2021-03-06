(function() {
  "use strict";

  var gulp = require('gulp'),
      install = require('gulp-install'),
      logger = require('./tools/logger')

  gulp.task('npm', npm)
  gulp.task('watch-npm', ['npm'], watchNpm)

  function npm() {
    return gulp.src('./package.json')
      .pipe(gulp.dest(config.build_dir))
      .pipe(install({production: true}))
  }

  function watchNpm() {
    gulp.watch( './package.json', ['npm'] )
      .on('change', logger('config file'))
  }
})();
