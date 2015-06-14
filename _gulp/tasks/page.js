(function() {
  "use strict";

  var gulp = require('gulp'),
      collect = require('gulp-rev-collector')

  gulp.task('page', page)
  gulp.task('watch-page', [
    'page',
    'watch-vend',
    'watch-client',
    'watch-theme'
  ], watchPage)

  function page() {
    var src = [config.manifest, config.page.src + '**/*.html'],
        options = {
          base: config.page.src
        }
    return gulp.src( src, options )
      .pipe(collect())
      .pipe(gulp.dest(config.asset_dir))
  }

  function watchPage() {
    var src = [config.manifest, config.page.src + '**/*.html']
    return gulp.watch( src, ['page'] )
      .on('change', helpers.changeHandler('page file'))
  }

})();
