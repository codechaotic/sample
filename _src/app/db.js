(function() {

  var mongoose = require('mongoose'),
      exports = module.exports = { }

  exports.connect = connect

  function connect(mongo_url,cb) {
    mongoose.connection
      .on('connected', onConnected)
      .on('error', onError)
      .on('disconnected', onDisconnected)

    function connectWithRetry() {
      return mongoose.connect(mongo_url, function(err) {
        if (err) {
          console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
          setTimeout(connectWithRetry, 5000);
        }
        else cb()
      })
    }
    connectWithRetry()

    function onConnected() {
      console.log('Mongoose default connection open to ' + mongo_url)
    }

    function onError(err) {
      console.log('Mongoose default connection error: ' + err)
    }

    function onDisconnected() {
      console.log('Mongoose default connection disconnected')
    }
  }

})();
