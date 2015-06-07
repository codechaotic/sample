(function() {
  "use strict";

  var gulp = require('gulp'),
      sass = require('gulp-sass'),
      rename = require('gulp-rename'),
      config = require('../gulp.config.js').asset.theme

  gulp.task('asset.theme', main)

  function main() {
    var sass_opts = {
      style: 'expanded',
      includePaths: config.sass_includes
    }
    return gulp.src(config.src)
      .pipe(sass(sass_opts))
      .pipe(rename(config.filename))
      .pipe(gulp.dest(config.dest))
  }

})();
