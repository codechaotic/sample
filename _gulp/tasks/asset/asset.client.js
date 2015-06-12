(function() {
  "use strict";

  var gulp = require('gulp'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      rename = require('gulp-rename')

  var raw_dir = config.asset.client.temp + 'raw/',
      rev_dir = config.asset.client.temp + 'rev/'

  gulp.task('asset.client', [
              'asset.client.revise'
  ], helpers.copyFiles( rev_dir, config.asset.dest ) )
  gulp.task('asset.client.revise', [
              'asset.client.create'
  ], helpers.reviseFiles( raw_dir, rev_dir, config.asset.manifest ) )
  gulp.task('asset.client.create', create)

  function create() {
    var src = config.asset.client.src,
        dest = raw_dir
    return browserify(src).bundle()
      .pipe(source(src))
      .pipe(rename( function(path) {
        path.dirname = path.extname.slice(1)
      }))
      .pipe(gulp.dest(dest))
  }

})();
