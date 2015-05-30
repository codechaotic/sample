(function() {
  "use strict";

  var gulp = require('gulp'),
      run = require('gulp-run'),
      config = require('../gulp.config.js')

  gulp.task('run', ['build'], main)

  function main() {
    var compose_file = config.is_dev ? 'fig.dev.yml' : 'fig.yml'
    run('docker-compose -f ' + compose_file + ' up').exec()
  }

})();
