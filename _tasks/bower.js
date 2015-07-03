(function() {
  "use strict";

  var gulp = require('gulp'),
      install = require('gulp-install')

  gulp.task('bower', bower)
  gulp.task('watch-bower', ['bower'], watchBower)

  function bower() {
    return gulp.src('bower.json')
      .pipe(install())
  }

  function watchBower() {
    gulp.watch( 'bower.json', ['bower'] )
      .on('change', helpers.changeHandler('config file'))
  }

})();
