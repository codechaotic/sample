(function() {
  "use strict";

  var gulp = require('gulp'),
      rename = require('gulp-rename'),
      bower = require('main-bower-files'),
      config = require('../gulp.config.js').asset.bower

  gulp.task('asset.bower', main)

  function main() {
    var bower_config = {
      paths: config.src,
      filter: config.filter
    }
    return gulp.src( bower(bower_config), { base: config.src })
      .pipe(rename( function(path) {
        path.dirname = path.extname.slice(1)
      }))
      .pipe(gulp.dest(config.dest))
  }

})();
