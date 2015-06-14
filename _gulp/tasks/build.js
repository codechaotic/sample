(function() {
  "use strict";

  var gulp = require('gulp')

  gulp.task('build', [
    'theme',
    'vend',
    'client',
    'app',
    'npm',
    'page'
  ])

})();
