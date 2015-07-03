var require_dir = require('require-dir')

global.config = require('./gulp.config')

require_dir('./_gulp/tasks/')
