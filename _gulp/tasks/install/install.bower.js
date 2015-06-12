(function() {
  "use strict";

  var gulp = require('gulp'),
      install = require('gulp-install')

  gulp.task('install.bower', main)

  function main() {
    return gulp.src(config.install.bower_file)
      .pipe(install())
  }

})();
