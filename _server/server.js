var express = require('express'),
    app = express(),
    config = require('./config')

app.set('views', [])
app.set('view engine', 'jade')

// Inject Middleware
app.use(require('body-parser').json())
app.use(express.static('assets'))


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
