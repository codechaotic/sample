(function() {
  "use strict";

  var gulp = require('gulp')

      gulp.task('app.files', clone)

      function clone() {
        var src = config.app.files.src,
            dest = config.app.dest
        return gulp.src(src, {base: config.app.src})
          .pipe(gulp.dest(dest))
      }

})();
