(function() {
  "use strict";

  var gulp = require('gulp')
  gulp.task('watch', [
    'sass.watch',
    'client.watch',
    'server.watch',
    'bower.watch',
    'modules.watch'
  ])

})();
