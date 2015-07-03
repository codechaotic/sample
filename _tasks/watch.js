(function() {
  "use strict";

  var gulp = require('gulp')

  gulp.task('watch', [
    'watch-app',
    'watch-client',
    'watch-page',
    'watch-npm',
    'watch-theme',
    'watch-vend'
  ])

})();
