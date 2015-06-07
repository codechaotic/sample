(function() {
  "use strict";

  var gulp = require('gulp'),
      install = require('gulp-install'),
      config = require('../gulp.config.js').install.bower

  gulp.task('install.bower', main)

  function main() {
    return gulp.src(config.src)
      .pipe(install())
  }

})();
