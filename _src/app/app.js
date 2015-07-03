var express = require('express'),
    app = express(),
    db = require('./db'),
    config = require('./config')

var server

app.use(require('body-parser').json())

app.use(express.static(config.asset_dir))
app.use( '/api', require('./router' ))

db.connect( config.mongo_url, function () {
  server = app.listen(config.port)
})

process.on('SIGTERM', function() {
  if(server) server.close(function() {
    process.exit(0)
  })
})
