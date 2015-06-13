var express = require('express'),
    app = express(),
    db = require('./db'),
    config = require('./config')

app.use(require('body-parser').json())

app.use(express.static(config.asset_dir))
app.use( '/api', require('./router' ))

db.connect( config.mongo_url, function () {
  app.listen(config.port)
})
