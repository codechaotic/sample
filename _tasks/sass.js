(function() {
  "use strict";

  var gulp = require('gulp'),
      sass = require('gulp-sass'),
      rename = require('gulp-rename'),
      rev = require('gulp-rev'),
      config = require('../gulp.config.js')

  gulp.task('sass', main)
  gulp.task('sass.watch', ['sass'], watch)

  function main() {
    gulp.src(config.sass.src)
      .pipe(sass(config.sass.opts)
        .on('error', sass.logError))
      .pipe(rename( { dirname: 'css' }))
      .pipe(rev())
      .pipe(gulp.dest(config.sass.dest))
      .pipe(rev.manifest(config.build_dir + '/manifest.json', { merge: true }))
      .pipe(gulp.dest(''))
  }

  function watch() {
    gulp.watch(config.sass.src, ['sass'])
      .on('change', function(event) {
        console.log('File ' + event.type + ': running gulp sass')
      })
  }

})();
