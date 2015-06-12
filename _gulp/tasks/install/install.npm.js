(function() {
  "use strict";

  var gulp = require('gulp'),
      install = require('gulp-install')

  gulp.task('install.npm', main)

  function main() {
    return gulp.src(config.install.npm_file)
      .pipe(install({production: true}))
  }

})();
