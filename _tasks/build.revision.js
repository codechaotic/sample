(function() {
  "use strict";

  var gulp = require('gulp'),
      rev = require('gulp-rev'),
      config = require('../gulp.config.js').build.rev

  gulp.task('build.revision', ['asset'], main)

  function main() {
    return gulp.src(config.src)
      .pipe(rev())
      .pipe(gulp.dest(config.dest))
      .pipe(rev.manifest(config.manifest, { merge: true }))
      .pipe(gulp.dest('.'))
  }

})();
