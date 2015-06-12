(function() {
  "use strict";

  var gulp = require('gulp'),
      sass = require('gulp-sass'),
      rename = require('gulp-rename')

  var raw_dir = config.asset.theme.temp + 'raw/',
      rev_dir = config.asset.theme.temp + 'rev/'

  gulp.task('asset.theme', [
              'asset.theme.revise'
  ], helpers.copyFiles( rev_dir, config.asset.dest ) )
  gulp.task('asset.theme.revise', [
              'asset.theme.create'
  ], helpers.reviseFiles( raw_dir, rev_dir, config.asset.manifest ) )
  gulp.task('asset.theme.create', create )

  function create() {
    var src = config.asset.theme.src,
        dest = raw_dir,
        sass_opts = {
          style: 'expanded',
          includePaths: config.asset.theme.sass_includes
        }
    return gulp.src(src)
      .pipe(sass(sass_opts))
      .pipe(rename( function(path) {
        path.dirname = path.extname.slice(1)
      }))
      .pipe(gulp.dest(dest))
  }

})();
