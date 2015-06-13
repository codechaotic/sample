(function() {
  "use strict";

  var gulp = require('gulp'),
      runSequence = require('run-sequence')

  gulp.task('watch.app', main)

  function main() {
    gulp.watch( config.app.files.src)
      .on('change', helpers.changeHandler('application file'))
      .on('change', function(event) {
        runSequence(
          'app.files',
          'docker.stop',
          'docker.start'
        )
      })
    gulp.watch( config.app.views.src, ['app.views'] )
      .on('change', helpers.changeHandler('view file'))

    gulp.watch( config.asset.manifest, ['app.views'] )
      .on('change', helpers.changeHandler('asset manifest'))
  }

})();
