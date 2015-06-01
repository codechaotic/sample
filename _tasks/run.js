(function() {
  "use strict";

  var gulp = require('gulp'),
      log = require('gulp-util').log,
      run = require('gulp-run'),
      config = require('../gulp.config.js')

  gulp.task('run', ['build'], main)

  function main() {
    var compose_file = config.is_dev ? 'fig.dev.yml' : 'fig.yml'
    return run('docker-compose up', { cwd: process.cwd() }).exec('-f ' + compose_file)
  }

})();
