(function() {
  "use strict";

  var gulp = require('gulp'),
      install = require('gulp-install'),
      config = require('../gulp.config.js').install.npm

  gulp.task('install.npm', main)

  function main() {
    return gulp.src(config.src)
      .pipe(install({production: true}))
  }

})();
