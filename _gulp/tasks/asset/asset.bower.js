(function() {
  "use strict";

  var gulp = require('gulp'),
      bower = require('main-bower-files'),
      rename = require('gulp-rename')

  var raw_dir = config.asset.bower.temp + 'raw/',
      rev_dir = config.asset.bower.temp + 'rev/'

  gulp.task('asset.bower', [
              'asset.bower.revise'
  ], helpers.copyFiles( rev_dir, config.asset.dest ) )
  gulp.task('asset.bower.revise', [
              'asset.bower.create'
  ], helpers.reviseFiles( raw_dir, rev_dir, config.asset.manifest ) )
  gulp.task('asset.bower.create', create )

  function create() {
    var src = config.asset.bower.src,
        dest = raw_dir,
        bower_config = {
          paths: src,
          filter: config.asset.bower.filter
        }
    return gulp.src( bower(bower_config), { base: src })
      .pipe(rename( function(path) {
        path.dirname = path.extname.slice(1)
      }))
      .pipe(gulp.dest(dest))
  }

})();
