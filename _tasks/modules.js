(function() {
  "use strict";

  var gulp = require('gulp'),
      install = require('gulp-install'),
      config = require('../gulp.config.js')

  gulp.task('modules', main)
  gulp.task('modules.watch', ['modules'], watch)

  function main() {
    gulp.src(config.modules.src)
      .pipe(gulp.dest(config.modules.dest))
      .pipe(install({production: true}))
  }

  function watch() {
    gulp.watch(config.modules.src)
      .on('change', function(event) {
        console.log('File ' + event.type + ': running gulp modules')
      })
  }

})();
