

(function() {
  "use strict";

  var gulp = require('gulp'),
      runSequence = require('run-sequence')

  gulp.task('default', main)

  function main() {
    runSequence(
      'build',
      'watch',
      'docker'
    )
  }

})();
