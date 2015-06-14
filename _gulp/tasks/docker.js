

(function() {
  "use strict";

  var gulp = require('gulp')

  gulp.task('docker-start', helpers.dockerCompose.start)
  gulp.task('docker-stop', helpers.dockerCompose.stop)
  gulp.task('docker-restart', helpers.dockerCompose.restart)
  gulp.task('docker-destroy', helpers.dockerCompose.destroy)

})();
