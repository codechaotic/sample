(function() {
  "use strict";

  var gulp = require('gulp'),
      sort = require('gulp-sort'),
      concat = require('gulp-concat'),
      asset = require('./tools/asset'),
      logger = require('./tools/logger'),
      path = require('path')

  gulp.task('client', client)
  gulp.task('watch-client', ['client'], watchClient)

  function client() {
    var src = config.client.src + '**/*.js',
        sort_options = {
          comparator: order_for_angular
        }

    return gulp.src( src )
      .pipe(sort(sort_options))
      .pipe(concat(config.client.filename))
      .pipe(asset.bust())
      .pipe(gulp.dest(config.asset_dir))
      .pipe(asset.dump())

    function order_for_angular( a, b ) {
      var priority = [
            'controller',
            'config',
            'module'
          ],
          priority_a = priority.indexOf(path.basename(a.path).split('.')[1]),
          priority_b = priority.indexOf(path.basename(b.path).split('.')[1])
      return priority_b - priority_a
    }
}

function watchClient() {
  var src = config.client.src + '**/*.js'
  gulp.watch( src, ['client'] )
    .on('change', logger('client file'))
}

})();
