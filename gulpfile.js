var require_dir = require('require-dir')

global.config = require('./_config/gulp.conf')
global.lib = require_dir('_lib/')

require_dir('./_tasks/')
