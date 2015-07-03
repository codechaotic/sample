(function() {
  "use strict";

  var spawn = require('./helpers/child_process').spawn

  exports.start = function() {
    return status()
      .then(function(up) {
        if(!up) return dockerComposeStart()
      })
  }

  exports.stop = function() {
    return status()
      .then(function(up) {
        if(up) return dockerComposeStop()
      })
  }

  exports.restart = function() {
    exports.stop()
      .then(dockerComposeStart)
  }

  exports.destroy = function() {
    exports.stop()
      .then(dockerComposeRemove)
  }

  function status() {
    return spawn('docker-compose',['ps', '-q']).stopped()
      .then(function(res) {
        if(res.length > 0) {
          return dockerInspect(res)
            .then(function(res) {
              return res.join('')
            })
            .then(JSON.parse)
          }
      })
      .then(function(json) {
        return json && json.every(function(c) {
          return c.State.Running
        })
      })
  }

  function dockerInspect(ids) {
    return spawn('docker',['inspect'].concat(ids)).stopped()
  }

  function dockerComposeStart() {
    return spawn('docker-compose',['up','-d','--no-recreate']).stopped()
  }

  function dockerComposeStop() {
    return spawn('docker-compose',['stop']).stopped()
  }

  function dockerComposeRemove() {
    return spawn('docker-compose',['rm','-fv']).stopped()
  }
})();
