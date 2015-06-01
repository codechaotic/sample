var express = require('express'),
    app = express(),
    config = require('./config')

app.set('views', [])
app.set('view engine', 'jade')
app.use(express.static('assets'))
app.use(require('body-parser').json())
app.locals.basedir = __dirname

// Load Helper Methods
app.locals.asset_path = require('./helpers/asset_path')

// Initialize Database Connection
require('./db')

// Initialize Features
require('./features/posts')(app)
require('./features/homepage')(app)

// Start Server
var server = app.listen(config.port)
