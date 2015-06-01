var express = require('express'),
    app = express(),
    config = require('./config')

// Init Database Connection
require('./db')

config.static.forEach( useStatic )
app.set('views', [])
app.set('view engine', 'jade')
app.use(express.static('assets'))
app.locals.basedir = __dirname

// Load Helper Methods
app.locals.asset_path = require('./helpers/asset_path')

// Start Server
var server = app.listen(config.port)

// Initialize Features
require('./homepage')(app)

