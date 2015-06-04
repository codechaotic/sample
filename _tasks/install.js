(function() {
  "use strict";

  var gulp = require('gulp'),
      install = require('gulp-install'),
      config = require('../gulp.config.js')

  gulp.task('install.npm', install_npm)
  gulp.task('install.bower', install_bower)

  function install_npm() {
    return gulp.src(config.install.packageJson)
      .pipe(install({production: true}))
  }

  function install_bower() {
    return gulp.src(config.install.bowerJson)
      .pipe(install())
  }

})();
