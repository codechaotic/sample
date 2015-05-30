(function() {
  "use strict";

  var gulp = require('gulp'),
      ng_annotate = require('gulp-ng-annotate'),
      rename = require('gulp-rename'),
      rev = require('gulp-rev'),
      concat = require('gulp-concat'),
      config = require('../gulp.config.js')

  gulp.task('client', main)
  gulp.task('client.watch', ['client'], watch)

  function main() {
    gulp.src(config.client.src)
      .pipe(ng_annotate({ add: true, single_quotes: true }))
      .pipe(concat(config.client.filename))
      .pipe(rename({ dirname: 'js' }))
      .pipe(rev())
      .pipe(gulp.dest(config.client.dest))
      .pipe(rev.manifest(config.build_dir + '/manifest.json', { merge: true }))
      .pipe(gulp.dest(''))
  }

  function watch() {
    gulp.watch(config.client.src, ['client'])
      .on('change', function(event) {
        console.log('File ' + event.type + ': running gulp client')
      })
  }

})();
