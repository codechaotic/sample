(function() {
  "use strict";

  var gulp = require('gulp'),
      newer = require('gulp-newer'),
      config = require('../gulp.config.js').build.clone

      gulp.task('build.clone', main)

      function main() {
        return gulp.src(config.src)
          .pipe(newer(config.dest))
          .pipe(gulp.dest(config.dest))
      }

})();
