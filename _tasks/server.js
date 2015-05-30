(function() {
  "use strict";

  var gulp = require('gulp'),
      config = require('../gulp.config')

  gulp.task('server', main)
  gulp.task('server.watch', ['server'], watch)

  function main() {
    gulp.src(config.server.src, { base: config.server_dir })
      .pipe(gulp.dest(config.server.dest))
  }

  function watch() {
    gulp.watch(config.server.src, ['server'])
      .on('change', function(event) {
        console.log('File ' + event.type + ': running gulp server')
      })
  }

})();
