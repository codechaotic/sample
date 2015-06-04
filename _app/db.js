(function() {

  var mongoose = require('mongoose'),
      exports = module.exports = { },
      config = require('./config')

  exports.init = init

  function init(cb) {
    mongoose.connection
      .on('connected', onConnected)
      .on('error', onError)
      .on('disconnected', onDisconnected)
    mongoose.connect(config.mongo_url,cb)
  }

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
