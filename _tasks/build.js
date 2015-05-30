(function() {
  "use strict";

  var gulp = require('gulp')
  gulp.task('build', [
    'sass',
    'client',
    'server',
    'bower',
    'modules'
  ])

})();
