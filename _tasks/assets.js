(function() {
  "use strict";

  var gulp = require('gulp'),
      lazypipe = require('lazypipe'),
      sass = require('gulp-sass'),
      ng_annotate = require('gulp-ng-annotate'),
      concat = require('gulp-concat'),
      bower_files = require('main-bower-files'),
      gulpif = require('gulp-if'),
      rename = require('gulp-rename'),
      rev = require('gulp-rev'),
      print = require('gulp-print'),
      config = require('../gulp.config.js')

  gulp.task('assets.vendor', ['install.bower'], assets_vendor)
  gulp.task('assets.sass', ['install.bower'], assets_sass)
  gulp.task('assets.client', assets_client),
  gulp.task('assets', [
    'assets.vendor',
    'assets.client',
    'assets.sass'
  ])

  var assets = lazypipe()
      .pipe(routeJS)
      .pipe(routeCSS)
      .pipe(rev)
      .pipe(gulp.dest, config.asset.dest)
      .pipe(rev.manifest, config.build.dest + '/manifest.json', { merge: true })
      .pipe(print)
      .pipe(gulp.dest, '.')

  function assets_sass() {
    return gulp.src(config.sass.src)
      .pipe(sass(config.sass.opts))
      .pipe(assets())
  }

  function assets_vendor() {
    var bower_config = {
      paths: config.source_dir,
      filter: /.*.(js|css)$/
    }
    return gulp.src( bower_files(bower_config), { base: config.source_dir })
      .pipe(assets())
  }

  function assets_client() {
    return gulp.src(config.client.src)
      .pipe(ng_annotate({ add: true, single_quotes: true }))
      .pipe(concat(config.client.dest))
      .pipe(assets())
  }

  function routeJS() {
    return gulpif('*.js', rename({ dirname: 'js' }))
  }

  function routeCSS() {
    return gulpif('*.css', rename({ dirname: 'css' }))
  }

})();
