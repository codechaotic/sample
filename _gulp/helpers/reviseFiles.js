(function() {
  "use strict";

  var gulp = require('gulp'),
      rev = require('gulp-rev')

  module.exports = function(from,to,manifest) {
    return function() {
      return gulp.src(from + '**/*')
        .pipe(rev())
        .pipe(gulp.dest(to))
        .pipe(rev.manifest(manifest, { merge: true }))
        .pipe(gulp.dest('.'))
    }
  }

})();
