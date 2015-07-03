(function() {
  "use strict";

  var gulp = require('gulp'),
      sass = require('gulp-sass'),
      asset = require('./tools/asset'),
      logger = require('./tools/logger')

  gulp.task('theme', ['bower'], theme)
  gulp.task('watch-theme', ['theme'], watchTheme)

  function theme() {
    var src = config.theme.src + '**/[^_]*.scss',
        sass_opts = {
          style: 'expanded',
          includePaths: config.theme.sass_includes
        }
    return gulp.src(src)
      .pipe(sass(sass_opts))
      .pipe(asset.bust())
      .pipe(gulp.dest(config.asset_dir))
      .pipe(asset.dump())
  }

  function watchTheme() {
    var src = config.theme.src + '**/*.scss'
    gulp.watch( src, ['theme'] )
      .on('change', logger('theme file'))
  }

})();
