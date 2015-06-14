(function() {
  "use strict";

  var gulp = require('gulp'),
      rev = require('gulp-rev'),
      rename = require('gulp-rename'),
      lazypipe = require('lazypipe')

  module.exports = lazypipe()
    .pipe(rename, function(path) {
      path.dirname = path.extname.slice(1)
    })
    .pipe(rev)
    .pipe(gulp.dest, config.asset_dir)
    .pipe(rev.manifest, config.manifest, { merge: true })
    .pipe(gulp.dest, '.')

})();
