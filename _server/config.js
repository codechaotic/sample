(function() {

  var exports = module.exports = {};

  exports.mongo_url = process.env.MONGO_URL || 'mongodb://' + process.env.MONGO_PORT_27017_TCP_ADDR + '/test';
  exports.port = process.env.PORT || 8080

})();
