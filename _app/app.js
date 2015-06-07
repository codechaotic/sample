var express = require('express'),
    app = express(),
    db = require('./db'),
    config = require('./config')

app.set('views', __dirname + "/views")
app.set('view engine', 'jade')
app.locals.basedir = app.get('views')

app.use(require('body-parser').json())

app.use(express.static('public'))
app.use('/',require('./app.router'))
app.use('/api',require('./api/api.router'))

db.init( function (err) {
  if (err) throw err
  app.listen(config.port)
})
