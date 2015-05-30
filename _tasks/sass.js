(function() {
  "use strict";

  var gulp = require('gulp'),
      sass = require('gulp-sass'),
      rev = require('gulp-rev'),
      config = require('../gulp.config.js')

  gulp.task('sass', main)
  gulp.task('sass.watch', ['sass'], watch)

  function main() {
    var sass_stream
      = sass(config.sass.opts)
        .on('error', sass.logError)
    gulp.src(config.sass.src)
      .pipe(sass_stream)
      .pipe(rev())
      .pipe(gulp.dest(config.sass.dest))
  }

  function watch() {
    gulp.watch(config.sass.src, ['sass'])
      .on('change', function(event) {
        console.log('File ' + event.type + ': running gulp sass')
      })
  }

})();
