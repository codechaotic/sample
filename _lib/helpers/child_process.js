(function() {
  "use strict";

  var Q = require('q'),
      spawn = require('child_process').spawn,
      es = require('event-stream')

  exports.spawn = function(cmd,args) {
    //console.log('SPAWN %s %s',cmd.split('/').pop(),args.join(' ') )
    var started_process = Q.defer(),
        stopped_process = Q.defer(),
        options = { cwd: process.cwd(), detached: true },
        output = [],
        child_process = spawn(cmd, args, options)
          .on('error', function(err) {
            started_process.reject(err)
            stopped_process.reject(err)
          })
          .on('exit', function(code,signal) {
            stopped_process.resolve(output)
          })

    started_process.resolve()

    es.merge( child_process.stdout, child_process.stderr )
      .pipe(es.split())
      .on('data', function(chunk) {
        if(chunk.length > 0) output.push(chunk)
      })

    return {
      started: function() {
        return started_process.promise
      },
      stopped: function() {
        return stopped_process.promise
      },
      interupt: function() {
        var kill_timer = setTimeout(kill,10000)
        child_process.on('exit',cancelKill)
        child_process.kill()

        function kill() {
          child_process.kill('SIGKILL')
        }
        function cancelKill() {
          clearTimeout(kill_timer)
          child_process.removeListener('exit',cancelKill)
        }
      }
    }
  }

})();
