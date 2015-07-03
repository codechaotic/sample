(function() {
  "use strict";

  var gulp = require('gulp'),
      rev = require('gulp-rev'),
      rename = require('gulp-rename'),
      collect = require('gulp-rev-collector'),
      gulpIgnore = require('gulp-ignore'),
      addsrc = require('gulp-add-src'),
      lazypipe = require('lazypipe')

  exports.bust = lazypipe()
    .pipe(rename, setDirname)
    .pipe(rev)

  exports.dump = lazypipe()
    .pipe(rev.manifest,config.manifest,{merge: true})
    .pipe(gulp.dest,'.')

  exports.inject = lazypipe()
    .pipe(addsrc, config.manifest)
    .pipe(collect)
    .pipe(gulpIgnore.exclude, config.manifest)

  function setDirname(path) {
    for (var dir in config.vend.routes) {
      if (config.vend.routes.hasOwnProperty(dir)) {
        if(config.vend.routes[dir].indexOf(path.extname.slice(1)) != -1) {
          path.dirname = dir; return;
        }
      }
    }
  }

})();
