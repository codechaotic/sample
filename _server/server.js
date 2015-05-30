var express = require('express'),
    app = express(),
    config = require('./config'),
    fs = require('fs')

// Init Database Connection
require('./db')

config.static.forEach( useStatic )
app.set('views', getSubfolders())
app.set('view engine', 'jade')
app.locals.basedir = __dirname

require('./sections/sections.controller')(app)
require('./homepage/homepage.controller')(app)

// Start Server
var server = app.listen(config.port)

function getSubfolders() {
  return fs.readdirSync(__dirname).filter( function(file) {
    return fs.statSync(__dirname + '/' + file).isDirectory()
  }).map( function(d) {
    return __dirname + '/' + d
  })
}

function useStatic(dir) {
  app.use(express.static(dir))
}
