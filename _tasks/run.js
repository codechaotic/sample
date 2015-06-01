(function() {
  "use strict";

  var gulp = require('gulp'),
      log = require('gulp-util').log,
      run = require('gulp-run'),
      config = require('../gulp.config.js')

  gulp.task('run', ['build'], main)

  function main() {
    var file = config.is_dev ? 'docker-compose.dev.yml' : 'docker-compose.yml'
    return run('docker-compose up', { cwd: process.cwd() }).exec('-f ' + file)
  }

})();
