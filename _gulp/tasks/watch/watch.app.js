(function() {
  "use strict";

  var gulp = require('gulp'),
      runSequence = require('run-sequence')

  gulp.task('watch.app', [
    'app',
  ], main)

  function main() {
    gulp.watch( config.app.files.src, ['app.files'])
      .on('change', helpers.changeHandler('application file'))
      .on('change', function(event) {
        runSequence( 'docker.stop', 'docker.start' )
      })
    gulp.watch( config.app.views.src, ['app.views'] )
      .on('change', helpers.changeHandler('application file'))
  }

})();
