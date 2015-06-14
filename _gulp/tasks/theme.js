(function() {
  "use strict";

  var gulp = require('gulp'),
      sass = require('gulp-sass')

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
      .pipe(helpers.createAssets())
  }

  function watchTheme() {
    var src = config.theme.src + '**/*.scss'
    gulp.watch( src, ['theme'] )
      .on('change', helpers.changeHandler('theme file'))
  }

})();
