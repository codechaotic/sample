

(function() {
  "use strict";

  var gulp = require('gulp'),
      spawn = require('child_process').spawnSync,
      config = require('../gulp.config.js').install.npm

  gulp.task('docker', dockerRunner(['up','-d']))
  gulp.task('docker.start', dockerRunner(['start']))
  gulp.task('docker.stop', dockerRunner(['stop','--time=0']))
  gulp.task('docker.destroy', [ 'docker.stop' ], dockerRunner(['rm','-fv']))
  gulp.task('docker.status', dockerRunner(['ps']))
  gulp.task('docker.logs', dockerRunner(['logs']))

  function dockerRunner(argsArray) {
    function run(argsArray) {
      return spawn("docker-compose", argsArray, {
        cwd: process.cwd(),
        stdio: 'inherit'
      })
    }
    return function(){
      run(argsArray)
    }
  }

})();
