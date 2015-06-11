require('require-dir')('./_tasks',{recurse: true});

(function() {
  "use strict";

  var gulp = require('gulp')
  gulp.task('default', [
    'install',
    'build'
  ])

})();
