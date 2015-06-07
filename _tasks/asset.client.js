(function() {
  "use strict";

  var gulp = require('gulp'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      config = require('../gulp.config.js').asset.client

  gulp.task('asset.client', main)

  function main() {
    return browserify(config.src).bundle()
      .pipe(source(config.filename))
      .pipe(gulp.dest(config.dest))
  }

})();
