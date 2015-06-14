(function() {
  "use strict";

  var Q = require('q'),
      spawn = require('child_process').spawn

  module.exports = {
    restart: dockerRestart,
    start: dockerStart,
    stop: dockerStop,
    destroy: dockerDestroy
  }

  function dockerStart() {
    return run('up','-d','--no-recreate')
  }
  function dockerStop() {
    return run('stop','--time=0')
  }
  function dockerRestart() {
    return dockerStop().then(dockerStart)
  }
  function dockerDestroy() {
    return dockerStop().then( function() {
      run('rm','-fv')
    })
  }
  function run() {
    var deferred = Q.defer(),
        args = Array.prototype.slice.call(arguments)
    spawn('docker-compose', args, { cwd: process.cwd(), stdio: 'inherit' })
      .on('exit', function() {
        deferred.resolve()
      })
      .on('error', function(err) {
        deferred.reject(new Error(err))
      })
    return deferred.promise
  }

})();
