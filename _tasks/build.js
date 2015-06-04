(function() {
  "use strict";

  var gulp = require('gulp'),
      config = require('../gulp.config.js')

  gulp.task('build', [
    'install.npm',
    'install.bower',
    'assets' ], build)

  function build() {
    return gulp.src(config.build.src)
      .pipe(gulp.dest(config.build.dest))
  }

})();
