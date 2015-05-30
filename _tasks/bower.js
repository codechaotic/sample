(function() {
  "use strict";

  var gulp = require('gulp'),
      gulpif = require('gulp-if'),
      rename = require('gulp-rename'),
      rev = require('gulp-rev'),
      bower_files = require('main-bower-files'),
      config = require('../gulp.config.js')

  gulp.task('bower', main)
  gulp.task('bower.watch', ['bower'], watch)

  function main() {
    console.log(config.build_dir)
    gulp.src(bower_files({ filter: /.*.(js|css)$/ }), { base: '../'})
      .pipe(gulpif('*.js', rename({ dirname: 'js' })))
      .pipe(gulpif('*.css', rename({ dirname: 'css' })))
      .pipe(rev())
      .pipe(gulp.dest(config.bower.dest))
      .pipe(rev.manifest({
        base: './',
        merge: true
       }))
      .pipe(gulp.dest(config.build_dir))
  }

  function watch() {
    gulp.watch(config.bower.src, ['bower'])
      .on('change', function(event) {
        console.log('File ' + event.type + ': running gulp bower')
      })
  }

})();
