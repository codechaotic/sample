(function() {
  "use strict";

  var gulp = require('gulp'),
      collect = require('gulp-rev-collector'),
      config = require('../gulp.config.js').build.views

      gulp.task('build.views', ['asset', 'build.revision'], main)

      function main() {
        return gulp.src(config.src)
          .pipe(collect())
          .pipe(gulp.dest(config.dest))
      }

})();
