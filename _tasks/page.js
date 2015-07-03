(function() {
  "use strict";

  var gulp = require('gulp'),
      collect = require('gulp-rev-collector'),
      asset = require('./tools/asset'),
      logger = require('./tools/logger')

  gulp.task('page', page)
  gulp.task('watch-page', [
    'page',
    'watch-vend',
    'watch-client',
    'watch-theme'
  ], watchPage)

  function page() {
    var src = config.page.src + '**/*.html',
        options = {
          base: config.page.src
        }
    return gulp.src( src, options )
      .pipe(asset.inject())
      .pipe(gulp.dest(config.asset_dir))
  }

  function watchPage() {
    var src = [config.manifest, config.page.src + '**/*.html']
    return gulp.watch( src, ['page'] )
      .on('change', logger('page file'))
  }

})();
