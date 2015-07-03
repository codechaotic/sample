(function() {
  "use strict";

  var spawn = require('./helpers/child_process').spawn,
      Q = require('q'),
      http = require('http'),
      webdriver_path = 'node_modules/protractor/bin/webdriver-manager',
      server_status_url = 'http://localhost:4444/wd/hub/status',
      server_stop_url = "http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer"

  exports.start = function() {
    var deferred = Q.defer()
    status()
      .then(function(up) {
        if(!up) return update().stopped()
          .then(function() {
            var launcher = launch()
            return launcher.started()
              .then(waitStarted)
              .then(launcher.interupt)
              .then(launcher.stopped)
              .then(status)
          })
        return up
      })
      .then(function(up) {
        if(up) deferred.resolve()
      })
      return deferred.promise
  }

  exports.stop = function() {
    var deferred = Q.defer()
    status()
     .then(function(up) {
       if(up) return ping(server_stop_url)
         .then(waitStopped)
         .then(status)
       return up
     })
     .then(function(up) {
       if(!up) deferred.resolve()
     })
    return deferred.promise
  }

  function ping(url) {
    var deferred = Q.defer()
    http.get(url, function(res) {
      if(res.statusMessage === 'OK' ) deferred.resolve(true)
    }).on('error', function(e) {
      if(e.code === 'ECONNREFUSED') deferred.resolve(false)
      deferred.reject(new Error('ping failed'))
    })
    return deferred.promise
  }

  function check(f,expect,delay,limit) {
    var deferred = Q.defer(),
        fail_timer = setTimeout(function() {
          deferred.reject(new Error('state shift failed'))
        },limit)
    doCheck()
    return deferred.promise
    function doCheck() {
      return f()
        .then(function(val) {
          if(val == expect) {
            clearTimeout(fail_timer)
            deferred.resolve()
          }
          else setTimeout(doCheck,100)
        })
    }
  }

  function update() {
    return spawn(webdriver_path, ['update'])
  }

  function launch() {
    return spawn(webdriver_path, ['start'])
  }

  function status() {
    return ping(server_status_url)
  }

  function waitStarted() {
    return check(status,true,100,10000)
  }

  function waitStopped() {
    return check(status,false,100,10000)
  }
})();
