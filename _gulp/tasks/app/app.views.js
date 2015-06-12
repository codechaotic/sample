(function() {
  "use strict";

  var gulp = require('gulp'),
      collect = require('gulp-rev-collector')

  gulp.task('app.views', inject)

  function inject() {
    var src = [config.asset.manifest, config.app.views.src],
        dest = config.app.dest
    return gulp.src(src, {base: config.app.src})
      .pipe(collect())
      .pipe(gulp.dest(dest))
  }

})();
