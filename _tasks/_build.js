(function() {
  "use strict";

  var gulp = require('gulp')

  gulp.task('build', [
    'build.revision',
    'build.views',
    'build.clone'
  ])


})();
