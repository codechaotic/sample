(function() {

  var config = require('./config')

  var mongoose = require('mongoose')
  mongoose.connection
    .on('connected', onConnected)
    .on('error', onError)
    .on('disconnected', onDisconnected)
  mongoose.connect(config.mongo_url)

  function onConnected() {
    console.log('Mongoose default connection open to ' + config.mongo_url)
  }

  function onError(err) {
    console.log('Mongoose default connection error: ' + err)
  }

  function onDisconnected() {
    console.log('Mongoose default connection disconnected')
  }

})();
