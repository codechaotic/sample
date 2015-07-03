var require_dir = require('require-dir')

global.config = require('./gulp.config')
global.lib = require_dir('_lib/')

require_dir('./_tasks/')
